const IMGS = {
  hero: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/c1681069-54d3-49dc-ad5d-bb62ef24b523.jpg",
  portrait: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/ea2aaf18-db9a-41f7-90f3-62578b1289b6.jpg",
  gym: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/464e79ed-2110-4de5-b6f4-f15d3ad973b3.jpg",
  pose: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/d09c6e13-31a1-4bd5-a4f5-a209090387b4.jpg",
};

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">LEVRONE*FC</div>
        <nav>
          <a href="#">Карьера</a>
          <a href="#">Достижения</a>
          <a href="#">Галерея</a>
          <a href="#">О нём</a>
        </nav>
        <button className="btn-cta">Стать фанатом</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КЕВИН
              <br />
              ЛЕВ<span>РОНИ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              «Мэрилендский мышечный автомат». 4× вице-чемпион Мистер Олимпия. Легенда бодибилдинга, рок-музыкант и непобедимый дух.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Все титулы
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Биография
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url("${IMGS.hero}")` }}>
            <div className="sticker">
              4×
              <br />
              ВИЦЕ-МИР
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #LEVRONE
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЛЕГЕНДА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * МИСТЕР ОЛИМПИЯ 4× ВИЦЕ * МЭРИЛЕНДСКИЙ АВТОМАТ * РЕКОРДСМЕН СЦЕНЫ * ИКОНА 90-Х * ЖИВАЯ ЛЕГЕНДА *
            МИСТЕР ОЛИМПИЯ 4× ВИЦЕ * МЭРИЛЕНДСКИЙ АВТОМАТ * РЕКОРДСМЕН СЦЕНЫ * ИКОНА 90-Х * ЖИВАЯ ЛЕГЕНДА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КАРЬЕРА</h2>
            <a href="#" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Все достижения
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Рекорд</span>
              <img src={IMGS.portrait} alt="Кевин Леврон портрет" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Мистер Олимпия</h3>
                  <span className="price">4× вице</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Четыре раза занимал второе место на главном турнире планеты. Многие считают его настоящим чемпионом.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Мощь</span>
              <img src={IMGS.gym} alt="Кевин Леврон в зале" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Тренировки</h3>
                  <span className="price">227 кг жим</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Жал лёжа 227 кг при собственном весе 125 кг. Силовые показатели, которым завидовали пауэрлифтеры.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Икона</span>
              <img src={IMGS.pose} alt="Кевин Леврон на сцене" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Симметрия</h3>
                  <span className="price">Идеал</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Его пропорции называли совершенством. Дельты, грудь, спина — каждая мышца как скульптура.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "50px", textAlign: "center" }}>СТАТИСТИКА КАРЬЕРЫ</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", border: "var(--border)" }}>
            {[
              { num: "4×", label: "Вице-чемпион Мистер Олимпия", tag: "1992–2003" },
              { num: "70+", label: "Профессиональных побед", tag: "IFBB Pro" },
              { num: "227", label: "Кг жим лёжа", tag: "Рекорд сцены" },
              { num: "2016", label: "Возвращение на Олимпию", tag: "В 51 год" },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "40px 30px",
                borderRight: i < 3 ? "var(--border)" : "none",
                background: i % 2 === 0 ? "var(--bg)" : "white",
                textAlign: "center"
              }}>
                <div style={{ fontFamily: "Unbounded, sans-serif", fontSize: "56px", fontWeight: 800, lineHeight: 1, color: "var(--primary)", marginBottom: "10px" }}>{item.num}</div>
                <div style={{ fontWeight: 800, fontSize: "14px", textTransform: "uppercase", marginBottom: "6px" }}>{item.label}</div>
                <div style={{ fontSize: "12px", color: "#888", fontWeight: 600 }}>{item.tag}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "60px" }}>
            <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "24px", fontWeight: 800, textTransform: "uppercase", marginBottom: "30px" }}>Главные выступления</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {[
                { event: "Мистер Олимпия", years: "1992–2003", result: "4× серебро", tag: "Главный турнир мира" },
                { event: "Arnold Classic", years: "1994–2002", result: "2× победитель", tag: "Арнольд Шварценеггер" },
                { event: "Night of Champions", years: "1991–1999", result: "3× победитель", tag: "Нью-Йорк" },
                { event: "Возвращение на Олимпию", years: "2016", result: "11-е место", tag: "В 51 год — легенда" },
              ].map((item, i) => (
                <div key={i} style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "20px 0",
                  borderBottom: "var(--border)",
                  flexWrap: "wrap",
                  gap: "10px"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                    <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "18px" }}>{item.event}</span>
                    <span style={{ color: "#888", fontSize: "13px" }}>{item.years}</span>
                  </div>
                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    <span style={{ background: "var(--accent)", padding: "4px 12px", border: "2px solid var(--dark)", fontWeight: 800, fontSize: "13px" }}>{item.result}</span>
                    <span style={{ fontSize: "13px", color: "#666" }}>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">НЕ ПРОСТО АТЛЕТ.</h2>
            <p className="vibe-text">
              Кевин Леврон — рок-музыкант, актёр и бизнесмен. Он выпускал альбомы, снимался в кино и вернулся на сцену Олимпии в 51 год. Его жизнь доказывает: настоящие легенды не уходят.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Его история
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url("${IMGS.gym}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @LEVRONE.FAN
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src={IMGS.portrait} alt="Кевин Леврон 1" />
            </div>
            <div className="social-item">
              <img src={IMGS.hero} alt="Кевин Леврон 2" />
            </div>
            <div className="social-item">
              <img src={IMGS.gym} alt="Кевин Леврон 3" />
            </div>
            <div className="social-item">
              <img src={IMGS.pose} alt="Кевин Леврон 4" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">LEVRONE*FC</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Официальный фан-сайт Кевина Леврона — «Мэрилендского мышечного автомата». С любовью к легенде бодибилдинга.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            {["Карьера", "Достижения", "Галерея", "О нём"].map((l) => (
              <li key={l}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Фан-клуб</h4>
          <ul>
            <li>Пн–Пт: 10:00–22:00</li>
            <li>Сб–Вс: 09:00–23:00</li>
            <li style={{ marginTop: "10px" }}>В дни шоу — 24/7</li>
          </ul>
        </div>
        <div>
          <h4>Следи за Левроном</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            {["ВКонтакте", "Telegram", "YouTube"].map((s) => (
              <a key={s} href="#" style={{
                background: "var(--accent)",
                color: "var(--dark)",
                padding: "6px 14px",
                border: "2px solid var(--dark)",
                fontWeight: 800,
                fontSize: "12px",
                textDecoration: "none",
                display: "inline-block",
              }}>{s}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom" style={{ gridColumn: "1 / -1", borderTop: "var(--border)", paddingTop: "30px", marginTop: "20px" }}>
          <p>© 2024 LEVRONE*FC — Фан-сайт легенды бодибилдинга</p>
          <p>Сделано с уважением к величию 💪</p>
        </div>
      </footer>
    </>
  );
}
