import Image from "next/image";
import Link from "next/link";
import { profile } from "@/data/profile";

export default function MoreAboutPage() {
  const { moreAbout } = profile;

  return (
    <article className="mx-auto max-w-5xl px-6 py-12 sm:py-16">
      <Link
        href="/#about"
        className="inline-flex items-center rounded-sm text-sm text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
      >
        &larr; Back to home
      </Link>

      <header className="mt-8 max-w-3xl pb-10">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">
          Extra
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-50 sm:text-5xl sm:leading-[1.08]">
          {moreAbout.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-400">
          {moreAbout.intro}
        </p>
      </header>

      <ul className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreAbout.photos.map((photo) => (
          <li
            key={photo.src}
            className={
              photo.featured ? "sm:col-span-2 lg:row-span-2" : undefined
            }
          >
            <figure className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40">
              <div
                className={`relative min-h-64 flex-1 overflow-hidden bg-zinc-900 ${
                  photo.featured ? "aspect-[4/5] sm:aspect-auto" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={photo.featured}
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ objectPosition: photo.objectPosition }}
                  sizes={
                    photo.featured
                      ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 640px"
                      : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  }
                />
              </div>
              <figcaption className="border-t border-zinc-800 px-4 py-3 text-sm text-zinc-400">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <div className="mt-16 space-y-12 border-t border-zinc-800/80 pt-12">
        {moreAbout.stories.map((story) => (
          <section key={story.title} className="max-w-3xl">
            <h2 className="text-xl font-semibold tracking-tight text-zinc-50 sm:text-2xl">
              {story.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              {story.body}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
