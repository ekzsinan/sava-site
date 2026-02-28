import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Ad, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"SAVA Web Formu" <${process.env.SMTP_USER}>`,
      to: "info@sava.company",
      replyTo: email,
      subject: `Yeni İletişim Formu: ${name}${service ? ` — ${service}` : ""}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9fafb; border-radius: 12px;">
          <h2 style="color: #1a1a2e; margin-bottom: 24px; font-size: 22px;">📬 Yeni Form Mesajı</h2>
          <table style="width:100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <tbody>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; width: 120px; font-weight: 600;">Ad Soyad</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; font-weight: 600;">E-posta</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; font-weight: 600;">Telefon</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${phone}</td>
              </tr>` : ""}
              ${company ? `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; font-weight: 600;">Şirket</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${company}</td>
              </tr>` : ""}
              ${service ? `
              <tr style="border-bottom: 1px solid #f0f0f0;">
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; font-weight: 600;">Hizmet</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px;">${service}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 12px 16px; color: #6b7280; font-size: 13px; font-weight: 600; vertical-align: top;">Mesaj</td>
                <td style="padding: 12px 16px; color: #111827; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${message}</td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af; text-align: center;">Bu e-posta sava.company iletişim formu aracılığıyla gönderilmiştir.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
      { status: 500 }
    );
  }
}
