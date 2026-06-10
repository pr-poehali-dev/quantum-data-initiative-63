export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ЗУБАСТИК*FC</div>
        <nav>
          <a href="#">Карьера</a>
          <a href="#">Голы</a>
          <a href="#">Галерея</a>
          <a href="#">О нём</a>
        </nav>
        <button className="btn-cta">Стать фанатом</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЗУБАСТИК
              <br />
              НЕ <span>ПРОМАЖЕТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Легенда поля. Бьёт зубами, бежит сердцем. Фан-сайт самого улыбчивого и беспощадного форварда в истории футбола.
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
          <div className="hero-img" style={{ backgroundImage: `url("https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/deb6c676-bbde-403e-8932-2288874cceab.jpg")` }}>
            <div className="sticker">
              99 ГОЛОВ
              <br />
              В СЕЗОНЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ЗУБАСТИК
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ЛЕГЕНДА
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ЗУБАСТИК СНОВА ЗАБИЛ * ЛУЧШИЙ ФОРВАРД * УЛЫБКА УБИЙЦЫ * СТАДИОН В ОГНЕ * ГЛАВНЫЙ ПО ГОЛАМ *
            ЗУБАСТИК СНОВА ЗАБИЛ * ЛУЧШИЙ ФОРВАРД * УЛЫБКА УБИЙЦЫ * СТАДИОН В ОГНЕ * ГЛАВНЫЙ ПО ГОЛАМ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">КАРЬЕРА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все достижения
            </a>
          </div>

          <div className="menu-grid">
            {/* Карточка 1 */}
            <div className="menu-card">
              <span className="menu-tag">Рекорд</span>
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/1833b305-fd7f-4dcc-bf2d-ce0cdd44c1d8.jpg"
                alt="Зубастик с мячом"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Лучший бомбардир</h3>
                  <span className="price">99 голов</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Абсолютный рекорд сезона. Никто не забивал столько и с такой улыбкой на лице.
                </p>
              </div>
            </div>

            {/* Карточка 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Легенда
              </span>
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/eb1865c5-f10d-46f7-80da-9dafeb799b38.jpg"
                alt="Портрет Зубастика"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Золотая бутса</h3>
                  <span className="price">5 раз</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Пять раз признан лучшим бомбардиром чемпионата. Зубастик — это не имя, это статус.</p>
              </div>
            </div>

            {/* Карточка 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Любимый
              </span>
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/4e7c324c-b9b8-4dd6-be73-33b7eedbc2ad.jpg"
                alt="Стадион фанатов"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Любимец трибун</h3>
                  <span className="price">100К+ фанатов</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Когда Зубастик выходит на поле — стадион встаёт. Его улыбка заряжает 90 минут без остановки.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ВАЙБ-ЧЕК ПРОЙДЕН.</h2>
            <p className="vibe-text">
              Зубастик — это не просто форвард. Это явление. Его улыбка шире ворот, а удар точнее лазера. С первого матча и до последнего свистка — он играет так, будто каждый гол первый.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Его история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ZUBASTIK.FC
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/1833b305-fd7f-4dcc-bf2d-ce0cdd44c1d8.jpg"
                alt="Зубастик 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/deb6c676-bbde-403e-8932-2288874cceab.jpg"
                alt="Зубастик 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/080d969c-fd99-4de5-abb7-7a7628ad483b.jpg"
                alt="Зубастик 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/9eb34a3a-2b3c-47fa-a200-389f6806b467/files/eb1865c5-f10d-46f7-80da-9dafeb799b38.jpg"
                alt="Зубастик 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ЗУБАСТИК*FC</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Официальный фан-сайт самого улыбчивого форварда планеты. Болеем с 1974, побеждаем каждый день.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Карьера
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Голы
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Галерея
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нём
              </a>
            </li>
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
          <h4>Следи за Зубастиком</h4>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "15px" }}>
            {["ВКонтакте", "Telegram", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  background: "var(--accent)",
                  color: "var(--dark)",
                  padding: "6px 14px",
                  border: "2px solid var(--dark)",
                  fontWeight: 800,
                  fontSize: "12px",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
        <div
          className="footer-bottom"
          style={{ gridColumn: "1 / -1", borderTop: "var(--border)", paddingTop: "30px", marginTop: "20px" }}
        >
          <p>© 2024 ЗУБАСТИК*FC — Фан-сайт легенды футбола</p>
          <p>Сделано с любовью к игре ⚽</p>
        </div>
      </footer>
    </>
  );
}