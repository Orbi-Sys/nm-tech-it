import Link from "next/link";
import { leistungenData, LeistungSlug } from "@/lib/data";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

const iconMap: Record<LeistungSlug, string> = {
  webentwicklung: "code",
  "ki-integrationen": "brain",
  "ki-automatisierung": "workflow",
  "api-anbindungen": "api",
  dashboards: "chart",
  "individuelle-softwareloesungen": "cube",
};

export function LeistungRelated({ currentSlug }: { currentSlug: LeistungSlug }) {
  const otherSlugs = (Object.keys(leistungenData) as LeistungSlug[]).filter(
    (s) => s !== currentSlug
  );

  return (
    <section className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-xs tracking-[0.25em] uppercase text-gold-dim mb-8 text-center">
          Weitere Leistungen
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherSlugs.map((slug) => {
            const d = leistungenData[slug];
            return (
              <Link
                key={slug}
                href={`/leistungen/${slug}`}
                className="group h-full flex items-start gap-4 p-6 rounded-2xl glass glow-ring border border-white/5 hover:border-gold/20 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-gold/5 border border-gold/10 group-hover:border-gold/25 transition-colors shrink-0 self-start">
                  <ServiceIcon name={iconMap[slug]} />
                </div>
                <div className="flex flex-col">
                  <p className="font-display text-sm font-semibold text-silver-bright group-hover:text-gold-bright transition-colors mb-1">
                    {d.title}
                  </p>
                  <p className="text-xs text-silver-dim leading-snug">{d.intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
