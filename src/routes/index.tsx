import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CustomCursor } from "@/components/CustomCursor";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Roster } from "@/components/Roster";
import { Capabilities } from "@/components/Capabilities";
import { Manifesto } from "@/components/Manifesto";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SmoothScroll />
      <CustomCursor />
      <Nav />
      <Hero />
      <Marquee />
      <Roster />
      <Capabilities />
      <Manifesto />
      <Footer />
    </main>
  );
}
