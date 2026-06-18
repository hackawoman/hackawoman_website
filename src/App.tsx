import { useEffect, useRef, useState, type MouseEvent } from "react";
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
import agendaClockIcon from "./assets/icons/agenda-clock.svg";
import agendaPinIcon from "./assets/icons/agenda-pin.svg";
import compromissoIcon from "./assets/icons/compromisso.png";
import missaoIcon from "./assets/icons/missao.png";
import visaoIcon from "./assets/icons/visao.png";

type Pillar = {
  number: string;
  title: string;
  description: string;
};

type AgendaItem = {
  title: string;
  subtitle?: string;
  place?: string;
  time?: string;
  featured?: boolean;
};

type AgendaPeriod = {
  label: string;
  items: AgendaItem[];
};

type AgendaDay = {
  day: string;
  month: string;
  weekday: string;
  note: string[];
  periods: AgendaPeriod[];
};

const participationFormUrl = "https://forms.gle/BH85Hj1xWaUh28Nh7";

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
    periods: [
      {
        label: "Manhã",
        items: [
          {
            title: "Credenciamento",
            // place: "Anfiteatro",
            time: "08:00h - 09:00h",
          },
          {
            title: "Abertura",
            subtitle: "Avisos + Apresentação do tema do hackaton",
            // place: "Anfiteatro",
            time: "09:00h - 09:20h",
          },
          {
            title: "Dinâmica de integração",
            subtitle: "Dinâmica rápida de integração → ideia: “conecte-se para crescer” (troca de contatos / LinkedIn)",
            // place: "Anfiteatro",
            time: "09:20h - 09:40h",
          },
          {
            title: "Palestra 1 (Magalu)",
            time: "09:40h - 10:30h",
          },
          {
            title: "Workshop 1 – CLOUD",
            // place: "Anfiteatro",
            time: "09:40h - 10:30h",
          },
          {
            title: "Coffee-Break + Sorteio",
            // place: "Grad 2",
            time: "10:30h - 11:00h",
          },
          {
            title: "Painel (Bradesco + Gov + Lígia/CIntia + ADM Mulher/CRA)",
            time: "11:00h - 11:50h",
          },
          {
            title: "Workshop 2 – PITCH",
            // place: "Grad 2",
            time: "11:00h - 11:50h",
          },
          {
            title: "Fechamento da manhã + intervalo",
            // place: "Grad 2",
            time: "11:50h - 12:00h",
          },
        ],
      },
      {
        label: "Tarde",
        items: [
          {
            title: "Retorno + boas-vindas",
            time: "14:00h - 14:15h",
          },
          {
            title: "Palestra com Regina Célia",
            // place: "Anfiteatro",
            time: "14:15h - 15:05h",
          },
          {
            title: "Coffee-Break + Sorteio",
            // place: "Grad 2",
            time: "15:05h - 15:35h",
          },
          {
            title: "Dinâmica de Formação de Equipes",
            time: "15:35h - 15:50h",
          },
          {
            title: "Palestra com Laís Xavier",
            // place: "Anfiteatro",
            time: "15:50h - 16:40h",
          },
          {
            title: "Sorteio",
            time: "16:40h - 16:50h",
          },
          {
            title: "Encerramento do primeiro dia + foto oficial",
            time: "16:50h - 17:00h",
          },
        ],
      },
    ],
  },
  {
    day: "04",
    month: "Julho, 2026",
    weekday: "Sáb",
    note: ["Hackathon"],
    periods: [
      {
        label: "Manhã",
        items: [
          {
            title: "Desenvolvimento de soluções",
            time: "09:00h - 12:00h",
          },
        ],
      },
      {
        label: "Tarde",
        items: [
          {
            title: "Continuidade das soluções",
            time: "14:00h - 15:00h",
          },
          {
            title: "Organização dos pitches",
            time: "15:00h - 15:30h",
          },
          {
            title: "Apresentações",
            subtitle: "15 equipes\nPitch de 3 minutos + 2 minutos de perguntas",
            time: "15:30h - 16:45h",
          },
          {
            title: "Avaliação da banca",
            time: "16:45h - 17:15h",
          },
          {
            title: "Resultado + encerramento",
            time: "17:15h - 18:00h",
          },
        ],
      },
    ],
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

function HackaLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "logo logo-compact" : "logo"} aria-label="HackaWoman">
      <span className="logo-mark" aria-hidden="true">
        <span className="logo-petal logo-petal-left" />
        <span className="logo-petal logo-petal-right" />
        <span className="logo-dot logo-dot-one" />
        <span className="logo-dot logo-dot-two" />
      </span>
      <span className="logo-word">
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

function AgendaBlock({ day }: { day: AgendaDay }) {
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
      <div className="agenda-periods">
        {day.periods.map((period) => (
          <section className="agenda-period" key={`${day.day}-${period.label}`}>
            <div className="agenda-period-label">
              <span>{period.label}</span>
            </div>
            <div className="timeline">
              {period.items.map((item, index) => (
                <div
                  className={
                    item.featured ? "timeline-item timeline-item-featured" : "timeline-item"
                  }
                  key={`${day.day}-${period.label}-${item.title}-${index}`}
                >
                  <span
                    className={item.featured ? "timeline-marker marker-star" : "timeline-marker"}
                    aria-hidden="true"
                  />
                  <div className="timeline-copy">
                    <h3>{item.title}</h3>
                    {item.subtitle ? (
                      <p>
                        {item.subtitle.split("\n").map((line) => (
                          <span key={`${item.title}-${line}`}>{line}</span>
                        ))}
                      </p>
                    ) : null}
                    {item.place || item.time ? (
                      <div className="timeline-meta">
                        {item.place ? (
                          <span className="timeline-place">
                            <img src={agendaPinIcon} alt="" aria-hidden="true" />
                            {item.place}
                          </span>
                        ) : null}
                        {item.time ? (
                          <span className="timeline-time">
                            <img src={agendaClockIcon} alt="" aria-hidden="true" />
                            {item.time}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function App() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);
  const anchorScrollHoldUntilRef = useRef(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (!isMenuOpen || !isMobile) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const resetMenuState = () => {
      setIsMenuOpen(false);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };

    window.addEventListener("pagehide", resetMenuState);

    return () => {
      window.removeEventListener("pagehide", resetMenuState);
    };
  }, []);

  const calculateTimeLeft = () => {
    const difference = +new Date('2026-07-03T08:00:00') - +new Date();
    let timeLeft = { dias: 0, horas: 0, minutos: 0, segundos: 0 };

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

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
          className={`menu-toggle mobile-only ${isMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu de navegação"
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

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`} aria-label="Navegação principal">
          <a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a>
          <a href="#pilares" onClick={() => setIsMenuOpen(false)}>Pilares</a>
          <a href="#programacao" onClick={() => setIsMenuOpen(false)}>Programação</a>
          <a href="#parceiros" onClick={() => setIsMenuOpen(false)}>Parceiros</a>

          <div className="mobile-only sidebar-actions">
            <a
              className="sidebar-edital-link"
              href="/edital.pdf"
              target="_blank"
              rel="noreferrer"
              onPointerDown={() => setIsMenuOpen(false)}
              onClick={() => setIsMenuOpen(false)}
            >
              Acessar edital
            </a>
            <a className="nav-cta" href={participationFormUrl} target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)}>
              <span>Inscreva-se</span>
            </a>
          </div>
        </nav>

        <div className="topbar-actions desktop-only">
          <a className="edital-link" href="/edital.pdf" target="_blank" rel="noreferrer">
            Acessar edital
          </a>
          <a className="nav-cta" href={participationFormUrl} target="_blank" rel="noreferrer">
            <span>Inscreva-se</span>
          </a>
        </div>
      </header>

      <section className="hero" id="home" data-scrollbar-section="orange">
        <DecorSquares className="decor-hero-gray" src={decorCinza} />
        <DecorSquares className="decor-hero-gray-bottom" src={decorCinza2} />
        <div className="hero-content">
          <HeroLogo />
          <p>Juntas, transformando o hoje e construindo o amanhã.</p>
          <a
            className="button button-primary"
            href={participationFormUrl}
            target="_blank"
            rel="noreferrer"
          >
            <span>Garanta sua vaga</span>
          </a>
          <div className="hero-date">
            <strong>03 e 04 de Julho</strong>
            <span>
              <em>Centro de Informática UFPE</em>
            </span>
          </div>
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
            <a href={participationFormUrl} target="_blank" rel="noreferrer">
              <span>Quero participar</span>
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

      <section className="agenda section-pad" id="programacao" data-scrollbar-section="orange">
        <DecorSquares className="decor-agenda-orange" src={decorLaranja2} />
        <div className="inner">
          <SectionTitle eyebrow="Programação" title="Agenda do evento." light />
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
<section className="final-cta section-pad" id="inscricao" data-scrollbar-section="orange">
  <div className="cta-content">
    <SectionTitle eyebrow="Inscrições abertas" title="Faça parte da história" light />
    <p>
      Seja uma das mulheres que vai transformar o ecossistema tech de Pernambuco.
    </p>

    {/* 1. BOTÃO DE INSCRIÇÃO COM MARGENS RESPONSIVAS */}
    <a
      className="button button-primary"
      href={participationFormUrl}
      target="_blank"
      rel="noreferrer"
      style={{ 
        marginTop: 'clamp(-20px, -3vw, 0px)',   /* Menos agressivo no mobile, evita grudar no texto de cima */
        marginBottom: 'clamp(24px, 5vw, 60px)' /* Diminui o espaçamento no mobile e assume 60px no desktop */
      }}
    >
      <span>Quero participar</span>
    </a>

    {/* 📦 CONTÊINER ÚNICO MESTRE (Une o cronômetro e o bloco de textos) */}
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px', /* ⬅️ Defina aqui a distância exata entre os NÚMEROS e os TEXTOS */
      width: '100%'
    }} className="countdown-master-wrapper">

     {/* 2. CRONÔMETRO COM PLURAL/SINGULAR AUTOMÁTICO */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '14px',
        fontFamily: '"Bebas Neue", sans-serif',
        fontSize: 'clamp(44px, 5vw, 64px)',
        color: '#ffffff',
        margin: '0',
        letterSpacing: '1px',
        lineHeight: 1
      }} className="countdown-container">
        <span>
          {String(timeLeft.dias).padStart(2, '0')}
          <span style={{ color: '#ffffff', fontSize: '0.5em', marginLeft: '3px' }}>
            {timeLeft.dias === 1 ? 'Dia' : 'Dias'}
          </span>
        </span>
        
        <span>
          {String(timeLeft.horas).padStart(2, '0')}
          <span style={{ color: '#ffffff', fontSize: '0.5em', marginLeft: '3px' }}>
            {timeLeft.horas === 1 ? 'Hora' : 'Horas'}
          </span>
        </span>
        
        <span>
          {String(timeLeft.minutos).padStart(2, '0')}
          <span style={{ color: '#ffffff', fontSize: '0.5em', marginLeft: '3px' }}>
            {timeLeft.minutos === 1 ? 'Minuto' : 'Minutos'}
          </span>
        </span>
        
        <span>
          {String(timeLeft.segundos).padStart(2, '0')}
          <span style={{ color: '#ffffff', fontSize: '0.5em', marginLeft: '3px' }}>
            {timeLeft.segundos === 1 ? 'Segundo' : 'Segundos'}
          </span>
        </span>
      </div>

      {/* CONTÊINER INTERNO SÓ COM OS TEXTOS */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '10px' /* ⬅️ Distância entre uma frase e outra */
      }}>
        {/* 3. TEXTO INDICADOR DO CRONÔMETRO */}
        <small style={{ margin: 0, display: 'block' }}>
          Até o início do evento.
        </small>

        {/* 4. TEXTO DE VAGAS LIMITADAS */}
        <small style={{ margin: 0, display: 'block' }}>
          As vagas são limitadas, então garanta já a sua!
        </small>
      </div>

    </div> {/* ⬅️ FIM DO CONTÊINER ÚNICO MESTRE */}

    {/* 5. LOGO DO EVENTO */}
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
            <a href="#pilares">Nossos pilares</a>
            <a href="#programacao">Programação</a>
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
