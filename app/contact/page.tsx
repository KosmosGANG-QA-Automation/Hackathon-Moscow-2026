"use client";

import { Suspense } from "react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { profile } from "@/lib/data";
import { useSearchParams } from "next/navigation";

// Отдельный клиентский компонент для безопасного чтения query-параметров в режиме статического экспорта
function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  
  return <ContactForm defaultService={service} />;
}

export default function Contact() {
  return (
    <section className="relative">
      <div className="bg-grid absolute inset-x-0 top-0 h-[600px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Контакты</p>
        <h1 className="font-display mt-2 text-5xl font-bold sm:text-7xl">
          Давайте <span className="text-gradient">познакомимся</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Напишите удобным способом, и я отвечу как можно скорее.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <Reveal>
              <a href={`mailto:${profile.email}`} className="block rounded-3xl border border-line bg-surface p-7 transition hover:border-accent/60">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Почта</p>
                <p className="mt-2 break-all text-lg font-semibold">{profile.email}</p>
              </a>
            </Reveal>

            <Reveal delay={100}>
              <a href={profile.telegramUrl} target="_blank" rel="noopener noreferrer" className="block rounded-3xl border border-line bg-surface p-7 transition hover:border-accent/60">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted">Telegram</p>
                <p className="mt-2 text-lg font-semibold">@{profile.telegram}</p>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-3xl border border-dashed border-line p-7 text-sm leading-relaxed text-muted">
                Тренировки: онлайн и офлайн. Обучение СШ и заказ мерча: онлайн.
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="rounded-3xl border border-line bg-surface/70 p-7 sm:p-9">
              <Suspense fallback={<div className="text-muted text-sm">Загрузка формы...</div>}>
                <ContactFormWrapper />
              </Suspense>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
