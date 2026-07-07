import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import decorBranco from "./assets/decor/quadradinhos-branco.png";
import decorCinza from "./assets/decor/quadradinhos-cinza.png";
import decorCinza2 from "./assets/decor/quadradinhos-cinza2.png";
import decorLaranja from "./assets/decor/quadradinbolaranja_novo.png";
import decorLaranja2 from "./assets/decor/quadradinholaranja2_novo.png";
import decorLaranja3 from "./assets/decor/quadradinhos-laranja3.png";
import decorLaranja4 from "./assets/decor/quadradinhos-laranja4.png";
import decorRoxo from "./assets/decor/quadradinhos-roxo.png";
import decorRoxo2 from "./assets/decor/quadradinhos-roxo2.png";
import decorBranco2 from "./assets/decor/quadradins-branco2.png";
import florLogo from "./assets/brand/FlorLogo.png";
import florPolem1 from "./assets/brand/florPolem1.png";
import florPolem2 from "./assets/brand/florpolem2.png";
import logoBradesco from "./assets/brand/logoBradesco.png";
import logoCin from "./assets/brand/logoCin.png";
import logoCintia from "./assets/brand/logoCintia.png";
import logoConsultoria from "./assets/brand/logoConsultoria.png";
import logoHackaWomanVertical from "./assets/brand/hackawomanlogovertical.png";
import logoLigia from "./assets/brand/logoLigia.png";
import logoMagalu from "./assets/brand/logoMagalu.png";
import logoNavbar from "./assets/brand/logoNavbar.png";
import logoPlexus from "./assets/brand/logoPlexus.png";
import logoSecretaria from "./assets/brand/logoSecretaria.png";
import logoTechwoman from "./assets/brand/logoTechwoman.png";
import compromissoIcon from "./assets/icons/compromisso.png";
import missaoIcon from "./assets/icons/missao.png";
import visaoIcon from "./assets/icons/visao.png";

type Pillar = {
  number: string;
  title: string;
  description: string;
};

type AgendaDay = {
  day: string;
  month: string;
  weekday: string;
  note: string[];
  photos: GalleryPhoto[];
};

// type Winner = {
//   position: string;
//   team: string;
//   project: string;
//   description?: string;
// };

type GalleryPhoto = {
  src: string;
  alt: string;
};

// const winners: Winner[] = [];

const fotosDia1 = Object.values(
  import.meta.glob("./assets/galeria/dia1/*", { eager: true, import: "default" })
) as string[];

const fotosDia2 = Object.values(
  import.meta.glob("./assets/galeria/dia2/*", { eager: true, import: "default" })
) as string[];


const highlights = [
  {
    title: "Objetivos",
    text: "Fomentar inovação com foco em diversidade e representatividade feminina na tecnologia.",
  },
  {
    title: "Público alvo",
    text: "Mulheres desenvolvedoras, designers, empreendedoras e entusiastas da tecnologia.",
  },
  {
    title: "Benefícios",
    text: "Premiação, mentoria com especialistas, networking e visibilidade para suas soluções.",
  },
  {
    title: "Impacto",
    text: "Projetos que geram benefícios reais para a sociedade e o ecossistema de inovação.",
  },
];

const pillars: Pillar[] = [
  {
    number: "01",
    title: "Inovação",
    description: "Estimular a criatividade e a busca constante por novas soluções.",
  },
  {
    number: "02",
    title: "Colaboração",
    description: "Acreditar na construção coletiva e na troca de conhecimentos.",
  },
  {
    number: "03",
    title: "Inclusão",
    description: "Promover diversidade, equidade e oportunidades para todos.",
  },
  {
    number: "04",
    title: "Excelência",
    description: "Atuar com qualidade, responsabilidade e compromisso em cada iniciativa.",
  },
  {
    number: "05",
    title: "Ética e Transparência",
    description: "Conduzir ações com integridade, clareza e respeito.",
  },
  {
    number: "06",
    title: "Impacto e Aprendizado",
    description:
      "Gerar benefícios reais para a sociedade enquanto incentivamos a evolução contínua.",
  },
];

const principles = [
  {
    title: "Missão",
    text: "Promover inovação e desenvolvimento por meio das tecnologias, criando oportunidades e gerando impacto positivo em um ecossistema inclusivo e sustentável.",
    icon: missaoIcon,
  },
  {
    title: "Visão",
    text: "Ser referência em inovação tecnológica, conectando talentos e transformando ideias em oportunidades, tornando a tecnologia acessível para gerar progresso e inclusão.",
    icon: visaoIcon,
  },
  {
    title: "Compromisso",
    text: "Promover talentos, inovação, conectando pessoas para gerar impacto. Acolhemos e capacitamos como base para formar lideranças e impulsionar o desenvolvimento social e econômico.",
    icon: compromissoIcon,
  },
];

const agenda: AgendaDay[] = [
  {
    day: "03",
    month: "Julho, 2026",
    weekday: "Sex",
    note: ["Workshops", "Palestras", "Painéis"],
    photos: fotosDia1.map((src) => ({ src, alt: "Foto do evento — dia 1" })),
  },
  {
    day: "04",
    month: "Julho, 2026",
    weekday: "Sáb",
    note: ["Hackathon"],
    photos: fotosDia2.map((src) => ({ src, alt: "Foto do evento — dia 2" })),
  },
];

const partners = [
  { name: "Ligia", logo: logoLigia },
  { name: "Centro de Informática UFPE", logo: logoCin },
  { name: "Plexos Institute", logo: logoPlexus },
  { name: "JH Consultoria", logo: logoConsultoria },
  { name: "Cintia", logo: logoCintia },
  { name: "Secretaria", logo: logoSecretaria },
  { name: "Magalu Cloud", logo: logoMagalu },
  { name: "Bradesco", logo: logoBradesco },
  { name: "Tech Woman", logo: logoTechwoman },
];

function NavbarLogo() {
  return <img className="navbar-logo" src={logoNavbar} alt="HackaWoman" />;
}

function DecorSquares({ className, src }: { className: string; src: string }) {
  return (
    <img
      className={`decor-squares ${className}`}
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}

function HeroLogo() {
  return (
    <div className="hero-logo" aria-label="HackaWoman">
      <span className="hero-logo-mark" aria-hidden="true">
        <img className="hero-flower" src={florLogo} alt="" />
        <img className="hero-pollen hero-pollen-large" src={florPolem1} alt="" />
        <img className="hero-pollen hero-pollen-small" src={florPolem2} alt="" />
      </span>
      <span className="hero-logo-word">
        <span>hacka</span>
        <span>woman</span>
      </span>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className={light ? "section-title section-title-light" : "section-title"}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}

function DaySlideshow({ photos }: { photos: GalleryPhoto[] }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (photos.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 10000);
  }, [photos.length]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const go = (dir: 1 | -1) => {
    setCurrent((prev) => (prev + dir + photos.length) % photos.length);
    startTimer();
  };

  return (
    <div className={photos.length === 0 ? "day-slideshow day-slideshow-empty" : "day-slideshow"}>
      {photos.map((photo, index) => (
        <img
          key={photo.src}
          className={index === current ? "day-slideshow-slide active" : "day-slideshow-slide"}
          src={photo.src}
          alt={photo.alt}
        />
      ))}
      {photos.length > 1 && (
        <>
          <button className="day-slideshow-btn day-slideshow-btn-prev" onClick={() => go(-1)} aria-label="Foto anterior">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12 5L7 10L12 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="day-slideshow-btn day-slideshow-btn-next" onClick={() => go(1)} aria-label="Próxima foto">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M8 5L13 10L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="day-slideshow-counter">{current + 1} / {photos.length}</span>
        </>
      )}
    </div>
  );
}

function PhotoModal({ photos, onClose }: { photos: GalleryPhoto[]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div className="photo-modal-overlay" onClick={onClose}>
      <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
        <button className="photo-modal-close" onClick={onClose} aria-label="Fechar galeria">✕</button>
        <div className="photo-modal-grid">
          {photos.map((photo, index) => (
            <figure className="photo-modal-item" key={index}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function AgendaBlock({ day }: { day: AgendaDay }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article className="agenda-day">
      <div className="agenda-date">
        <div className="agenda-date-main">
          <span>{day.weekday}</span>
          <strong>{day.day}</strong>
        </div>
        <small>{day.month}</small>
        <em>
          {day.note.map((line) => (
            <span key={`${day.day}-${line}`}>{line}</span>
          ))}
        </em>
      </div>
      <div className="agenda-day-gallery">
        <DaySlideshow photos={day.photos} />
        {day.photos.length > 0 && (
          <button className="agenda-see-all" onClick={() => setIsModalOpen(true)}>
            Ver todas
          </button>
        )}
      </div>
      {isModalOpen && <PhotoModal photos={day.photos} onClose={() => setIsModalOpen(false)} />}
    </article>
  );
}

function App() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const anchorScrollHoldUntilRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resetMenuState = useCallback(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }, []);

  const handleSidebarExternalLinkClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      window.open(event.currentTarget.href, "_blank", "noopener,noreferrer");
      resetMenuState();
    },
    [resetMenuState],
  );

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMenuOpen || !isMobile) {
      return;
    }

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) {
        resetMenuState();
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resetMenuState();
      }
    };

    window.addEventListener("pagehide", resetMenuState);
    window.addEventListener("pageshow", handlePageShow);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("pagehide", resetMenuState);
      window.removeEventListener("pageshow", handlePageShow);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [resetMenuState]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateTopbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (window.performance.now() < anchorScrollHoldUntilRef.current) {
        setIsTopbarVisible(true);
      } else if (currentScrollY <= 8) {
        setIsTopbarVisible(true);
      } else if (scrollDelta > 6) {
        setIsTopbarVisible(false);
      } else if (scrollDelta < -6) {
        setIsTopbarVisible(true);
      }

      lastScrollY = Math.max(currentScrollY, 0);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateTopbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateScrollbarTheme = () => {
      const probeY = window.innerHeight * 0.5;
      const themedSections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-scrollbar-section]"),
      );
      const activeSection =
        themedSections.find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= probeY && rect.bottom >= probeY;
        }) ?? themedSections[0];

      document.documentElement.dataset.scrollbarTheme =
        activeSection?.dataset.scrollbarSection ?? "purple";
    };

    let ticking = false;
    const requestThemeUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateScrollbarTheme();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateScrollbarTheme();
    window.addEventListener("scroll", requestThemeUpdate, { passive: true });
    window.addEventListener("resize", requestThemeUpdate);

    return () => {
      window.removeEventListener("scroll", requestThemeUpdate);
      window.removeEventListener("resize", requestThemeUpdate);
    };
  }, []);

  const handleTopbarAnchorClick = (event: MouseEvent<HTMLElement>) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const anchor = target.closest<HTMLAnchorElement>("a[href^='#']");

    if (!anchor) {
      return;
    }

    anchorScrollHoldUntilRef.current = window.performance.now() + 1200;
    setIsTopbarVisible(true);
  };

  return (
    <main className={isMenuOpen ? "site menu-open" : "site"}>
      <header
        className={isTopbarVisible ? "topbar" : "topbar topbar-hidden"}
        onClick={handleTopbarAnchorClick}
      >
        <a className="brand" href="#home" aria-label="HackaWoman início">
          <NavbarLogo />
        </a>

        <button
          className={`menu-toggle mobile-only ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>

        {isMenuOpen ? (
          <button
            className="menu-backdrop mobile-only"
            type="button"
            aria-label="Fechar menu de navegação"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : null}

        <nav className={`nav ${isMenuOpen ? "active" : ""}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          {/* <a href="#resultados" onClick={() => setIsMenuOpen(false)}>Resultados</a> */}
          <a href="#galeria" onClick={() => setIsMenuOpen(false)}>Galeria</a>
          <a href="#parceiros" onClick={() => setIsMenuOpen(false)}>Parceiros</a>

          <div className="mobile-only sidebar-actions">
            <a
              className="sidebar-edital-link"
              href="/edital.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={handleSidebarExternalLinkClick}
            >
              Acessar edital
            </a>
          </div>
        </nav>

        <div className="topbar-actions desktop-only">
          <a className="edital-link" href="/edital.pdf" target="_blank" rel="noreferrer">
            Acessar edital
          </a>
        </div>
      </header>

      <section className="hero" id="home" data-scrollbar-section="orange">
        <DecorSquares className="decor-hero-gray" src={decorCinza} />
        <DecorSquares className="decor-hero-gray-bottom" src={decorCinza2} />
        <div className="hero-content">
          <HeroLogo />
          <p>Juntas, transformamos o ecossistema tech de Pernambuco.</p>
          {/* <a className="button button-primary" href="#resultados">
            <span>Ver resultados</span>
          </a> */}
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a próxima seção">
            <span />
          </a>
        </div>
      </section>

      <section className="intro section-pad" id="sobre" data-scrollbar-section="purple">
        <div className="intro-grid">
          <div>
            <SectionTitle eyebrow="Sobre o evento" title="Inovação que transforma." />
            <p className="body-copy">
              Hacka Woman é um hackathon idealizado pela{" "}
              <strong>LIGIA — Liga de Inteligência Artificial</strong>, com
              realização do{" "}
              <strong>
                Centro de Informática (CIn) da Universidade Federal de
                Pernambuco
              </strong>
              , organizado em conjunto com o{" "}
              <strong>Grupo Cintia e a Tech Woman</strong>. O evento conta
              ainda com{" "}
              <strong>
                co-organização estratégica do Plexos Institute
              </strong>
              , apoio tecnológico da <strong>Magalu Cloud</strong> e
              colaboração de diversas comunidades de tecnologia, entre elas{" "}
              <strong>
                RFEC+, DevOpsDays Recife, Somos Minas, Garota Cibernética e
                Techs for Women
              </strong>
              .
            </p>
            <p className="body-copy">
              O projeto nasce com o propósito de inspirar, conectar e impulsionar
              mulheres na área de tecnologia, promovendo um ambiente colaborativo
              voltado à inovação, aprendizagem prática e desenvolvimento de
              soluções tecnológicas com impacto social e econômico. A iniciativa
              também busca fortalecer a presença feminina no ecossistema
              tecnológico, criando oportunidades concretas de inovação,
              networking e empregabilidade, além de ampliar a visibilidade de
              talentos femininos e estimular a construção de soluções voltadas a
              desafios reais da sociedade e do mercado.
            </p>
          </div>
          <div className="inspire-panel" aria-label="Inspire, crie, realize">
            <span />
            <strong>
              Inspire.
              <br />
              Crie.
              <br />
              Realize.
            </strong>
            <a href={"https://www.instagram.com/ligia.ufpe/"} target="_blank" rel="noreferrer">
              <span>Visitar nosso perfil</span>
            </a>
          </div>
        </div>
      </section>

      <section className="highlights" aria-label="Resumo do evento" data-scrollbar-section="purple">
        <DecorSquares className="decor-highlights-white-left" src={decorBranco} />
        <DecorSquares className="decor-highlights-white-right" src={decorBranco2} />
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      {/* <section className="results section-pad" id="resultados" data-scrollbar-section="purple">
        <div className="inner">
          <SectionTitle eyebrow="Hackathon 2026" title="Resultados." />
          <div className="results-grid">
            {winners.map((winner) => (
              <article className="result-card" key={winner.position}>
                <span className="result-position">{winner.position}</span>
                <h3>{winner.team}</h3>
                <p>{winner.project}</p>
                {winner.description ? (
                  <p className="result-description">{winner.description}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="pillars section-pad" id="pilares" data-scrollbar-section="purple">
        <div className="inner">
          <SectionTitle eyebrow="Nossos pilares" title="O que nos move." />
          <div className="pillar-grid">
            {pillars.map((pillar) => (
              <article className="pillar-card" key={pillar.number}>
                <h3>
                  <span>{pillar.number}</span>
                  {pillar.title}
                </h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles" data-scrollbar-section="purple">
        <DecorSquares className="decor-principles-orange" src={decorLaranja} />
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <div className="principle-heading">
                <img className="principle-icon" src={principle.icon} alt="" aria-hidden="true" />
                <h3>{principle.title}</h3>
              </div>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="agenda section-pad" id="galeria" data-scrollbar-section="orange">
        <DecorSquares className="decor-agenda-orange" src={decorLaranja2} />
        <div className="inner">
          <SectionTitle eyebrow="Galeria" title="Como foi o evento." light />
          <div className="agenda-list">
            {agenda.map((day) => (
              <AgendaBlock day={day} key={day.day} />
            ))}
          </div>
        </div>
      </section>

      <section className="partners section-pad" id="parceiros" data-scrollbar-section="purple">
        <DecorSquares className="decor-partners-orange-top" src={decorLaranja3} />
        <DecorSquares className="decor-partners-purple-top" src={decorRoxo} />
        <DecorSquares className="decor-partners-purple-bottom" src={decorRoxo2} />
        <DecorSquares className="decor-partners-orange-bottom" src={decorLaranja4} />
        <div className="inner">
          <SectionTitle eyebrow="Parceiros e patrocinadores" title="Quem nos apoia." light />
          <div className="partner-grid">
            {partners.map((partner) => (
              <span className="partner-logo" key={partner.name}>
                <img src={partner.logo} alt={partner.name} />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad" id="encerramento" data-scrollbar-section="orange">
        <div className="cta-content">
          <SectionTitle eyebrow="HackaWoman 2026" title="Obrigada a todas!" light />
          <p>
            Juntas, transformamos o ecossistema tech de Pernambuco. Foi uma honra ter vocês com a gente.
          </p>
          <img className="final-cta-logo" src={logoHackaWomanVertical} alt="HackaWoman" />
        </div>
      </section>

      <footer className="footer" data-scrollbar-section="orange">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>hackawoman</strong>
            <p>
              Hackathon exclusivo para mulheres que acreditam no poder da tecnologia.
            </p>
          </div>
          <nav className="footer-links" aria-label="Navegação do rodapé">
            <h2>Navegação</h2>
            <a href="#sobre">Sobre</a>
            {/* <a href="#resultados">Resultados</a> */}
            <a href="#galeria">Galeria</a>
            <a href="#parceiros">Parceiros</a>
          </nav>
          <div className="footer-contact">
            <h2>Contato</h2>
            <a href="mailto:hackawoman@cin.ufpe.br">hackawoman@cin.ufpe.br</a>
            <a
              href="https://www.instagram.com/ligia.ufpe/"
              target="_blank"
              rel="noreferrer"
            >
              @ligia
            </a>
          </div>
          <div className="footer-edital">
            <h2>Edital</h2>
            <a
              href="/edital.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Acessar edital completo
            </a>
          </div>
        </div>
        <p className="footer-copy">
          © 2026 HackaWoman - Ligia (Liga Acadêmica de Inteligência Artificial da
          UFPE). Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}

export default App;
