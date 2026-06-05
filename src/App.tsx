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
    description: "Criatividade e busca constante por novas soluções.",
  },
  {
    number: "02",
    title: "Colaboração",
    description: "Construção coletiva e troca de conhecimentos.",
  },
  {
    number: "03",
    title: "Inclusão",
    description: "Diversidade, equidade e oportunidades para todas.",
  },
  {
    number: "04",
    title: "Excelência",
    description: "Qualidade, responsabilidade e compromisso.",
  },
  {
    number: "05",
    title: "Ética",
    description: "Integridade e respeito em cada ação.",
  },
  {
    number: "06",
    title: "Impacto social",
    description: "Projetos que geram benefícios para a sociedade.",
  },
  {
    number: "07",
    title: "Aprendizado",
    description: "Evolução constante de pessoas e organizações.",
  },
];

const principles = [
  {
    title: "Missão",
    text: "Promover inovação e desenvolvimento por meio das tecnologias, criando oportunidades e gerando impacto positivo em um ecossistema inclusivo e sustentável.",
  },
  {
    title: "Visão",
    text: "Ser referência em inovação tecnológica, conectando talentos e transformando ideias em oportunidades, tornando a tecnologia acessível para gerar progresso e inclusão.",
  },
  {
    title: "Compromisso",
    text: "Promover talentos, inovação, conectando pessoas para gerar impacto. Acolhemos e capacitamos como base para formar lideranças e impulsionar o desenvolvimento social e econômico.",
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
        time: "09h00 - 10h00",
      },
      {
        title: "Workshop de UX",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10h00 - 11h00",
      },
      {
        title: "HackaWoman",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "11h00 - 13h00",
        featured: true,
      },
      {
        title: "Palestra Bradesco",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 5",
        time: "15h00 - 16h00",
      },
      {
        title: "Mesa redonda - IA e futuro",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 6",
        time: "16h00 - 17h00",
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
        time: "09h00 - 10h00",
      },
      {
        title: "Hackathon kickoff",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "10h00 - 11h00",
      },
      {
        title: "HackaWoman",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 1",
        time: "11h00 - 15h00",
        featured: true,
      },
      {
        title: "Mulheres na tecnologia",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "15h00 - 16h00",
      },
      {
        title: "Papo sobre o futuro",
        subtitle: "Subtítulo para dar contexto",
        place: "Local 3",
        time: "16h00 - 19h00",
      },
    ],
  },
];

const partners = [
  "Ligia",
  "Centro de Informática UFPE",
  "Plexos Institute",
  "JF Consultoria",
  "<Cintia/>",
  "SECTI Pernambuco",
  "Magalu Cloud",
  "Bradesco",
  "Tech Woman",
];

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
          <div className="timeline-item" key={`${day.day}-${item.title}`}>
            <span
              className={item.featured ? "timeline-marker marker-star" : "timeline-marker"}
              aria-hidden="true"
            />
            <div className="timeline-copy">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <div className="timeline-meta">
                <span>{item.place}</span>
                <span>{item.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="site">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="HackaWoman início">
          <HackaLogo compact />
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#pilares">Nossos Pilares</a>
          <a href="#programacao">Programação</a>
          <a href="#parceiros">Parceiros</a>
        </nav>
        <a className="nav-cta" href="#inscricao">
          Inscreva-se já
        </a>
      </header>

      <section className="hero" id="home">
        <span className="float-square square-white square-a" aria-hidden="true" />
        <span className="float-square square-white square-b" aria-hidden="true" />
        <span className="float-square square-white square-c" aria-hidden="true" />
        <div className="hero-content">
          <HackaLogo />
          <p>Juntas, transformando o hoje e construindo o amanhã.</p>
          <a className="button button-primary" href="#inscricao">
            Garanta sua vaga
          </a>
          <div className="hero-date">
            <strong>03 e 04 de Julho</strong>
            <span>Centro de Informática UFPE</span>
          </div>
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a próxima seção">
            <span />
          </a>
        </div>
      </section>

      <section className="intro section-pad" id="sobre">
        <span className="float-square square-white intro-square-a" aria-hidden="true" />
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
            <a href="#inscricao">Inscreva-se já</a>
          </div>
        </div>
      </section>

      <section className="highlights" aria-label="Resumo do evento">
        {highlights.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="pillars section-pad" id="pilares">
        <span className="float-square square-white pillar-square-a" aria-hidden="true" />
        <span className="float-square square-orange pillar-square-b" aria-hidden="true" />
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

      <section className="principles">
        <span className="float-square square-orange principles-square-a" aria-hidden="true" />
        <div className="principle-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.title}>
              <div className="principle-icon" aria-hidden="true" />
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="agenda section-pad" id="programacao">
        <span className="float-square square-orange agenda-square-a" aria-hidden="true" />
        <span className="float-square square-orange agenda-square-b" aria-hidden="true" />
        <div className="inner">
          <SectionTitle eyebrow="Programação" title="Agenda do evento." light />
          <div className="agenda-list">
            {agenda.map((day) => (
              <AgendaBlock day={day} key={day.day} />
            ))}
          </div>
        </div>
      </section>

      <section className="partners section-pad" id="parceiros">
        <span className="float-square square-purple partners-square-a" aria-hidden="true" />
        <span className="float-square square-purple partners-square-b" aria-hidden="true" />
        <div className="inner">
          <SectionTitle eyebrow="Parceiros e patrocinadores" title="Quem nos apoia." light />
          <div className="partner-grid">
            {partners.map((partner) => (
              <span className="partner-logo" key={partner}>
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad" id="inscricao">
        <div className="cta-content">
          <SectionTitle eyebrow="Inscrições abertas" title="Faça parte da história" light />
          <p>
            Seja uma das mulheres que vai transformar o ecossistema tech de Pernambuco.
          </p>
          <a className="button button-primary" href="mailto:contato@hackawoman.com">
            Quero participar
          </a>
          <small>As vagas são limitadas, então garanta já a sua!</small>
          <HackaLogo compact />
        </div>
      </section>

      <footer className="footer">
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
