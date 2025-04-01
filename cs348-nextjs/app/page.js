"use client";
import HeroSection from "@/components/ui/HeroSection";
import TopFavCities from "@/components/ui/TopFavCities";

export default function Home() {
  return (
    <main>
      {/* Hero Banner */}
      <HeroSection />

      {/* Top 10 Section */}
      <TopFavCities />

      {/* Additional Sections, e.g., All Cities, CTA, etc. */}
      <section className="max-w-screen-lg mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">View All Cities</h2>
        <p>Explore our entire catalog of destinations to find your perfect trip!</p>
        {/* ... Possibly a list or link to /cities page ... */}
      </section>
    </main>
  );
}

