import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Gallery from "@/components/Gallery";
import PhotoRail from "@/components/PhotoRail";
import Counter from "@/components/Counter";
import { achievements, profile, skills, timeline } from "@/lib/data";

export const metadata: Metadata = {
  title: "Обо мне",
  description: "Биография Максима Косова: мастер спорта по боксу, чемпион Страны, тренер, программист на C#.",
};

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 md:pt-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Обо мне</p>
          <h1 className="font-display mt-2 max-w-3xl text-5xl font-bold leading-[1.05] sm:text-7xl">
            Боец, тренер и <span className="text-gradient">разработчик</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Меня зовут {profile.name}. Я мастер спорта по боксу, чемпион Страны и многократный чемпион областей.
            Тренирую классический и тайский бокс, преподаю C# и .NET.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { to: profile.height, s: " см", l: "Рост" },
          { to: profile.weight, s: " кг", l: "Вес" },
          { to: 2, s: " вида", l: "Бокс: классика и муай-тай" },
          { to: 4, s: " страны", l: "Жил и тренировался" },
        ].map((x, i) => (
          <Reveal key={x.l} delay={i * 90}>
            <div className="rounded-3xl border border-line bg-surface p-6">
              <p className="font-display text-5xl text-accent-2">
                <Counter to={x.to} suffix={x.s} />
              </p>
              <p className="mt-1 text-sm text-muted">{x.l}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Зал и ринг</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Жизнь в спорте</h2>
        </Reveal>
        <div className="mt-10">
          <Gallery />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Вне ринга</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Путешествия и стиль</h2>
        </Reveal>
        <div className="mt-10">
          <PhotoRail />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pt-28">
        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Мой путь</h2>
        </Reveal>
        <ol className="relative mt-12 space-y-10 border-l border-line pl-8">
          {timeline.map((t, i) => (
            <li key={t.title} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-bg bg-accent" aria-hidden />
              <Reveal delay={i * 60}>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent-2">{t.period}</p>
                <h3 className="font-display mt-1 text-2xl sm:text-3xl">{t.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-28">
        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Звания и титулы</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 100}>
              <div className="h-full rounded-3xl border border-line bg-surface p-7">
                <span className="font-display grid h-14 w-14 place-items-center rounded-2xl bg-accent text-2xl text-white">{a.badge}</span>
                <h3 className="font-display mt-5 text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm text-muted">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 pt-28">
        <Reveal>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Навыки</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-line bg-surface px-5 py-2 text-sm transition hover:border-accent hover:text-accent-2">
                {s.name}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-16 rounded-3xl border border-line bg-surface p-8 text-center">
            <p className="font-display text-3xl">Хотите потренироваться или научиться программировать?</p>
            <Link href="/contact" className="mt-6 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95">
              Связаться
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
