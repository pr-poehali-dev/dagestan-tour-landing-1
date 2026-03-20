import { useEffect, useState } from "react";
import Navbar from "@/components/tour/Navbar";
import HeroSection from "@/components/tour/HeroSection";
import ProgramSection from "@/components/tour/ProgramSection";
import RouteIncludedContacts from "@/components/tour/RouteIncludedContacts";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDay, setActiveDay] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: "#0f0a08", color: "#f5ede3", overflowX: "hidden" }}>
      <Navbar
        scrollY={scrollY}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection
        scrollY={scrollY}
        scrollTo={scrollTo}
      />
      <ProgramSection
        activeDay={activeDay}
        setActiveDay={setActiveDay}
      />
      <RouteIncludedContacts
        scrollTo={scrollTo}
      />

      <style>{`
        @keyframes dagFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes dagBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(7px); }
        }
        ::placeholder { color: rgba(245,237,227,0.3); }
        @media (max-width: 768px) {
          .dag-desktop-nav { display: none !important; }
          .dag-burger-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
