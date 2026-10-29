import { asset } from "@/lib/asset";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gymPhotos } from "@/lib/data";

// Ровная сетка 3×N: одинаковые карточки, средний столбец сдвинут вниз
export default function Gallery() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8 md:pb-12">
      {gymPhotos.map((g, i) => (
        <Reveal key={g.src} delay={(i % 3) * 100} className={i % 3 === 1 ? "md:mt-12" : ""}>
          <figure className="group relative aspect-[4/5] overflow-hidden rounded-3xl border border-line bg-surface">
            <Image
              src={asset(g.src)}
              alt={g.alt}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`${g.pos} object-cover transition duration-700 group-hover:scale-105`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" aria-hidden />
            <figcaption className="font-display absolute bottom-4 left-4 rounded-full border border-white/15 bg-bg/60 px-4 py-1.5 text-sm backdrop-blur">
              {g.caption}
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
