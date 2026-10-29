import { asset } from "@/lib/asset";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { ServiceIcon } from "@/components/Visuals";
import { services } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.title, description: s.lead } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.3fr_0.7fr] md:pt-20">
          <div>
            <Link href="/services" className="text-sm text-muted transition hover:text-accent-2">← Все услуги</Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent-2">{s.tag}</p>
            <h1 className="font-display mt-2 text-5xl font-bold leading-[1.05] sm:text-7xl">{s.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{s.lead}</p>
            <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent-2 active:scale-95">
              {s.cta}
            </Link>
          </div>
          <div className="float mx-auto grid aspect-square w-full max-w-xs place-items-center rounded-[2rem] border border-line bg-gradient-to-br from-surface-2 to-surface">
            {s.slug === "merch" ? (
              <Image src={asset("/photos/kosmos-gang.jpg")} alt="Kosmos Gang" width={520} height={760} priority className="h-full w-full rounded-[2rem] object-cover object-[50%_70%]" />
            ) : (
              <ServiceIcon slug={s.slug} className="h-40 w-40 text-accent" />
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">О чём это</h2>
          <p className="mt-4 leading-relaxed text-muted">{s.description}</p>
          <ul className="mt-6 space-y-3">
            {s.points.map((p) => (
              <li key={p} className="flex gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent text-[10px] text-white">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="space-y-5">
          {s.formats.map((f, i) => (
            <Reveal key={f.name} delay={i * 120}>
              <div className="rounded-3xl border border-line bg-surface p-7">
                <h3 className="font-display text-2xl text-accent-2">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={240}>
            <div className="rounded-3xl border border-dashed border-line p-7 text-sm text-muted">
              Стоимость обсуждается индивидуально: напишите мне, и я назову цену под вашу задачу.
            </div>
          </Reveal>
        </div>
      </section>

      {s.slug === "merch" && (
        <section className="mx-auto max-w-6xl px-5 pt-24">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl">Мерч в деле</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[
                { src: "/photos/boxing-club.jpg", alt: "Boxing Club: майка с принтом", pos: "object-[50%_75%]" },
                { src: "/photos/kosmos-gang.jpg", alt: "Kosmos Gang", pos: "object-[50%_70%]" },
              ].map((p) => (
                <div key={p.src} className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-line">
                  <Image src={asset(p.src)} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover ${p.pos}`} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Как это проходит</h2>
        </Reveal>
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.steps.map((st, i) => (
            <Reveal key={st.title} delay={i * 100}>
              <li className="h-full list-none rounded-3xl border border-line bg-surface p-6">
                <span className="font-display text-5xl text-accent/70">0{i + 1}</span>
                <h3 className="font-display mt-2 text-xl">{st.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{st.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-24">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl">Другие услуги</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="flex items-center gap-5 rounded-3xl border border-line bg-surface p-6 transition hover:border-accent/60">
                <ServiceIcon slug={o.slug} className="h-14 w-14 shrink-0 text-accent" />
                <div>
                  <p className="font-display text-2xl">{o.title}</p>
                  <p className="text-sm text-muted">{o.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
