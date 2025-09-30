import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Esquema y validación
const ContactSchema = z.object({
  email: z.string().email(),
  subject: z.string().min(3).max(120),
  message: z.string().min(10).max(5000),
  // Honeypot anti-bots (campo oculto que los humanos dejan vacío)
  website: z.string().optional().default(""),
})

// Helper: obtener el body (por si no viene parseado)
async function getJsonBody(req: VercelRequest) {
  if (req.body && typeof req.body === 'object') return req.body
  const chunks: Uint8Array[] = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  try { return JSON.parse(raw) } catch { return {} }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permite preflight si algún día llamas desde otro dominio
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    return res.status(204).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const body = await getJsonBody(req)
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return res.status(400).json({ ok: false, error: 'Datos inválidos', issues: parsed.error.flatten() })
    }

    const { email, subject, message, website } = parsed.data
    // Honeypot: si se llena, asumimos bot y respondemos OK sin enviar
    if (website && website.trim() !== '') {
      return res.status(200).json({ ok: true, skipped: true })
    }

    // Transport SMTP (usa variables de entorno)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,                 // p.ej. smtp.gmail.com
      port: Number(process.env.SMTP_PORT || 465),  // 465 (secure) o 587 (starttls)
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,               // tu correo
        pass: process.env.SMTP_PASS,               // tu App Password u otro
      },
    })

    // Email a tu bandeja (TO_EMAIL) con reply-to del cliente
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Edernanol] ${subject}`,
      text: `De: ${email}\n\n${message}`,
      html: `
        <p><strong>De:</strong> ${email}</p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    })

    return res.status(200).json({ ok: true, id: info.messageId })
  } catch (err: any) {
    console.error('Email error:', err)
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo' })
  }
}
