import nodemailer from "nodemailer";
import { profile } from "@/lib/data";

export const runtime = "nodejs";

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const name = clean(body?.name, 100);
  const contact = clean(body?.contact, 200);
  const service = clean(body?.service, 100);
  const message = clean(body?.message, 5000);

  if (name.length < 2 || contact.length < 3 || message.length < 5) {
    return Response.json({ error: "Заполните все поля" }, { status: 400 });
  }

  const { SMTP_HOST = "smtp.gmail.com", SMTP_PORT = "465", SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_USER || !SMTP_PASS) {
    return Response.json({ error: "Почта на сервере не настроена" }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  try {
    await transporter.sendMail({
      from: `"Сайт" <${SMTP_USER}>`,
      to: process.env.CONTACT_TO || profile.email,
      subject: `Заявка с сайта: ${service || "вопрос"}`,
      text: `Имя: ${name}\nУслуга: ${service || "не выбрана"}\nКонтакт: ${contact}\n\n${message}`,
    });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Не удалось отправить письмо" }, { status: 502 });
  }
}
