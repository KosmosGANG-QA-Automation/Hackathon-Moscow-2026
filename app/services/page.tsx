import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import { ServiceIcon } from "@/components/Visuals";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Персональные тренировки по боксу и муай-тай, обучение C# .NET 8.0, авторский мерч.",
};

export default function Services() {
  return (
    <section className="relative">
      <div className="bg-grid absolute inset-x-0 top-0 h-[600px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-5 pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Услуги</p>
        <h1 className="font-display mt-2 text-5xl font-bold sm:text-7xl">Выберите <span className="text-gradient">направление</span></h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Три направления, в которых я работаю: спорт, программирование и одежда. В каждом есть понятный путь и результат.
        </p>

        <div className="mt-14 space-y-8">
          {services.map((s) => (
            <Reveal key={s.slug}>
              <TiltCard className="rounded-3xl">
                <Link
                  href={`/services/${s.slug}`}
                  className={`grid items-center gap-8 rounded-3xl border border-line bg-surface p-8 transition-colors hover:border-accent/60 md:grid-cols-[auto_1fr_auto] md:p-10`}
                >
                  <ServiceIcon slug={s.slug} className="h-24 w-24 text-accent" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted">{s.tag}</p>
                    <h2 className="font-display mt-2 text-4xl">{s.title}</h2>
                    <p className="mt-3 max-w-xl leading-relaxed text-muted">{s.description}</p>
                  </div>
                  <span className="rounded-full border border-line px-6 py-3 text-center text-sm font-semibold transition group-hover:border-accent group-hover:text-accent-2">
                    Подробнее →
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
