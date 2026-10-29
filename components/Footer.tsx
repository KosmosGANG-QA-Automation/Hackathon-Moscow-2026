import { asset } from "@/lib/asset";
import Image from "next/image";
import Link from "next/link";
import { nav, profile, services } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-line bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <Image src={asset("/logo.jpg")} alt="Косов Максим Александрович, тренер по боксу" width={96} height={96} className="h-24 w-24 rounded-full border border-line object-cover" />
          <p className="font-display mt-4 text-2xl">{profile.short}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            Мастер спорта по боксу, чемпион Страны. Тренер, преподаватель C# и автор собственного мерча.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">Страницы</p>
          <ul className="space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-accent-2">
                  {n.label}
                </Link>
              </li>
            ))}
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition hover:text-accent-2">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">Контакты</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="transition hover:text-accent-2">
                {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.telegramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-accent-2">
                Telegram: @{profile.telegram}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Все права защищены.
      </div>
    </footer>
  );
}
