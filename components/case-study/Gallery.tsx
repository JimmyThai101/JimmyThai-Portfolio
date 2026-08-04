import Image from "next/image";
import type { GalleryItem } from "@/types/case-study";

type GalleryProps = {
  title: string;
  items: GalleryItem[];
};

export default function Gallery({ title, items }: GalleryProps) {
  return (
    <section id="gallery" className="scroll-mt-24 border-t border-zinc-800 pt-12">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
        {title}
      </h2>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.src}
            className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/60"
          >
            <div className="relative aspect-[16/10] bg-zinc-900">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                unoptimized={item.src.endsWith(".svg")}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <figcaption className="border-t border-zinc-800 px-4 py-3 text-sm leading-relaxed text-zinc-400">
              {item.caption}
            </figcaption>
          </li>
        ))}
      </ul>
    </section>
  );
}
