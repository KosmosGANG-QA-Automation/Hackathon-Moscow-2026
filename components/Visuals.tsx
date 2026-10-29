/* Лёгкие SVG-иллюстрации вместо тяжёлых изображений */

export function Glove({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <path d="M34 54c0-20 12-34 32-34 22 0 36 14 36 34 0 10-3 18-9 24v22a6 6 0 0 1-6 6H52a6 6 0 0 1-6-6V84C38 78 34 68 34 54Z" fill="currentColor" opacity=".95" />
      <path d="M46 98h50M60 36c-8 2-14 8-14 18" stroke="#0a0a0c" strokeWidth="4" strokeLinecap="round" opacity=".45" />
      <rect x="46" y="98" width="50" height="14" rx="4" fill="#0a0a0c" opacity=".35" />
    </svg>
  );
}

export function Code({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      <rect x="10" y="22" width="100" height="76" rx="12" fill="currentColor" opacity=".95" />
      <path d="M44 48 28 60l16 12M76 48l16 12-16 12M66 44 54 76" stroke="#0a0a0c" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity=".6" />
    </svg>
  );
}

export function Shirt({ className = "", hoodie = false }: { className?: string; hoodie?: boolean }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" aria-hidden>
      {hoodie ? (
        <>
          <path d="M40 22 26 30 8 62l16 8 8-10v50h56V60l8 10 16-8-18-32-14-8-6 12H46l-6-12Z" fill="currentColor" opacity=".95" />
          <path d="M46 34c4 10 24 10 28 0" stroke="#0a0a0c" strokeWidth="4" strokeLinecap="round" opacity=".5" />
          <path d="M44 84h32l4 14H40l4-14Z" fill="#0a0a0c" opacity=".25" />
        </>
      ) : (
        <>
          <path d="M42 18 14 32l10 24 12-5v55h48V51l12 5 10-24-28-14c-3 8-9 12-18 12s-15-4-18-12Z" fill="currentColor" opacity=".95" />
          <path d="M60 64l8 8-8 8-8-8 8-8Z" fill="#0a0a0c" opacity=".35" />
        </>
      )}
    </svg>
  );
}

export function ServiceIcon({ slug, className = "" }: { slug: string; className?: string }) {
  if (slug === "boxing") return <Glove className={className} />;
  if (slug === "csharp") return <Code className={className} />;
  return <Shirt className={className} />;
}
