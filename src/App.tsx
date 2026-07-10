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
  driveUrl: string;
};

type Winner = {
  position: 1 | 2 | 3;
  team: string;
  project: string;
  description: string;
  category: string;
  photo?: string;
};

type GalleryPhoto = {
  src: string;
  alt: string;
};

const winners: Winner[] = [
  {
    position: 1,
    team: "Manastech",
    project: "MIA",
    description: "Inteligência Artificial para reduzir a carga mental de mães trabalhadoras",
    category: "Ver página",
    photo: "/winners/1lugar.jpg",
  },
  {
    position: 2,
    team: "Aurora",
    project: "Projeto Aurora",
    description: "Proteção financeira para recomeços.",
    category: "Ver página",
    photo: "/winners/2lugar.jpeg",
  },
  {
    position: 3,
    team: "Sálvia",
    project: "AEGIS",
    description: "Arquivo Eletrônico com Garantia de Integridae e Segurança.",
    category: "Ver página",
    photo: "/winners/3lugar.jpg",
  },
];

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
    driveUrl: "https://drive.google.com/drive/folders/1lm5AzXk6oo2ve2SAP8nET3Xdj02vfwrr?usp=share_link",
  },
  {
    day: "04",
    month: "Julho, 2026",
    weekday: "Sáb",
    note: ["Hackathon"],
    photos: fotosDia2.map((src) => ({ src, alt: "Foto do evento — dia 2" })),
    driveUrl: "https://drive.google.com/drive/folders/1SyGiMAF2OdJKvXy0pflsxfBXUM1lGrWR?usp=share_link",
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

const INTRO_LINES = [
  "Obrigada a todas que",
  "participaram dessa",
  "experiência",
  "maravilhosa",
];
const INTRO_FULL = INTRO_LINES.join("\n");
const CHAR_DELAY = 100; // ms por caractere

function HeroIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<1 | 2 | 3>(1);
  const [typed, setTyped] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isMobile = useIsMobile();
  const total = INTRO_FULL.length;


  useEffect(() => {
    // Digita caractere a caractere
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(i);
      if (i >= total) clearInterval(interval);
    }, CHAR_DELAY);

    // Após terminar de digitar + pausa, começa a animação do retângulo
    const t1 = setTimeout(() => {
      setPhase(2);
      const vid = videoRef.current;
      if (vid) {
        vid.muted = true;
        vid.playsInline = true;
        vid.play().catch(() => {});
      }
    }, total * CHAR_DELAY + 5000);

    const video = videoRef.current;
    const handleEnded = () => {
      setPhase(3);
      setTimeout(onComplete, 1400);
    };
    video?.addEventListener("ended", handleEnded);

    return () => {
      clearInterval(interval);
      clearTimeout(t1);
      video?.removeEventListener("ended", handleEnded);
    };
  }, [onComplete, total]);

  // Distribui os chars digitados pelas linhas
  let remaining = typed;
  const displayedLines = INTRO_LINES.map((line) => {
    if (remaining <= 0) return "";
    const slice = line.slice(0, remaining);
    remaining = Math.max(0, remaining - line.length - 1); // -1 pelo \n
    return slice;
  });

  // Índice da última linha com conteúdo (onde o cursor fica)
  const cursorLineIdx = displayedLines.reduce((acc, l, i) => (l.length > 0 ? i : acc), 0);

  return (
    <>
      <p className={`hero-intro-text hero-intro-text-p${phase}`}>
        {INTRO_LINES.map((_, i) => (
          <span key={i}>
            {displayedLines[i]}
            {i === cursorLineIdx && phase === 1 && (
              <span className="hero-intro-cursor" aria-hidden="true" />
            )}
          </span>
        ))}
      </p>
      <div className={`hero-intro-bg hero-intro-bg-p${phase}`} aria-hidden="true">
        <img src="/hero-bg/photo.jpeg" alt="" />
      </div>
      <div className={`hero-intro hero-intro-p${phase}`} aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-intro-video"
          muted
          playsInline
          preload="auto"
          src={isMobile ? "/video/resumoHackawoman.mp4" : "/video/resumoHackawomanHorizontal.mp4"}
        />
        {phase === 2 && !isMobile && (
          <button
            className="hero-intro-skip"
            onClick={() => { setPhase(3); setTimeout(onComplete, 1400); }}
          >
            Pular vídeo
          </button>
        )}
      </div>
      {phase === 2 && isMobile && (
        <button
          className="hero-intro-skip"
          onClick={() => { setPhase(3); setTimeout(onComplete, 1400); }}
        >
          Pular vídeo
        </button>
      )}
    </>
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

// ── Polaroid ─────────────────────────────────────────────────────────────────
// Coloque o PNG do frame em public/polaroid/frame.png
// Ajuste `photo` depois de colocar o PNG: meça no Figma e divida pelos px totais do frame.
//   ex: frame 900×1100px, área da foto em x=72, y=63, 756×756px → left:0.08, top:0.057, width:0.84, height:0.687
const POLAROID_CONFIG = {
  frameUrl: '/polaroid/frame.png',
  photo: { left: 0.052, top: 0.058, width: 0.896, height: 0.745 },
};

function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
}

async function buildPolaroidUrl(photoSrc: string): Promise<string> {
  const [photo, frame] = await Promise.all([loadImg(photoSrc), loadImg(POLAROID_CONFIG.frameUrl)]);
  const W = frame.naturalWidth, H = frame.naturalHeight;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, W, H);
  const { left, top, width, height } = POLAROID_CONFIG.photo;
  const px = left * W, py = top * H, pw = width * W, ph = height * H;
  const scale = Math.max(pw / photo.naturalWidth, ph / photo.naturalHeight);
  const sw = pw / scale, sh = ph / scale;
  const sx = (photo.naturalWidth - sw) / 2, sy = (photo.naturalHeight - sh) / 2;
  ctx.save();
  ctx.beginPath(); ctx.rect(px, py, pw, ph); ctx.clip();
  ctx.drawImage(photo, sx, sy, sw, sh, px, py, pw, ph);
  ctx.restore();
  ctx.drawImage(frame, 0, 0, W, H);
  return canvas.toDataURL('image/png');
}

// ── Mosaic slots ──────────────────────────────────────────────────────────────
const MOSAIC_SLOTS = [
  { left: '9%',  top: '2%',  width: '23%', aspect: '3/4',   rotate: '-2deg',   z: 4, dir: 'l' },
  { left: '28%', top: '0%',  width: '28%', aspect: '16/10', rotate: '1.5deg',  z: 3, dir: 'u' },
  { left: '59%', top: '1%',  width: '17%', aspect: '3/4',   rotate: '2.5deg',  z: 2, dir: 'r' },
  { left: '74%', top: '5%',  width: '25%', aspect: '4/3',   rotate: '-1deg',   z: 3, dir: 'r' },
  { left: '-1%', top: '46%', width: '17%', aspect: '4/3',   rotate: '3deg',    z: 2, dir: 'l' },
  { left: '16%', top: '43%', width: '33%', aspect: '3/2',   rotate: '-1.5deg', z: 5, dir: 'd' },
  { left: '52%', top: '38%', width: '22%', aspect: '2/3',   rotate: '2deg',    z: 4, dir: 'd' },
  { left: '76%', top: '50%', width: '22%', aspect: '4/3',   rotate: '-2.5deg', z: 3, dir: 'r' },
  { left: '2%',  top: '7%',  width: '12%', aspect: '1/1',   rotate: '-3.5deg', z: 1, dir: 'u' },
];

// 2 em cima, 3 embaixo
const MOBILE_MOSAIC_SLOTS = [
  { left: '2%',  top: '2%',  width: '46%', aspect: '3/4',   rotate: '-3deg',   z: 2, dir: 'l' },
  { left: '50%', top: '0%',  width: '48%', aspect: '4/3',   rotate: '2.5deg',  z: 3, dir: 'r' },
  { left: '-2%', top: '52%', width: '38%', aspect: '4/3',   rotate: '3.5deg',  z: 3, dir: 'l' },
  { left: '30%', top: '49%', width: '42%', aspect: '3/2',   rotate: '-2deg',   z: 4, dir: 'd' },
  { left: '66%', top: '34%', width: '36%', aspect: '3/4',   rotate: '-3.5deg', z: 2, dir: 'r' },
];

function pickRandom(photos: GalleryPhoto[], count: number): GalleryPhoto[] {
  return [...photos].sort(() => Math.random() - 0.5).slice(0, Math.min(count, photos.length));
}

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return mobile;
}

function PhotoMosaic({ photos }: { photos: GalleryPhoto[] }) {
  const isMobile = useIsMobile();
  const slots = isMobile ? MOBILE_MOSAIC_SLOTS : MOSAIC_SLOTS;
  const slotCount = slots.length;

  const [visible, setVisible] = useState(() => pickRandom(photos, slotCount));
  const [anim, setAnim] = useState<'idle' | 'out' | 'in'>('idle');
  const [openedPhoto, setOpenedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedSrc, setSelectedSrc] = useState<string | null>(null);
  const animRef = useRef<'idle' | 'out' | 'in'>('idle');
  const photosRef = useRef(photos);
  useEffect(() => { photosRef.current = photos; }, [photos]);

  const slotCountRef = useRef(slotCount);
  useEffect(() => { slotCountRef.current = slotCount; }, [slotCount]);

  useEffect(() => {
    setVisible(pickRandom(photos, slotCount));
  }, [slotCount, photos]);

  const shuffle = useCallback(() => {
    if (animRef.current !== 'idle') return;
    animRef.current = 'out';
    setAnim('out');
    setSelectedSrc(null);
    setTimeout(() => {
      setVisible(pickRandom(photosRef.current, slotCountRef.current));
      animRef.current = 'in';
      setAnim('in');
      setTimeout(() => { animRef.current = 'idle'; setAnim('idle'); }, 850);
    }, 620);
  }, []);

  useEffect(() => {
    if (photos.length <= slotCount) return;
    const t = setInterval(shuffle, 60000);
    return () => clearInterval(t);
  }, [shuffle, photos.length, slotCount]);

  if (photos.length === 0) return <div className="photo-mosaic photo-mosaic-empty" />;

  return (
    <>
      <div className={`photo-mosaic${anim !== 'idle' ? ` photo-mosaic-${anim}` : ''}`}>
        {visible.map((photo, i) => {
          const s = slots[i];
          const isSelected = isMobile && selectedSrc === photo.src;
          return (
            <div
              key={photo.src}
              className={`photo-mosaic-item mosaic-dir-${s.dir}`}
              style={{
                '--r': s.rotate,
                left: s.left, top: s.top, width: s.width,
                aspectRatio: s.aspect, zIndex: isSelected ? 25 : s.z,
                animationDelay: anim === 'out' ? `${i * 45}ms` : `${i * 55}ms`,
              } as React.CSSProperties}
              onClick={!isMobile ? () => setOpenedPhoto(photo) : undefined}
              onTouchEnd={isMobile ? () => setSelectedSrc(photo.src) : undefined}
            >
              <div className="photo-mosaic-img-wrap">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
              {isSelected && (
                <button
                  className="mosaic-ver-foto"
                  onClick={() => { setOpenedPhoto(photo); setSelectedSrc(null); }}
                >
                  Ver foto
                </button>
              )}
            </div>
          );
        })}
        {!isMobile && (
          <button
            className="photo-mosaic-shuffle"
            onClick={shuffle}
            aria-label="Embaralhar fotos"
            disabled={anim !== 'idle'}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="16 3 21 3 21 8"/>
              <line x1="4" y1="20" x2="21" y2="3"/>
              <polyline points="21 16 21 21 16 21"/>
              <line x1="15" y1="15" x2="21" y2="21"/>
            </svg>
            Embaralhar
          </button>
        )}
      </div>
      {isMobile && (
        <button
          className="photo-mosaic-shuffle photo-mosaic-shuffle--mobile"
          onClick={shuffle}
          aria-label="Embaralhar fotos"
          disabled={anim !== 'idle'}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="16 3 21 3 21 8"/>
            <line x1="4" y1="20" x2="21" y2="3"/>
            <polyline points="21 16 21 21 16 21"/>
            <line x1="15" y1="15" x2="21" y2="21"/>
          </svg>
          Embaralhar
        </button>
      )}
      {openedPhoto && (
        <PolaroidModal photo={openedPhoto} onClose={() => setOpenedPhoto(null)} />
      )}
    </>
  );
}

function PolaroidModal({ photo, onClose }: { photo: GalleryPhoto; onClose: () => void }) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', esc);
    buildPolaroidUrl(photo.src).then(setDataUrl).catch(() => setError(true));
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', esc);
    };
  }, [photo.src, onClose]);

  const download = () => {
    if (!dataUrl) return;
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = 'hackawoman-2026-polaroid.png';
    a.click();
  };

  return (
    <div className="polaroid-overlay" onClick={onClose}>
      <div className="polaroid-modal" onClick={e => e.stopPropagation()}>
        <button className="polaroid-close" onClick={onClose} aria-label="Fechar">✕</button>
        {!dataUrl && !error && (
          <div className="polaroid-loading">Gerando polaroid…</div>
        )}
        {error && (
          <div className="polaroid-error">
            <img src={photo.src} alt={photo.alt} />
            <p>Frame não encontrado em /polaroid/frame.png</p>
          </div>
        )}
        {dataUrl && (
          <>
            <img className="polaroid-preview" src={dataUrl} alt="Foto polaroid" />
            <button className="polaroid-download" onClick={download}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Baixar polaroid
            </button>
          </>
        )}
      </div>
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

const CONFETTI_COLORS = ['#ff4b1f', '#ff6535', '#ff7d50', '#ff9068', '#ffaa88', '#ffb59a'];

function WinnersConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    type Particle = {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; rotation: number;
      rotSpeed: number; shape: 0 | 1 | 2; alpha: number;
    };

    const count = 90;
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: Math.random() * 0.6 + 0.2,
      size: Math.random() * 7 + 4,
      color: CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)],
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.04,
      shape: Math.floor(Math.random() * 3) as 0 | 1 | 2,
      alpha: Math.random() * 0.4 + 0.35,
    }));

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        if (p.shape === 0) {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else if (p.shape === 1) {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      }
      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return <canvas ref={canvasRef} className="winners-confetti" aria-hidden="true" />;
}

function WinnerCard({ winner }: { winner: Winner }) {
  const p = winner.position;
  return (
    <article className={`winner-card winner-card-${p}`}>
      {p === 1 && (
        <img src="/winners/tagCampeas.png" className="winner-campeas-tag" alt="Campeãs" />
      )}
      <div className={`winner-img winner-img-${p}`}>
        {winner.photo
          ? <img src={winner.photo} alt={`Equipe ${winner.team}`} />
          : <div className="winner-img-placeholder" />}
      </div>
      <div className={`winner-badge winner-badge-${p}`}>
        <img
          className="winner-badge-bg"
          src={`/winners/circulo${p === 1 ? 'Primeiro' : p === 2 ? 'Segundo' : 'Terceiro'}.png`}
          alt=""
          aria-hidden="true"
        />
        <span className="winner-pos-num">{p}º</span>
        {p <= 3 && <span className="winner-pos-label">LUGAR</span>}
      </div>
      <div className="winner-divider" />
      <div className="winner-team-block">
        <p className="winner-equipe">EQUIPE</p>
        <h3 className={`winner-name winner-name-${p}`}>{winner.team}</h3>
      </div>
      <p className="winner-desc">
        <strong>{winner.project}</strong> – {winner.description}
      </p>
      <span className={`winner-tag winner-tag-${p}`}>{winner.category}</span>
    </article>
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
        <PhotoMosaic photos={day.photos} />
        <div className="agenda-day-footer">
        </div>
      </div>
      {isModalOpen && <PhotoModal photos={day.photos} onClose={() => setIsModalOpen(false)} />}
    </article>
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(false);
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
    <main className={["site", isMenuOpen && "menu-open", !introComplete && "intro-active"].filter(Boolean).join(" ")}>
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
          <a href="#resultados" onClick={() => setIsMenuOpen(false)}>Resultados</a>
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
          {/* <a className="nav-cta" href="#resultados">
            <span>Ver ganhadoras</span>
          </a> */}
        </div>
      </header>

      <section className="hero" id="home" data-scrollbar-section="orange">
        {!introComplete && <HeroIntro onComplete={() => setIntroComplete(true)} />}
        <DecorSquares className="decor-hero-gray" src={decorCinza} />
        <DecorSquares className="decor-hero-gray-bottom" src={decorCinza2} />
        <div className="hero-content">
          <HeroLogo />
          <svg className="hero-year" viewBox="0 0 800 160" aria-label="2026" focusable="false">
            <defs>
              <linearGradient id="year-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff4b1f" />
                <stop offset="100%" stopColor="#ff9068" />
              </linearGradient>
            </defs>
            <text
              x="400" y="148"
              textAnchor="middle"
              fill="none"
              stroke="url(#year-grad)"
              strokeWidth="3"
              fontFamily="'Bebas Neue', Impact, Arial, sans-serif"
              fontSize="290"
              letterSpacing="-2"
            >
              2026
            </text>
          </svg>
          <p className="hero-tagline">
            Foi maravilhoso ter vocês nessa aventura<br />
            Nos vemos no próximo HackaWoman!
          </p>
          <a className="scroll-cue" href="#sobre" aria-label="Ir para a próxima seção">
            <span />
          </a>
        </div>
      </section>

      <section className="winners section-pad" id="resultados" data-scrollbar-section="purple">
        <WinnersConfetti />
        <img src="/winners/ellipseLeft.svg" className="winners-ellipse winners-ellipse-left" alt="" aria-hidden="true" />
        <img src="/winners/ellipseRight.svg" className="winners-ellipse winners-ellipse-right" alt="" aria-hidden="true" />
        <div className="inner">
          <div className="winners-header">
            <div className="winners-title-group">
              <p className="winners-eyebrow">HACKAWOMAN 2026</p>
              <h2 className="winners-title">Resultado Final</h2>
            </div>
          </div>
          <div className="winners-podium">
            <img src="/winners/vencedorasStroke.svg" className="winners-vencedoras-bg" alt="" aria-hidden="true" />
            {([2, 1, 3] as const).map(pos => (
              <WinnerCard key={pos} winner={winners.find(w => w.position === pos)!} />
            ))}
          </div>
          <p className="winners-subtitle">
            Conheça as equipes que mais se destacaram no desafio e vão representar o que há de melhor em inovação, tecnologia e impacto social.
          </p>
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
          <SectionTitle eyebrow="Galeria" title="Nossas histórias." light />
          <a
            className="galeria-drive-btn"
            href="https://drive.google.com/drive/folders/1vdOyGrpAHyoGiUPTjbhrWizTxuEVV8nW?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            Acessar Drive
          </a>
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
