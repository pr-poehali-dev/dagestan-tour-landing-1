import Icon from "@/components/ui/icon";
import AnimSection from "./AnimSection";
import { HERO_IMAGE } from "./data";

interface HeroSectionProps {
  scrollY: number;
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollY, scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section id="hero" style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: "cover", backgroundPosition: "center",
          transform: `translateY(${scrollY * 0.35}px)`,
          willChange: "transform",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(15,10,8,0.25) 0%, rgba(15,10,8,0.1) 30%, rgba(15,10,8,0.65) 75%, rgba(15,10,8,1) 100%)",
        }} />

        <div style={{
          position: "relative", zIndex: 2, height: "100%",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          textAlign: "center", padding: "0 24px",
        }}>
          <div style={{
            display: "inline-block", border: "1px solid rgba(212,160,80,0.6)",
            padding: "6px 20px", marginBottom: 28, borderRadius: 2,
            fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "#d4a050",
            animation: "dagFadeUp 1s ease 0.2s both",
          }}>
            Женский тур · 7 дней · до 10 человек
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(56px, 11vw, 130px)",
            fontWeight: 300, lineHeight: 0.95, marginBottom: 16,
            animation: "dagFadeUp 1s ease 0.4s both",
            letterSpacing: -2,
          }}>
            Дагестан
          </h1>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 3.5vw, 42px)",
            fontWeight: 300, fontStyle: "italic",
            color: "#d4a050", marginBottom: 36,
            animation: "dagFadeUp 1s ease 0.6s both",
          }}>
            7 дней расслабления, вдохновения и сил
          </h2>
          <p style={{
            maxWidth: 500, fontSize: 14, lineHeight: 1.9, opacity: 0.8,
            marginBottom: 52, animation: "dagFadeUp 1s ease 0.8s both",
            fontWeight: 300,
          }}>
            Место, где можно полностью раскрыться и восстановить силы. Погружение в атмосферу душевного спокойствия и красоты гор.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", animation: "dagFadeUp 1s ease 1s both" }}>
            <button onClick={() => scrollTo("contacts")} style={{
              background: "#d4a050", color: "#0f0a08", border: "none", cursor: "pointer",
              padding: "17px 44px", fontSize: 12, fontWeight: 700,
              letterSpacing: 2.5, textTransform: "uppercase", borderRadius: 2,
              transition: "all 0.25s ease",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.transform = "translateY(-3px)"; (e.target as HTMLElement).style.background = "#e8b860"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.transform = "translateY(0)"; (e.target as HTMLElement).style.background = "#d4a050"; }}
            >Забронировать тур</button>
            <button onClick={() => scrollTo("program")} style={{
              background: "transparent", color: "#f5ede3", border: "1px solid rgba(245,237,227,0.45)", cursor: "pointer",
              padding: "17px 44px", fontSize: 12, fontWeight: 500,
              letterSpacing: 2.5, textTransform: "uppercase", borderRadius: 2,
              transition: "all 0.25s ease",
            }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#d4a050"; (e.target as HTMLElement).style.color = "#d4a050"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(245,237,227,0.45)"; (e.target as HTMLElement).style.color = "#f5ede3"; }}
            >Программа тура</button>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: 0.45, animation: "dagBounce 2.5s ease-in-out infinite",
        }}>
          <span style={{ fontSize: 9, letterSpacing: 3, textTransform: "uppercase" }}>Листать</span>
          <Icon name="ChevronDown" size={14} />
        </div>
      </section>

      {/* QUOTE STRIP */}
      <AnimSection>
        <div style={{ background: "#d4a050", color: "#0f0a08", padding: "32px 24px", textAlign: "center" }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(17px, 2.8vw, 26px)",
            fontStyle: "italic", fontWeight: 400, maxWidth: 760, margin: "0 auto",
          }}>
            «Величественные горы, тёплый солнечный свет и гармония природы — Дагестан навсегда останется в вашем сердце»
          </p>
        </div>
      </AnimSection>
    </>
  );
}
