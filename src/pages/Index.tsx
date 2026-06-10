const IMGS = {
  hero: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/83c12927-736f-4a91-8006-685cee4f96cc.jpg",
  portrait: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/7676106d-2537-43ba-9218-065b4f0c32f0.jpg",
  celebrate: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/7c202303-1561-4f6a-a9ef-095c8ccabb2c.jpg",
  trophy: "https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/8df238d1-eabd-42e0-b08e-65a32a905ab0.jpg",
};

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">PELÉ*10</div>
        <nav>
          <a href="#">Карьера</a>
          <a href="#">Голы</a>
          <a href="#">Галерея</a>
          <a href="#">Легенда</a>
        </nav>
        <button className="btn-cta">Стать фанатом</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ПЕЛЕ —
              <br />
              КОРОЛЬ <span>ФУТБОЛА</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Эдсон Арантис ду Насименту. 1283 гола за карьеру. Единственный трёхкратный чемпион мира. Футбол до и после Пеле — это два разных вида спорта.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Все голы
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Биография
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url("${IMGS.hero}")` }}>
            <div className="sticker">
              3×
              <br />
              ЧЕМПИОН
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #PELÉ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              КОРОЛЬ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * 1283 ГОЛА В КАРЬЕРЕ * 3× ЧЕМПИОН МИРА * КОРОЛЬ ФУТБОЛА * САНТОС · БРАЗИЛИЯ · КОСМОС * ЕДИНСТВЕННЫЙ И НЕПОВТОРИМЫЙ *
            1283 ГОЛА В КАРЬЕРЕ * 3× ЧЕМПИОН МИРА * КОРОЛЬ ФУТБОЛА * САНТОС · БРАЗИЛИЯ · КОСМОС * ЕДИНСТВЕННЫЙ И НЕПОВТОРИМЫЙ
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
              <img src={IMGS.portrait} alt="Пеле — портрет" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>1283 гола</h3>
                  <span className="price">Рекорд навсегда</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Официально признан самым результативным футболистом в истории. Забивал в среднем по голу за матч всю карьеру.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Легенда</span>
              <img src={IMGS.celebrate} alt="Пеле празднует" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>3 Чемпионата мира</h3>
                  <span className="price">1958 · 62 · 70</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Единственный футболист в истории, выигравший чемпионат мира трижды. Первый титул — в 17 лет.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>Икона</span>
              <img src={IMGS.trophy} alt="Пеле с кубком" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3>Игрок века</h3>
                  <span className="price">ФИФА · 2000</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  В 2000 году ФИФА признала Пеле лучшим футболистом XX века. Его имя — синоним слова «футбол».
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ borderBottom: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "50px", textAlign: "center" }}>СТАТИСТИКА КАРЬЕРЫ</h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0", border: "var(--border)" }}>
            {[
              { num: "1283", label: "Голов за карьеру", tag: "Официальный рекорд" },
              { num: "3×", label: "Чемпион мира", tag: "1958, 1962, 1970" },
              { num: "17", label: "Лет — первый ЧМ", tag: "Швеция 1958" },
              { num: "77", label: "Голов за сборную", tag: "92 матча" },
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
            <h3 style={{ fontFamily: "Unbounded, sans-serif", fontSize: "24px", fontWeight: 800, textTransform: "uppercase", marginBottom: "30px" }}>Клубы и сборная</h3>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {[
                { club: "Сантос", years: "1956–1974", goals: "643 гола", tag: "Родной клуб" },
                { club: "Сборная Бразилии", years: "1957–1971", goals: "77 голов", tag: "3 кубка мира" },
                { club: "Нью-Йорк Космос", years: "1975–1977", goals: "37 голов", tag: "Популяризация в США" },
                { club: "Игрок века ФИФА", years: "2000", goals: "—", tag: "Лучший в истории" },
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
                    <span style={{ fontFamily: "Unbounded, sans-serif", fontWeight: 800, fontSize: "18px" }}>{item.club}</span>
                    <span style={{ color: "#888", fontSize: "13px" }}>{item.years}</span>
                  </div>
                  <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                    <span style={{ background: "var(--accent)", padding: "4px 12px", border: "2px solid var(--dark)", fontWeight: 800, fontSize: "13px" }}>{item.goals}</span>
                    <span style={{ fontSize: "13px", color: "#666" }}>{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">БОГ В БУТСАХ.</h2>
            <p className="vibe-text">
              Пеле родился в бедной семье в Бауру, Бразилия. В 15 лет подписал контракт с «Сантосом», в 17 — выиграл чемпионат мира. Он не просто играл в футбол — он изменил то, каким футбол должен быть.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Его история
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url("${IMGS.celebrate}")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PELÉ.LEGEND
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src={IMGS.portrait} alt="Пеле 1" />
            </div>
            <div className="social-item">
              <img src={IMGS.hero} alt="Пеле 2" />
            </div>
            <div className="social-item">
              <img src={IMGS.celebrate} alt="Пеле 3" />
            </div>
            <div className="social-item">
              <img src={IMGS.trophy} alt="Пеле 4" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">PELÉ*10</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Фан-сайт Эдсона Арантиса ду Насименту — Пеле. Короля футбола. Навсегда в наших сердцах. 1940–2022.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            {["Карьера", "Голы", "Галерея", "Легенда"].map((l) => (
              <li key={l}><a href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-links">
          <h4>Фан-клуб</h4>
          <ul>
            <li>Пн–Пт: 10:00–22:00</li>
            <li>Сб–Вс: 09:00–23:00</li>
            <li style={{ marginTop: "10px" }}>В дни матчей — 24/7</li>
          </ul>
        </div>
        <div>
          <h4>Следи за нами</h4>
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
          <p>© 2024 PELÉ*10 — Фан-сайт Короля футбола</p>
          <p>1940–2022 · Навсегда в истории ⚽</p>
        </div>
      </footer>
    </>
  );
}
