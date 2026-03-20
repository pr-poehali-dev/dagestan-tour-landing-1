import Icon from "@/components/ui/icon";
import AnimSection from "./AnimSection";
import { days } from "./data";

interface ProgramSectionProps {
  activeDay: number;
  setActiveDay: (day: number) => void;
}

export default function ProgramSection({ activeDay, setActiveDay }: ProgramSectionProps) {
  return (
    <section id="program" style={{ padding: "100px 24px", maxWidth: 1200, margin: "0 auto" }}>
      <AnimSection>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "#d4a050" }}>День за днём</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300, marginTop: 12 }}>
            Программа тура
          </h2>
        </div>
      </AnimSection>

      {/* Day tabs */}
      <AnimSection delay={150}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
          {days.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(i)} style={{
              background: activeDay === i ? "#d4a050" : "transparent",
              color: activeDay === i ? "#0f0a08" : "#f5ede3",
              border: `1px solid ${activeDay === i ? "#d4a050" : "rgba(212,160,80,0.3)"}`,
              padding: "10px 18px", cursor: "pointer", borderRadius: 2,
              fontSize: 11, fontWeight: 600, letterSpacing: 1.5,
              transition: "all 0.25s ease",
            }}>День {d.day}</button>
          ))}
        </div>
      </AnimSection>

      {/* Active day card */}
      <AnimSection delay={250}>
        <div style={{
          background: "linear-gradient(135deg, rgba(212,160,80,0.09) 0%, transparent 100%)",
          border: "1px solid rgba(212,160,80,0.22)", borderRadius: 4,
          padding: "48px 48px 44px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 36 }}>
            <span style={{ fontSize: 56 }}>{days[activeDay].emoji}</span>
            <div>
              <div style={{ fontSize: 10, color: "#d4a050", letterSpacing: 3, textTransform: "uppercase", marginBottom: 8 }}>
                День {days[activeDay].day}
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 3vw, 38px)", fontWeight: 400 }}>
                {days[activeDay].title}
              </h3>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {days[activeDay].activities.map((act, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "16px 20px",
                background: "rgba(212,160,80,0.07)", borderRadius: 3,
                borderLeft: "2px solid #d4a050",
              }}>
                <span style={{ color: "#d4a050", fontSize: 11, fontWeight: 700, marginTop: 2, flexShrink: 0 }}>0{i + 1}</span>
                <span style={{ fontSize: 13, lineHeight: 1.65, opacity: 0.9 }}>{act}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimSection>

      {/* Timeline */}
      <div style={{ marginTop: 56 }}>
        {days.map((d, i) => (
          <AnimSection key={i} delay={i * 70}>
            <div
              style={{
                display: "flex", gap: 24, padding: "22px 0",
                borderBottom: "1px solid rgba(212,160,80,0.1)",
                cursor: "pointer", transition: "padding-left 0.3s ease",
                paddingLeft: activeDay === i ? 12 : 0,
              }}
              onClick={() => setActiveDay(i)}
              onMouseEnter={e => { if (activeDay !== i) (e.currentTarget as HTMLElement).style.paddingLeft = "8px"; }}
              onMouseLeave={e => { if (activeDay !== i) (e.currentTarget as HTMLElement).style.paddingLeft = "0"; }}
            >
              <div style={{
                minWidth: 52, height: 52, borderRadius: "50%",
                background: activeDay === i ? "#d4a050" : "rgba(212,160,80,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 13, fontWeight: 700, color: activeDay === i ? "#0f0a08" : "#d4a050",
                transition: "all 0.3s ease", flexShrink: 0,
              }}>
                {d.day}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1 }}>
                <span style={{ fontSize: 26 }}>{d.emoji}</span>
                <div>
                  <div style={{ fontSize: 9, color: "#d4a050", letterSpacing: 2.5, textTransform: "uppercase", marginBottom: 4 }}>День {d.day}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400 }}>{d.title}</div>
                </div>
                <Icon name="ChevronRight" size={18} style={{ marginLeft: "auto", opacity: 0.3, flexShrink: 0 }} />
              </div>
            </div>
          </AnimSection>
        ))}
      </div>
    </section>
  );
}
