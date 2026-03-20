import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9fbd2a8d-ea63-4917-b054-581c0b62a6e8/files/0d8bade3-1392-4714-b577-6db79a10dadf.jpg";

const days = [
  {
    day: 1,
    title: "Прибытие & Первое дыхание",
    emoji: "🌄",
    activities: [
      "Встреча в аэропорту Махачкалы",
      "Заселение в бутик-отель с видом на горы",
      "Вечерний круг знакомства и медитация",
      "Дагестанский ужин при свечах",
    ],
  },
  {
    day: 2,
    title: "Горы и внутренний голос",
    emoji: "⛰️",
    activities: [
      "Утренняя практика йоги на рассвете",
      "Экскурсия в древний аул Гуниб",
      "Пикник на горном плато",
      "Вечерняя баня в горах + ароматерапия",
    ],
  },
  {
    day: 3,
    title: "Сила природы",
    emoji: "🌊",
    activities: [
      "Сулакский каньон — один из глубочайших в мире",
      "Прогулка на катере по каньону",
      "Медитативная практика у воды",
      "Беседа о женской силе с психологом",
    ],
  },
  {
    day: 4,
    title: "Душа Дагестана",
    emoji: "🫙",
    activities: [
      "Мастер-класс по дагестанской кухне",
      "Рынок специй и местных продуктов",
      "Знакомство с народными ремёслами",
      "Свободное время для творчества",
    ],
  },
  {
    day: 5,
    title: "Тишина и восстановление",
    emoji: "🌿",
    activities: [
      "День без программы — личное пространство",
      "Спа-ритуал с горными травами",
      "Дыхательные практики с инструктором",
      "Вечерний костёр и живая музыка",
    ],
  },
  {
    day: 6,
    title: "Дербент — город вечности",
    emoji: "🏛️",
    activities: [
      "Экскурсия в Дербент — древнейший город России",
      "Крепость Нарын-Кала и море",
      "Дегустация местных вин",
      "Прощальный ужин с национальными танцами",
    ],
  },
  {
    day: 7,
    title: "Возвращение обновлённой",
    emoji: "🎁",
    activities: [
      "Утренняя практика благодарности",
      "Вручение подарочных боксов",
      "Общий круг — делимся впечатлениями",
      "Трансфер в аэропорт",
    ],
  },
];

const included = [
  { icon: "Home", label: "Проживание", desc: "Комфортный бутик-отель 7 ночей" },
  { icon: "UtensilsCrossed", label: "Питание", desc: "Завтраки, обеды и ужины включены" },
  { icon: "Car", label: "Трансферы", desc: "Все перемещения по маршруту" },
  { icon: "Map", label: "Экскурсии", desc: "Гид-женщина со знанием региона" },
  { icon: "Heart", label: "Практики", desc: "Йога, медитация, дыхание, баня" },
  { icon: "ChefHat", label: "Мастер-класс", desc: "Дагестанская кухня своими руками" },
  { icon: "Gift", label: "Подарочный бокс", desc: "Память о путешествии" },
  { icon: "Users", label: "Малая группа", desc: "До 10 участниц — только свои" },
];

const routes = [
  { name: "Махачкала", desc: "Столица" },
  { name: "Гуниб", desc: "Горный аул" },
  { name: "Сулакский каньон", desc: "Природное чудо" },
  { name: "Дербент", desc: "Город вечности" },
];

function useIntersection(ref: React.RefObject<Element>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useIntersection(ref as React.RefObject<Element>);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(48px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

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
      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrollY > 60 ? "rgba(15,10,8,0.92)" : "transparent",
        backdropFilter: scrollY > 60 ? "blur(12px)" : "none",
        transition: "background 0.4s ease",
        borderBottom: scrollY > 60 ? "1px solid rgba(212,160,80,0.15)" : "none",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, color: "#d4a050", letterSpacing: 1 }}>
            Дагестан ✦ Тур
          </div>
          {/* Desktop nav */}
          <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="dag-desktop-nav">
            {[["hero", "Главная"], ["program", "Программа"], ["route", "Маршрут"], ["included", "Включено"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: "none", border: "none", color: "#f5ede3", cursor: "pointer",
                fontSize: 11, fontWeight: 500, letterSpacing: 2, textTransform: "uppercase",
                opacity: 0.8, transition: "color 0.2s, opacity 0.2s",
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = "#d4a050"; (e.target as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = "#f5ede3"; (e.target as HTMLElement).style.opacity = "0.8"; }}
              >{label}</button>
            ))}
            <button onClick={() => scrollTo("contacts")} style={{
              background: "#d4a050", color: "#0f0a08", border: "none", cursor: "pointer",
              padding: "10px 22px", borderRadius: 2, fontSize: 11, fontWeight: 700,
              letterSpacing: 2, textTransform: "uppercase", transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.background = "#e8b860"}
              onMouseLeave={e => (e.target as HTMLElement).style.background = "#d4a050"}
            >Забронировать</button>
          </div>
          {/* Burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="dag-burger-btn" style={{
            background: "none", border: "none", color: "#f5ede3", cursor: "pointer", display: "none"
          }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
        {menuOpen && (
          <div style={{ background: "rgba(15,10,8,0.97)", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {[["hero", "Главная"], ["program", "Программа"], ["route", "Маршрут"], ["included", "Включено"], ["contacts", "Контакты"]].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{
                background: "none", border: "none", color: "#f5ede3", cursor: "pointer",
                fontSize: 15, fontWeight: 500, textAlign: "left", padding: "12px 0",
                borderBottom: "1px solid rgba(212,160,80,0.1)",
              }}>{label}</button>
            ))}
          </div>
        )}
      </nav>

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

      {/* PROGRAM */}
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

        {/* Active day */}
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
