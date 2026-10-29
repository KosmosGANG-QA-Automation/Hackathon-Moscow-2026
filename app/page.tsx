import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import Gallery from "@/components/Gallery";
import Typewriter from "@/components/Typewriter";
import TiltCard from "@/components/TiltCard";
import { ServiceIcon } from "@/components/Visuals";
import { achievements, profile, services, skills } from "@/lib/data";

export default function Home() {
  const loop = [...skills, ...skills];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-16 md:grid-cols-[1.2fr_0.8fr] md:pt-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium text-muted">
              <span className="pulse-ring h-2 w-2 rounded-full bg-accent" />
              Мастер спорта · Чемпион Страны
            </p>
            <h1 className="font-display text-5xl font-bold leading-[1.02] sm:text-7xl">
              Максим
              <br />
              <span className="text-gradient">Косов</span>
            </h1>
            <p className="font-display mt-5 min-h-9 text-2xl text-muted sm:text-3xl">
              <Typewriter words={["Тренер по боксу", "Тренер по муай-тай", "Преподаватель C# .NET", "Чемпион Страны"]} />
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Ставлю удар, выстраиваю характер и учу писать код. Персональные тренировки онлайн и в зале,
              курс по C# .NET 8.0 с нуля и собственный мерч.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="rounded-full bg-accent px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95">
                Смотреть услуги
              </Link>
              <Link href="/contact" className="rounded-full border border-line px-8 py-4 text-center text-sm font-semibold transition hover:border-accent hover:text-accent-2 active:scale-95">
                Связаться со мной
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <Image
              src={asset("/logo.jpg")}
              alt="Логотип: Косов Максим Александрович, тренер по боксу"
              width={112}
              height={112}
              priority
              className="absolute -right-3 -top-6 z-10 h-28 w-28 rounded-full border-2 border-line object-cover shadow-2xl shadow-black/60 sm:-right-8"
            />
            <div className="float relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-surface-2 to-surface">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgb(225_29_46/0.35),transparent_60%)]" aria-hidden />
              <Image src={asset("/photos/portrait.jpg")} alt="Максим Косов" fill priority sizes="(min-width: 768px) 384px, 90vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" aria-hidden />
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-bg/70 p-4 backdrop-blur">
                  <p className="font-display text-3xl"><Counter to={profile.height} /></p>
                  <p className="text-xs text-muted">Рост, см</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-bg/70 p-4 backdrop-blur">
                  <p className="font-display text-3xl"><Counter to={profile.weight} /></p>
                  <p className="text-xs text-muted">Вес, кг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee overflow-hidden border-y border-line bg-surface/50 py-5" aria-hidden>
        <div className="marquee-track">
          {loop.map((s, i) => (
            <span key={i} className="font-display flex items-center whitespace-nowrap text-2xl text-muted">
              {s.name}
              <span className="mx-8 text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Услуги</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Чем я могу быть полезен</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 120}>
              <TiltCard className="h-full rounded-3xl">
                <Link href={`/services/${s.slug}`} className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 transition-colors hover:border-accent/60">
                  <ServiceIcon slug={s.slug} className="h-16 w-16 text-accent" />
                  <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-muted">{s.tag}</p>
                  <h3 className="font-display mt-2 text-3xl">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.lead}</p>
                  <span className="mt-6 text-sm font-semibold text-accent-2">Подробнее →</span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Галерея</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Зал, ринг и команда</h2>
        </Reveal>
        <div className="mt-12">
          <Gallery />
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-2">Достижения</p>
          <h2 className="font-display mt-2 text-4xl font-bold sm:text-5xl">Спорт, проверенный рингом</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {achievements.map((a, i) => (
            <Reveal key={a.title} delay={i * 120}>
              <div className="h-full rounded-3xl border border-line bg-gradient-to-b from-surface to-bg p-7">
                <span className="font-display grid h-14 w-14 place-items-center rounded-2xl bg-accent text-2xl text-white">{a.badge}</span>
                <h3 className="font-display mt-5 text-2xl">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pt-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-surface p-10 text-center sm:p-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgb(225_29_46/0.28),transparent_65%)]" aria-hidden />
            <h2 className="font-display relative text-4xl font-bold sm:text-6xl">Готовы начать?</h2>
            <p className="relative mx-auto mt-4 max-w-lg text-muted">
              Напишите мне, расскажите о цели, и я предложу формат занятий под вас.
            </p>
            <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a href={profile.telegramUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95">
                Написать в Telegram
              </a>
              <a href={`mailto:${profile.email}`} className="rounded-full border border-line px-8 py-4 text-sm font-semibold transition hover:border-accent hover:text-accent-2 active:scale-95">
                {profile.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
