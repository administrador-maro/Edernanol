import type { VercelRequest, VercelResponse } from "@vercel/node"
import nodemailer from "nodemailer"
import { z } from "zod"

// Validación del formulario
const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10).max(15),
  subject: z.string().min(3).max(120),
  message: z.string().min(10).max(5000),
  website: z.string().optional().default(""),
})

// Helper para obtener el body correctamente
async function getJsonBody(req: VercelRequest) {
  if (req.body && typeof req.body === "object") return req.body
  const chunks: Uint8Array[] = []
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk)
  }
  const raw = Buffer.concat(chunks).toString("utf8")
  try {
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Permite CORS (preflight)
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    return res.status(204).end()
  }

  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" })
  }

  try {
    const body = await getJsonBody(req)
    const parsed = ContactSchema.safeParse(body)
    if (!parsed.success) {
      return res
        .status(400)
        .json({ ok: false, error: "Datos inválidos", issues: parsed.error.flatten() })
    }

    const { email, subject, message, phone, website } = parsed.data
    if (website && website.trim() !== "") {
      return res.status(200).json({ ok: true, skipped: true })
    }

    // Configuración SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Envío del correo con diseño mejorado
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `[Edernanol] ${subject}`,
      text: `De: ${email}\nTeléfono: ${phone}\n\n${message}`,
      html: `
      <div style="font-family:'Segoe UI',Arial,sans-serif;background-color:#f3f7f9;padding:40px 0;color:#333;">
        <table align="center" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background-color:#ffffff;border-radius:14px;overflow:hidden;box-shadow:0 4px 14px rgba(0,0,0,0.08);">
          
          <!-- CABECERA -->
          <tr>
            <td style="background-color:#198383;text-align:center;color:#ffffff;text-align:center;padding:30px 40px;">
              <h1 style="margin:0;font-size:26px;font-weight:700;">Nuevo mensaje de contacto</h1>
              <p style="margin:6px 0 0;font-size:16px;">Edernanol S.A. de C.V.</p>
            </td>
          </tr>

          <!-- CONTENIDO -->
          <tr>
            <td style="padding:35px 45px;">
              <p style="font-size:18px;line-height:1.5;color:#333;margin-bottom:25px;">
                Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web:
              </p>

              <table cellpadding="8" cellspacing="0" style="width:100%;font-size:17px;border-collapse:collapse;">
                <tr>
                  <td style="width:160px;font-weight:700;color:#065077;">Email:</td>
                  <td><a href="mailto:${email}" style="color:#065077;text-decoration:none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="font-weight:700;color:#065077;">Teléfono:</td>
                  <td>${phone}</td>
                </tr>
                <tr>
                  <td style="font-weight:700;color:#065077;">Asunto:</td>
                  <td>${subject}</td>
                </tr>
              </table>

              <hr style="margin:30px 0;border:none;border-top:1px solid #e0e0e0;" />

              <p style="font-size:17px;line-height:1.7;color:#333;margin-bottom:10px;">
                ${message.replace(/\n/g, "<br/>")}
              </p>
            </td>
          </tr>

          <!-- PIE DE PÁGINA -->
          <tr>
            <td style="background-color:#065077;text-align:center;color:#ffffff;padding:25px 35px;font-size:15px;">
              Este mensaje fue enviado desde el sitio web de <strong>Edernanol</strong>.<br/>
              <a href="https://edernanol.com" style="color:#29C4AB;text-decoration:none;font-weight:500;">www.edernanol.com</a>
            </td>
          </tr>
        </table>
      </div>
      `,
    })

    return res.status(200).json({ ok: true, id: info.messageId })
  } catch (err: any) {
    console.error("Email error:", err)
    return res.status(500).json({ ok: false, error: "No se pudo enviar el correo" })
  }
}
