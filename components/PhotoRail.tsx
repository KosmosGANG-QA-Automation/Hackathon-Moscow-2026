import { asset } from "@/lib/asset";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { lifePhotos } from "@/lib/data";

// Горизонтальная лента с прокруткой: карточки не лежат кучей, листаются по одной
export default function PhotoRail() {
  return (
    <Reveal>
      <div className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-color:var(--color-line)_transparent] [scrollbar-width:thin]">
        {lifePhotos.map((p) => (
          <figure key={p.src} className="group w-[72%] shrink-0 snap-start sm:w-[300px] lg:w-[340px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-line bg-surface">
              <Image
                src={asset(p.src)}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 300px, 72vw"
                className={`${p.pos} object-cover transition duration-700 group-hover:scale-105`}
              />
            </div>
            <figcaption className="font-display mt-3 px-1 text-lg text-muted">{p.caption}</figcaption>
          </figure>
        ))}
      </div>
    </Reveal>
  );
}
