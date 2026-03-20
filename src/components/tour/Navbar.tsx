import Icon from "@/components/ui/icon";

interface NavbarProps {
  scrollY: number;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const NAV_LINKS: [string, string][] = [
  ["hero", "Главная"],
  ["program", "Программа"],
  ["route", "Маршрут"],
  ["included", "Включено"],
  ["contacts", "Контакты"],
];

export default function Navbar({ scrollY, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
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
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="dag-desktop-nav">
          {NAV_LINKS.map(([id, label]) => (
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
        <button onClick={() => setMenuOpen(!menuOpen)} className="dag-burger-btn" style={{
          background: "none", border: "none", color: "#f5ede3", cursor: "pointer", display: "none"
        }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {menuOpen && (
        <div style={{ background: "rgba(15,10,8,0.97)", padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV_LINKS.map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", color: "#f5ede3", cursor: "pointer",
              fontSize: 15, fontWeight: 500, textAlign: "left", padding: "12px 0",
              borderBottom: "1px solid rgba(212,160,80,0.1)",
            }}>{label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}
