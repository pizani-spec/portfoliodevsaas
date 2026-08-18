import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoAsset from "../assets/logo-trim.png.asset.json";
import logoBgAsset from "../assets/logo-transparent.png.asset.json";




const WA_BASE = "https://wa.me/5543999632817?text=";
const WA_PORTFOLIO =
  WA_BASE +
  encodeURIComponent(
    "Olá, Matheus! Vi seu portfólio e gostaria de conversar sobre um projeto.",
  );
const WA_SITE =
  WA_BASE +
  encodeURIComponent("Olá, Matheus! Quero um site profissional para meu negócio.");

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Matheus Dev SaaS — Portfólio de Sites Profissionais" },
      {
        name: "description",
        content:
          "Desenvolvimento de sites profissionais sob medida. Veja projetos, benefícios e fale direto no WhatsApp.",
      },
      { property: "og:title", content: "Matheus Dev SaaS — Portfólio" },
      {
        property: "og:description",
        content:
          "Sites rápidos, modernos e otimizados para converter visitantes em clientes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0B0D12" },
    ],
  }),
  component: Index,
});

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M7 7h10v10" />
    </svg>
  );
}

function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.1-1.4-.1-.1-.3-.2-.5-.3z" />
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.4 5.2L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.2.8.9-3.1-.2-.3C3.7 14.6 3.2 13 3.2 12c0-4.8 3.9-8.7 8.8-8.7s8.8 3.9 8.8 8.7-3.9 8.7-8.8 8.7z" />
    </svg>
  );
}

const skills = [
  {
    icon: "⚡",
    title: "Performance",
    text: "Sites otimizados para carregar de forma rápida e fluida.",
  },
  {
    icon: "🎨",
    title: "Design Moderno",
    text: "Interfaces profissionais que geram confiança.",
  },
  {
    icon: "📱",
    title: "100% Responsivo",
    text: "Funciona perfeitamente em qualquer dispositivo.",
  },
  { icon: "🚀", title: "Deploy Rápido", text: "Entrega ágil com hospedagem na Netlify." },
];

const projects = [
  {
    badge: "Odontologia",
    preview: "Sorriso Odontológico",
    title: "Sorriso Odontológica",
    text: "Site institucional para clínica odontológica com apresentação de serviços, equipe profissional e agendamento integrado ao WhatsApp. Design clean e focado em converter visitantes em pacientes.",
    url: "https://exsiteodontologico.netlify.app/",
  },
  {
    badge: "Advocacia",
    preview: "Escritório de Advocacia",
    title: "Escritório de Advocacia",
    text: "Site profissional para escritório de advocacia com áreas de atuação, apresentação do time e formulário de contato. Focado em transmitir credibilidade e facilitar o primeiro contato com clientes.",
    url: "https://exemplsiteadv.netlify.app/",
  },
];

const benefits = [
  {
    n: "01",
    title: "Credibilidade imediata",
    text: "87% das pessoas pesquisam online antes de contratar um serviço. Sem site, você não existe para a maioria dos seus potenciais clientes.",
  },
  {
    n: "02",
    title: "Disponível 24/7",
    text: "Seu site trabalha por você mesmo quando você está dormindo. Clientes podem conhecer seus serviços e entrar em contato a qualquer hora.",
  },
  {
    n: "03",
    title: "Mais clientes sem esforço",
    text: "Um site otimizado atrai visitantes organicamente pelo Google. Você para de depender apenas de indicação e começa a receber leads qualificados.",
  },
  {
    n: "04",
    title: "Destaque da concorrência",
    text: "Enquanto seus concorrentes ainda usam apenas redes sociais, você se posiciona como referência no mercado com uma presença profissional.",
  },
  {
    n: "05",
    title: "Contato direto e rápido",
    text: "Integração com WhatsApp, formulários e botões de ação. Seu cliente entra em contato com um clique — sem barreiras.",
  },
  {
    n: "06",
    title: "Investimento que se paga",
    text: "Um site profissional se paga com os primeiros clientes que você conquistar. É marketing que trabalha para você todos os dias.",
  },
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>

      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="logo" href="#inicio">
            <img className="logo-img" src={logoAsset.url} alt="Matheus Dev SaaS logo" width="34" height="34" />
            Matheus Dev <strong>SaaS</strong>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="siteNav"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="sr-only">Abrir menu</span>
          </button>

          <nav
            className={`site-nav${menuOpen ? " open" : ""}`}
            id="siteNav"
            aria-label="Navegação principal"
            onClick={() => setMenuOpen(false)}
          >
            <a href="#sobre">Sobre</a>
            <a href="#meus-projetos">Meus Projetos</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#contato" className="nav-cta">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-glow-2" aria-hidden="true"></div>
          <div className="hero-logo-watermark" aria-hidden="true">
            <img src={logoBgAsset.url} alt="" />
          </div>
          <div className="container hero-inner reveal">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span>
              Desenvolvimento de sites profissionais
            </span>
            <h1>
              Seu negócio merece um site que{" "}
              <span className="gradient-text">converte visitantes em clientes</span>.
            </h1>
            <p className="hero-lead">
              Crio sites rápidos, modernos e otimizados para gerar resultados reais. Do
              primeiro rascunho até o deploy — sem complicação.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#meus-projetos">
                Ver meus projetos
                <ArrowIcon />
              </a>
              <a
                className="btn btn-whatsapp"
                href={WA_PORTFOLIO}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section about" id="sobre" aria-labelledby="about-title">
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Sobre
              </span>
              <h2 id="about-title">Foco em resultado, não só em código.</h2>
            </div>
            <div className="about-grid">
              <div className="about-text reveal">
                <p>
                  Desenvolvo <strong>sites profissionais sob medida</strong> para empresas
                  que querem se destacar online. Cada projeto é pensado para gerar
                  confiança, atrair clientes e converter visitantes em negócios reais.
                </p>
                <p>
                  Trabalho com tecnologias modernas e foco total em performance — seu site
                  rápido, responsivo e pronto para escalar junto com o seu negócio.
                </p>
              </div>
              <div className="skills-grid reveal">
                {skills.map((s) => (
                  <div className="skill-card" key={s.title}>
                    <div className="skill-icon">{s.icon}</div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="section projects"
          id="meus-projetos"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Meus Projetos
              </span>
              <h2 id="projects-title">Sites que geram resultado.</h2>
              <p className="section-subtitle">
                Cada projeto abaixo foi desenvolvido sob medida para atender às
                necessidades reais do cliente e do seu público.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((p) => (
                <article className="project-card reveal" key={p.title}>
                  <div className="project-preview">
                    <div className="project-badge">{p.badge}</div>
                    <span className="project-preview-label">{p.preview}</span>
                  </div>
                  <div className="project-body">
                    <div className="project-info">
                      <h3>{p.title}</h3>
                      <div className="project-tags">
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>JavaScript</span>
                      </div>
                      <p>{p.text}</p>
                      <div className="project-links">
                        <a
                          href={p.url}
                          className="btn btn-outline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Ver projeto online
                          <ExternalIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section benefits"
          id="beneficios"
          aria-labelledby="benefits-title"
        >
          <div className="container">
            <div className="section-heading reveal">
              <span className="eyebrow">
                <span className="eyebrow-dot"></span>Por que ter um site profissional?
              </span>
              <h2 id="benefits-title">Seu negócio online 24 horas por dia.</h2>
              <p className="section-subtitle">
                Um site bem feito não é gasto — é investimento. Veja o que você ganha:
              </p>
            </div>

            <div className="benefits-grid">
              {benefits.map((b) => (
                <div className="benefit-card reveal" key={b.n}>
                  <div className="benefit-number">{b.n}</div>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              ))}
            </div>

            <div className="benefits-cta reveal">
              <p>
                <strong>Pronto para levar seu negócio para o próximo nível?</strong>
              </p>
              <a
                className="btn btn-primary"
                href={WA_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero meu site agora
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section className="section contact" id="contato" aria-labelledby="contact-title">
          <div className="container">
            <div className="contact-card reveal">
              <div>
                <span className="eyebrow">
                  <span className="eyebrow-dot"></span>Contato
                </span>
                <h2 id="contact-title">Vamos conversar sobre o seu projeto?</h2>
                <p>
                  Respondo rápido por e-mail ou WhatsApp. Vamos tirar sua ideia do papel.
                </p>
              </div>
              <div className="contact-actions">
                <a className="contact-email" href="mailto:devmatheuscontact@gmail.com">
                  devmatheuscontact@gmail.com
                </a>
                <a
                  className="btn btn-whatsapp"
                  href={WA_PORTFOLIO}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon />
                  (43) 99963-2817
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© {year ?? ""} Matheus Dev SaaS</span>
          <span>Todos os direitos reservados</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={WA_PORTFOLIO}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon size={24} />
      </a>
    </>
  );
}
