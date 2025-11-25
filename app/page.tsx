import { ParallaxBackground } from "@/components/ui/ParallaxBackground";
import { NavIndicator } from "@/components/ui/NavIndicator";
import { Section } from "@/components/ui/Section";
import { GodCard } from "@/components/ui/GodCard";
import { chapters } from "@/lib/data";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <ParallaxBackground />
      <NavIndicator />

      <div className="relative z-10 flex flex-col">
        {/* Hero / Title Section */}
        <Section id="hero" className="min-h-screen flex-col text-center">
          <h1 className="text-6xl md:text-9xl font-serif text-parchment-100 mb-6 tracking-widest animate-float">
            THE ODYSSEY
          </h1>
          <p className="text-bronze-400 text-lg md:text-xl tracking-[0.3em] uppercase font-light">
            A Mythic Voyage
          </p>
          <div className="mt-20 animate-pulse-glow">
            <span className="text-parchment-300 text-sm tracking-widest">
              SCROLL TO BEGIN
            </span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-parchment-300 to-transparent mx-auto mt-4" />
          </div>
        </Section>

        {/* Chapters */}
        {chapters.map((chapter) => (
          <Section key={chapter.id} id={chapter.id}>
            <GodCard
              name={chapter.name}
              title={chapter.title}
              description={chapter.description}
              facts={chapter.facts}
              symbol={chapter.symbol}
              alignment={chapter.alignment}
            />
          </Section>
        ))}

        {/* Footer / End */}
        <footer className="py-20 text-center text-parchment-300/40 text-sm relative z-10">
          <p>Crafted in the spirit of Homer.</p>
        </footer>
      </div>
    </main>
  );
}
