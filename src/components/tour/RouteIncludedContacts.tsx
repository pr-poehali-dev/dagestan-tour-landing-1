import Icon from "@/components/ui/icon";
import AnimSection from "./AnimSection";
import { routes, included } from "./data";

interface RouteIncludedContactsProps {
  scrollTo: (id: string) => void;
}

export default function RouteIncludedContacts({ scrollTo }: RouteIncludedContactsProps) {
  return (
    <>
      {/* ROUTE */}
      <section id="route" style={{ padding: "100px 24px", background: "rgba(212,160,80,0.03)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "#d4a050" }}>Путь</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300, marginTop: 12 }}>
                Маршрут
              </h2>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginBottom: 48 }}>
            {routes.map((r, i) => (
              <AnimSection key={i} delay={i * 110}>
                <div style={{
                  background: "linear-gradient(135deg, rgba(212,160,80,0.1) 0%, rgba(15,10,8,0.4) 100%)",
                  border: "1px solid rgba(212,160,80,0.22)", borderRadius: 4,
                  padding: "36px 28px", position: "relative", overflow: "hidden",
                  transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.borderColor = "#d4a050"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.borderColor = "rgba(212,160,80,0.22)"; }}
                >
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    width: 30, height: 30, borderRadius: "50%",
                    background: "#d4a050", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700, color: "#0f0a08",
                  }}>{i + 1}</div>
                  <Icon name="MapPin" size={22} style={{ color: "#d4a050", marginBottom: 16 }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 400, marginBottom: 8 }}>{r.name}</h3>
                  <p style={{ fontSize: 12, opacity: 0.6, letterSpacing: 1 }}>{r.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Route path */}
          <AnimSection delay={200}>
            <div style={{
              background: "rgba(15,10,8,0.5)", border: "1px solid rgba(212,160,80,0.15)",
              borderRadius: 4, padding: "36px 40px",
            }}>
              <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 0 }}>
                {routes.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", flex: 1, minWidth: 100 }}>
                    <div style={{ textAlign: "center", flex: "0 0 auto" }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: "#d4a050", display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 16, margin: "0 auto 8px",
                      }}>✦</div>
                      <div style={{ fontSize: 11, fontWeight: 600 }}>{r.name}</div>
                      <div style={{ fontSize: 9, opacity: 0.45, marginTop: 2 }}>{r.desc}</div>
                    </div>
                    {i < routes.length - 1 && (
                      <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #d4a050, rgba(212,160,80,0.15))", margin: "0 6px", marginBottom: 28 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* INCLUDED */}
      <section id="included" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <AnimSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "#d4a050" }}>Всё продумано</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 300, marginTop: 12 }}>
                Что включено
              </h2>
            </div>
          </AnimSection>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 18 }}>
            {included.map((item, i) => (
              <AnimSection key={i} delay={i * 70}>
                <div style={{
                  padding: "32px 26px",
                  background: "rgba(212,160,80,0.04)",
                  border: "1px solid rgba(212,160,80,0.14)",
                  borderRadius: 4, transition: "all 0.3s ease",
                }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(212,160,80,0.09)";
                    el.style.borderColor = "rgba(212,160,80,0.5)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = "rgba(212,160,80,0.04)";
                    el.style.borderColor = "rgba(212,160,80,0.14)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    background: "rgba(212,160,80,0.12)", display: "flex",
                    alignItems: "center", justifyContent: "center", marginBottom: 20,
                  }}>
                    <Icon name={item.icon} size={20} style={{ color: "#d4a050" }} />
                  </div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 8 }}>{item.label}</h3>
                  <p style={{ fontSize: 12, opacity: 0.6, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </AnimSection>
            ))}
          </div>

          {/* Price */}
          <AnimSection delay={300}>
            <div style={{
              marginTop: 64, textAlign: "center",
              background: "linear-gradient(135deg, rgba(212,160,80,0.14) 0%, rgba(212,160,80,0.04) 100%)",
              border: "1px solid rgba(212,160,80,0.3)", borderRadius: 4,
              padding: "60px 40px",
            }}>
              <div style={{ fontSize: 10, letterSpacing: 4, textTransform: "uppercase", color: "#d4a050", marginBottom: 20 }}>Стоимость участия</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(52px, 10vw, 100px)", fontWeight: 300, lineHeight: 1 }}>
                120 000 <span style={{ fontSize: "0.45em", opacity: 0.65 }}>₽</span>
              </div>
              <p style={{ fontSize: 13, opacity: 0.55, marginTop: 12, marginBottom: 10 }}>+ перелёт ~25 000 ₽</p>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,80,0.15)", padding: "8px 18px", borderRadius: 2, marginBottom: 44 }}>
                <Icon name="AlertCircle" size={13} style={{ color: "#d4a050" }} />
                <span style={{ fontSize: 11, color: "#d4a050", fontWeight: 700, letterSpacing: 1 }}>Количество мест ограничено!</span>
              </div>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={() => scrollTo("contacts")} style={{
                  background: "#d4a050", color: "#0f0a08", border: "none", cursor: "pointer",
                  padding: "18px 52px", fontSize: 11, fontWeight: 700,
                  letterSpacing: 2.5, textTransform: "uppercase", borderRadius: 2,
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = "#e8b860"; (e.target as HTMLElement).style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = "#d4a050"; (e.target as HTMLElement).style.transform = "translateY(0)"; }}
                >Забронировать тур</button>
                <button onClick={() => scrollTo("contacts")} style={{
                  background: "transparent", color: "#f5ede3", border: "1px solid rgba(245,237,227,0.35)", cursor: "pointer",
                  padding: "18px 52px", fontSize: 11, fontWeight: 500,
                  letterSpacing: 2.5, textTransform: "uppercase", borderRadius: 2,
                  transition: "all 0.25s ease",
                }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#d4a050"; (e.target as HTMLElement).style.color = "#d4a050"; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(245,237,227,0.35)"; (e.target as HTMLElement).style.color = "#f5ede3"; }}
                >Задать вопрос</button>
              </div>
            </div>
          </AnimSection>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" style={{ padding: "100px 24px", background: "rgba(212,160,80,0.03)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
          <AnimSection>
            <span style={{ fontSize: 10, letterSpacing: 3.5, textTransform: "uppercase", color: "#d4a050" }}>Мы ждём вас</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, marginTop: 12, marginBottom: 16 }}>
              Получить консультацию
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.9, opacity: 0.7, marginBottom: 48 }}>
              Оставьте имя и контакт — наш гид ответит в течение нескольких часов и расскажет обо всех деталях тура
            </p>
          </AnimSection>

          <AnimSection delay={200}>
            <form onSubmit={e => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input type="text" placeholder="Ваше имя" style={{
                background: "rgba(245,237,227,0.04)", border: "1px solid rgba(212,160,80,0.22)",
                color: "#f5ede3", padding: "18px 22px", borderRadius: 2, fontSize: 14,
                outline: "none", fontFamily: "'Montserrat', sans-serif",
                transition: "border-color 0.2s",
              }}
                onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#d4a050"}
                onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(212,160,80,0.22)"}
              />
              <input type="tel" placeholder="Телефон или Telegram" style={{
                background: "rgba(245,237,227,0.04)", border: "1px solid rgba(212,160,80,0.22)",
                color: "#f5ede3", padding: "18px 22px", borderRadius: 2, fontSize: 14,
                outline: "none", fontFamily: "'Montserrat', sans-serif",
                transition: "border-color 0.2s",
              }}
                onFocus={e => (e.target as HTMLInputElement).style.borderColor = "#d4a050"}
                onBlur={e => (e.target as HTMLInputElement).style.borderColor = "rgba(212,160,80,0.22)"}
              />
              <textarea placeholder="Ваш вопрос (необязательно)" rows={4} style={{
                background: "rgba(245,237,227,0.04)", border: "1px solid rgba(212,160,80,0.22)",
                color: "#f5ede3", padding: "18px 22px", borderRadius: 2, fontSize: 14,
                outline: "none", fontFamily: "'Montserrat', sans-serif",
                resize: "vertical", transition: "border-color 0.2s",
              }}
                onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "#d4a050"}
                onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(212,160,80,0.22)"}
              />
              <button type="submit" style={{
                background: "#d4a050", color: "#0f0a08", border: "none", cursor: "pointer",
                padding: "18px 48px", fontSize: 11, fontWeight: 700,
                letterSpacing: 2.5, textTransform: "uppercase", borderRadius: 2,
                transition: "all 0.25s ease",
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.background = "#e8b860"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.background = "#d4a050"; }}
              >Получить консультацию</button>
            </form>
          </AnimSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: "40px 24px", textAlign: "center",
        borderTop: "1px solid rgba(212,160,80,0.12)",
      }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: "#d4a050", marginBottom: 10 }}>
          Дагестан ✦ Тур
        </div>
        <p style={{ fontSize: 11, opacity: 0.35, letterSpacing: 1 }}>Женский тур · 7 дней · 2025</p>
      </footer>
    </>
  );
}
