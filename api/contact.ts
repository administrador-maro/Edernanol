import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'
import { z } from 'zod'

// Esquema y validación
const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10).max(15),
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
      host: process.env.SMTP_HOST,                 // "mail.edernanol.com", // servidor de Raxa
      port: Number(process.env.SMTP_PORT || 465),  // 465 (SSL/TLS)
      secure: Number(process.env.SMTP_PORT || 465) === 465, // true porque es 465
      auth: {
        user: process.env.SMTP_USER,               // "contacto@edernanol.com",
        pass: process.env.SMTP_PASS,               // contacto2025
      },
    })

    // Email a tu bandeja (TO_EMAIL) con reply-to del cliente
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Edernanol] ${subject}`,
      text: `De: ${email}\nTeléfono: ${parsed.data.phone}\n\n${message}`,
      html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color:#f4f6f8; padding:40px 0; color:#333;">
        <table align="center" cellpadding="0" cellspacing="0" style="max-width:620px; width:100%; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.08);">
          
          <!-- LOGO -->
          <tr>
            <td style="padding:25px 20px 10px; text-align:center;">
              <img src="https://www.edernanol.com/logo.png" alt="Edernanol" width="180" style="display:block; margin:0 auto 5px; border:none;" />
            </td>
          </tr>

          <!-- BARRA PRINCIPAL -->
          <tr>
            <td style="background-color:#29C4AB; color:#ffffff; text-align:center; padding:18px 30px; font-size:17px; font-weight:500;">
              Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.
            </td>
          </tr>

          <!-- CUERPO DEL MENSAJE -->
          <tr>
            <td style="padding:30px 40px;">
              <table cellpadding="6" cellspacing="0" style="width:100%; border-collapse:collapse; font-size:16px;">
                <tr>
                  <td style="width:150px; font-weight:700; color:#065077;">Nombre / Email:</td>
                  <td><a href="mailto:${email}" style="color:#065077; text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight:700; color:#065077;">Teléfono:</td>
                  <td style="color:#333;">${parsed.data.phone}</td>
                </tr>
                <tr>
                  <td style="font-weight:700; color:#065077;">Asunto:</td>
                  <td style="color:#333;">${subject}</td>
                </tr>
              </table>
              <hr style="margin:25px 0; border:none; border-top:1px solid #e0e0e0;" />
              <p style="font-size:16px; line-height:1.6; color:#444;">
                ${message.replace(/\n/g, '<br/>')}
              </p>
            </td>
          </tr>

          <!-- PIE DE PÁGINA -->
          <tr>
            <td style="background-color:#065077; text-align:center; color:#ffffff; padding:20px 30px; font-size:14px;">
              Este mensaje fue enviado desde el sitio web de <strong>Edernanol</strong>.<br/>
              <a href="https://edernanol.com" style="color:#29C4AB; text-decoration:none;">www.edernanol.com</a>
            </td>
          </tr>

        </table>
      </div>
      `,
    })


    return res.status(200).json({ ok: true, id: info.messageId })
  } catch (err: any) {
    console.error('Email error:', err)
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo' })
  }
}
