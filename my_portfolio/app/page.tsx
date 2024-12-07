import Hero from "@/components/Hero";
import '../app/globals.css';
import Skills from "@/components/Tech_Stack";
import { MarqueeDemo } from "@/components/magicui/marquee";

import Business from "@/components/Business";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FloatingDockDemo } from "@/components/magicui/Dock";
import Plans from "@/components/Plans";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-black text-white flex flex-col ">
      <Hero/>
      <Skills/>
      <Business/>
      <div className="relative z-50 ">
        <FloatingDockDemo />
      </div>
      <Plans/>
      <Contact />
    </main>
  );
}
