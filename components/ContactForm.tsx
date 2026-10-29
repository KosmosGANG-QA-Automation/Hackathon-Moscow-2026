"use client";

import { useState } from "react";
import { profile, services } from "@/lib/data";

export default function ContactForm({ defaultService = "" }: { defaultService?: string }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const build = () =>
    `Здравствуйте, Максим!\n\nМеня зовут ${name}.\nУслуга: ${service || "не выбрана"}\nКак со мной связаться: ${contact}\n\n${message}`;

  const validate = () => {
    const e: Record<string, string> = {};
    if (name.trim().length < 2) e.name = "Введите имя";
    if (contact.trim().length < 3) e.contact = "Укажите почту или Telegram";
    if (message.trim().length < 5) e.message = "Напишите пару слов о задаче";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const sendMail = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, contact, service, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setName("");
      setContact("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const sendTelegram = async () => {
    if (!validate()) return;
    try {
      await navigator.clipboard.writeText(build());
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      /* буфер обмена недоступен: просто открываем Telegram */
    }
    window.open(profile.telegramUrl, "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none transition placeholder:text-muted/60 focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <form onSubmit={sendMail} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Ваше имя</span>
          <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <span className="mt-1 block text-xs text-accent-2">{errors.name}</span>}
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium">Почта или Telegram</span>
          <input className={field} value={contact} onChange={(e) => setContact(e.target.value)} placeholder="@username" aria-invalid={!!errors.contact} />
          {errors.contact && <span className="mt-1 block text-xs text-accent-2">{errors.contact}</span>}
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Что вас интересует</span>
        <select className={field} value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">Выберите услугу</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Другое">Другое</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium">Сообщение</span>
        <textarea className={`${field} min-h-32 resize-y`} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Расскажите о цели, уровне и удобном времени" aria-invalid={!!errors.message} />
        {errors.message && <span className="mt-1 block text-xs text-accent-2">{errors.message}</span>}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button type="submit" disabled={status === "sending"} className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95 disabled:opacity-60">
          {status === "sending" ? "Отправка..." : "Отправить сообщение"}
        </button>
        <button type="button" onClick={sendTelegram} className="rounded-full border border-line px-7 py-3.5 text-sm font-semibold transition hover:border-accent hover:text-accent-2 active:scale-95">
          Написать в Telegram
        </button>
      </div>
      <p aria-live="polite" className="min-h-5 text-xs text-muted">
        {status === "sent"
          ? "Сообщение отправлено! Я отвечу в ближайшее время."
          : status === "error"
            ? `Не удалось отправить. Напишите напрямую: ${profile.email}`
            : copied
              ? "Текст сообщения скопирован: вставьте его в чат Telegram."
              : "Сообщение придёт мне на почту, отвечу как можно скорее."}
      </p>
    </form>
  );
}
