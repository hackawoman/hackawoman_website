import { useEffect, useState } from "react";
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

type AgendaItem = {
  title: string;
  subtitle: string;
  place: string;
  time: string;
  featured?: boolean;
};

type AgendaDay = {
  day: string;
  month: string;
  weekday: string;
  items: AgendaItem[];
};

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
    items: [
      {
        title: "Abertura oficial e credenciamento",
        subtitle: "Subtítulo para dar contexto",
        place: "Auditório Principal",
        time: "9:00h - 10:00h",
      },
      {
        title: "Workshop de UX",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10:00h - 11:00h",
      },
      {
        title: "HackaWoman",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10:00h - 11:00h",
        featured: true,
      },
      {
        title: "Palestra Bradesco",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "10:00h - 11:00h",
      },
      {
        title: "Mesa redonda - IA e futuro",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "10:00h - 11:00h",
      },
    ],
  },
  {
    day: "04",
    month: "Julho, 2026",
    weekday: "Sáb",
    items: [
      {
        title: "Abertura oficial e credenciamento",
        subtitle: "Subtítulo para dar contexto",
        place: "Auditório Principal",
        time: "9:00h - 10:00h",
      },
      {
        title: "Hackathon kickoff",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10:00h - 11:00h",
      },
      {
        title: "HackaWoman",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10:00h - 11:00h",
        featured: true,
      },
      {
        title: "Mulheres na tecnologia",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "10:00h - 11:00h",
      },
      {
        title: "Papo sobre o futuro",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "10:00h - 11:00h",
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
        <span>{day.weekday}</span>
        <strong>{day.day}</strong>
        <small>{day.month}</small>
      </div>
      <div className="timeline">
        {day.items.map((item) => (
          <div
            className={item.featured ? "timeline-item timeline-item-featured" : "timeline-item"}
            key={`${day.day}-${item.title}`}
          >
            <span
              className={item.featured ? "timeline-marker marker-star" : "timeline-marker"}
              aria-hidden="true"
            />
            <div className="timeline-copy">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
        <div className="timeline-meta">
          <span className="timeline-place">{item.place}</span>
          <span className="timeline-time">{item.time}</span>
        </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function App() {
  const [isTopbarVisible, setIsTopbarVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateTopbar = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;

      if (currentScrollY <= 8) {
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

  return (
    <main className="site">
      <header className={isTopbarVisible ? "topbar" : "topbar topbar-hidden"}>
        <a className="brand" href="#home" aria-label="HackaWoman início">
          <NavbarLogo />
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#pilares">Nossos Pilares</a>
          <a href="#programacao">Programação</a>
          <a href="#parceiros">Parceiros</a>
        </nav>
        <a className="nav-cta" href="#inscricao">
          <span>Inscreva-se já</span>
        </a>
      </header>

      <section className="hero" id="home" data-scrollbar-section="orange">
        <DecorSquares className="decor-hero-gray" src={decorCinza} />
        <DecorSquares className="decor-hero-gray-bottom" src={decorCinza2} />
        <div className="hero-content">
          <HeroLogo />
          <p>Juntas, transformando o hoje e construindo o amanhã.</p>
          <a className="button button-primary" href="#inscricao">
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
              O HackaWoman é um hackathon exclusivo para mulheres, onde talento,
              tecnologia e representatividade se unem para gerar impacto social.
            </p>
            <p className="body-copy">
              Criamos oportunidades de aprendizado, colaboração e inovação, usando
              a tecnologia como ferramenta de transformação para comunidades.
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
            <a href="#inscricao">
              <span>Inscreva-se já</span>
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
          <a className="button button-primary" href="mailto:contato@hackawoman.com">
            <span>Quero participar</span>
          </a>
          <small>As vagas são limitadas, então garanta já a sua!</small>
          <HackaLogo compact />
        </div>
      </section>

      <footer className="footer" data-scrollbar-section="orange">
        <div>
          <HackaLogo compact />
          <p>Juntas, transformando o hoje e construindo o amanhã.</p>
        </div>
        <div>
          <h2>Mapa</h2>
          <a href="#sobre">Sobre</a>
          <a href="#programacao">Programação</a>
          <a href="#parceiros">Parceiros</a>
        </div>
        <div>
          <h2>Contato</h2>
          <a href="mailto:contato@hackawoman.com">contato@hackawoman.com</a>
          <span>@hackawoman</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
