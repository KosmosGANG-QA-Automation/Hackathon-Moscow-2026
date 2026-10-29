import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-5 py-32 text-center">
      <p className="font-display text-9xl font-bold text-gradient">404</p>
      <p className="font-display mt-2 text-3xl">Нокаут: такой страницы нет</p>
      <Link href="/" className="mt-8 inline-block rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition hover:bg-accent-2">
        На главную
      </Link>
    </section>
  );
}
