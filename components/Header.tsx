"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="font-display flex items-center gap-2 text-xl" aria-label="На главную">
          <Image src="/logo.jpg" alt="" width={40} height={40} priority className="h-10 w-10 rounded-full border border-line object-cover" />
          <span className="hidden sm:inline">Максим Косов</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Основное меню">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isActive(item.href) ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded bg-accent" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-3 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition hover:bg-accent-2"
          >
            Связаться
          </Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 bg-ink transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 md:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 pb-6 pt-2" aria-label="Мобильное меню">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-display rounded-xl px-4 py-3 text-2xl ${
                isActive(item.href) ? "bg-surface text-accent-2" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
