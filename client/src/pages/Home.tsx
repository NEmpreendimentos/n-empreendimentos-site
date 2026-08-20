/*
 * N. Empreendimentos — Midnight Conversion Lab
 * Este arquivo mantém a composição assimétrica, o verde-lima proprietário e a prioridade absoluta do CTA WhatsApp.
 */
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Layers3,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  X,
  Zap,
} from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5562998380147?text=Ol%C3%A1%2C%20quero%20conversar%20sobre%20um%20site%20profissional.";
const assetBase = import.meta.env.VITE_GITHUB_PAGES === "true"
  ? "https://nsitevendem-aqiwfnhl.manus.space/manus-storage/"
  : "/manus-storage/";
const assetUrl = (fileName: string) => `${assetBase}${fileName}`;

const benefits = [
  { icon: Palette, index: "01", title: "Design exclusivo", text: "Uma identidade digital construída para destacar o seu negócio — não mais um template igual a todos." },
  { icon: Zap, index: "02", title: "Velocidade máxima", text: "Estrutura leve, carregamento rápido e decisões técnicas que protegem a experiência de quem compra." },
  { icon: MonitorSmartphone, index: "03", title: "Feito para celular", text: "Cada detalhe pensado primeiro na tela onde a maioria das pessoas conhece a sua marca." },
  { icon: MessageCircle, index: "04", title: "Suporte próximo", text: "Você fala com quem criou o projeto. Sem labirinto de chamados, sem respostas genéricas." },
];

const projects = [
  { title: "MetaBoost", meta: "Posicionamento + captação", image: assetUrl("metaboost-real_3af6a7bc.webp"), accent: "#c8ff4a", url: "https://emagrecendocomsaude.xyz/" },
  { title: "EmpresteMais+", meta: "Conversão + confiança", image: assetUrl("emprestemais-real_21703354.webp"), accent: "#8f7cff", url: "https://emprestemais.xyz/" },
  { title: "Fonte Forte", meta: "Produto + conversão", image: assetUrl("fonteforte-portfolio_552fc49c.webp"), accent: "#f96b4a", url: "https://nempreendimentos.github.io/fonteforte-site/" },
];

const steps = [
  { number: "01", title: "Briefing / alinhamento", text: "Entendemos seu momento, público e objetivo antes de abrir qualquer ferramenta de design." },
  { number: "02", title: "Criação do design", text: "Transformamos estratégia em uma direção visual com personalidade e intenção de venda." },
  { number: "03", title: "Desenvolvimento", text: "O layout ganha vida com código limpo, responsivo, rápido e preparado para o Google." },
  { number: "04", title: "Entrega + suporte", text: "Publicamos, orientamos e permanecemos por perto para o seu próximo passo." },
];

const faqs = [
  { question: "Quanto tempo demora para ficar pronto?", answer: "Projetos de landing page costumam levar de 7 a 15 dias úteis. Sites institucionais e lojas virtuais variam conforme a quantidade de páginas, integrações e conteúdo." },
  { question: "O site é realmente meu?", answer: "Sim. O projeto, o código e os arquivos finais são seus. Você não fica preso a uma plataforma fechada nem a mensalidades obrigatórias para manter o site no ar." },
  { question: "Como funciona o pagamento?", answer: "O investimento é definido depois do alinhamento do escopo. Normalmente trabalhamos com uma entrada para iniciar e o saldo na entrega, com condições combinadas no orçamento." },
  { question: "Vocês cuidam do domínio e da hospedagem?", answer: "Posso orientar e configurar o domínio, hospedagem, SSL e ferramentas essenciais. A contratação fica no seu nome para que você mantenha o controle da operação." },
];

function Logo() {
  return <a href="#inicio" className="logo" aria-label="N. Empreendimentos, início"><span className="logo-mark"><span>N</span></span><span className="logo-text">N. Empreendimentos</span></a>;
}

function WhatsappButton({ children, secondary = false }: { children: React.ReactNode; secondary?: boolean }) {
  return <a className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={17} />{children}<ArrowUpRight size={17} /></a>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", business: "", service: "Landing Page", message: "" });
  const portfolioDrag = useRef({ active: false, startX: 0, startScroll: 0 });
  const closeMenu = () => setMenuOpen(false);

  const startPortfolioDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    portfolioDrag.current = { active: true, startX: event.clientX, startScroll: event.currentTarget.scrollLeft };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  };

  const movePortfolioDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!portfolioDrag.current.active) return;
    event.currentTarget.scrollLeft = portfolioDrag.current.startScroll - (event.clientX - portfolioDrag.current.startX);
  };

  const endPortfolioDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    portfolioDrag.current.active = false;
    event.currentTarget.classList.remove("is-dragging");
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const whatsappMessage = [
      "Olá, N. Empreendimentos! Quero conversar sobre um projeto.",
      `Nome: ${formData.name}`,
      `Negócio: ${formData.business || "Não informado"}`,
      `Serviço: ${formData.service}`,
      `Mensagem: ${formData.message || "Gostaria de receber mais informações."}`,
    ].join("\\n");
    window.open(`https://wa.me/5562998380147?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".scroll-reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
            <a href="#beneficios" onClick={closeMenu}>Benefícios</a>
            <a href="#portfolio" onClick={closeMenu}>Portfólio</a>
            <a href="#processo" onClick={closeMenu}>Processo</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
            <WhatsappButton>Fazer orçamento</WhatsappButton>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="hero section-pad" style={{ "--hero-image": `url("${assetUrl("n-hero-neon_07eb8b40.png")}")` } as React.CSSProperties}>
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow"><span className="eyebrow-dot" /> N/ estúdio digital independente</div>
              <h1>Seu site não precisa só parecer <em>bonito.</em></h1>
              <p className="hero-lede">Ele precisa fazer seu negócio parecer a escolha certa. Eu crio experiências digitais rápidas, encontráveis no Google e desenhadas para transformar atenção em conversa.</p>
              <div className="hero-actions"><WhatsappButton>Quero um site profissional</WhatsappButton><a className="text-link" href="#portfolio">Ver projetos <ArrowDownRight size={17} /></a></div>
              <div className="hero-proof"><div className="proof-item"><strong>01</strong><span>estratégia antes<br />do pixel</span></div><div className="proof-divider" /><div className="proof-item"><strong>100%</strong><span>feito sob medida<br />para sua marca</span></div></div>
            </div>
            <div className="hero-visual reveal reveal-delay">
              <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
              <div className="hero-card browser-card"><div className="browser-top"><span className="browser-dots"><i /><i /><i /></span><span className="browser-url">n-empreendimentos.com</span><span className="browser-status"><span /> live</span></div><div className="browser-content"><div className="mini-label">N/ digital presence</div><div className="mini-title">Clareza para<br /><span>vender melhor.</span></div><div className="mini-line" /><div className="mini-row"><span className="mini-pill" /><span className="mini-pill short" /><span className="mini-pill blue" /></div><div className="mini-chart"><div className="chart-bar bar-a" /><div className="chart-bar bar-b" /><div className="chart-bar bar-c" /><div className="chart-line" /></div></div></div>
              <div className="float-tag tag-top"><Sparkles size={15} /><span>design com intenção</span></div><div className="float-tag tag-bottom"><span className="pulse-dot" /> disponível para novos projetos</div>
            </div>
          </div>
          <div className="scroll-cue"><span>scroll para explorar</span><div className="scroll-line" /></div>
        </section>

        <section id="beneficios" className="section-pad benefits-section scroll-reveal">
          <div className="container"><div className="section-intro split-intro"><div><span className="section-index">N/ 01 — por que comigo</span><h2>Design bom chama atenção.<br /><span>Design estratégico</span> move.</h2></div><p>Do primeiro wireframe ao último detalhe no celular, cada escolha tem um motivo: tornar seu negócio mais claro, desejável e fácil de escolher.</p></div><div className="benefit-grid">{benefits.map(({ icon: Icon, index, title, text }) => <article className="benefit-card scroll-reveal" key={title}><div className="card-topline"><span>{index}</span><Icon size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={19} /></article>)}</div></div>
        </section>

        <section id="portfolio" className="section-pad portfolio-section scroll-reveal">
          <div className="container"><div className="section-intro"><span className="section-index">N/ 02 — meu portfólio</span><h2>Projetos que sabem<br /><span>onde querem chegar.</span></h2><p>Arraste para o lado e explore alguns dos sites que criei para tornar cada negócio mais claro, relevante e pronto para converter interesse em contato.</p></div><div className="project-list" role="region" aria-label="Carrossel de portfólio" onPointerDown={startPortfolioDrag} onPointerMove={movePortfolioDrag} onPointerUp={endPortfolioDrag} onPointerCancel={endPortfolioDrag}>{projects.map((project, idx) => <article className={`project-card project-${idx + 1} scroll-reveal`} key={project.title}><div className="project-info"><span className="project-counter" style={{ color: project.accent }}>{String(idx + 1).padStart(2, "0")}</span><h3>{project.title}</h3><p>{project.meta}</p><div className="project-actions"><a href={project.url} target="_blank" rel="noreferrer" className="project-link project-site-link">Ver site <ArrowUpRight size={16} /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="project-link">Quero algo assim <ArrowUpRight size={16} /></a></div></div><div className="project-image-wrap"><img src={project.image} alt={`Mockup de ${project.title}`} draggable={false} /><div className="image-shade" /></div></article>)}</div><div className="portfolio-drag-hint" aria-hidden="true"><span>Arraste para explorar</span><i /></div></div>
        </section>

        <section id="processo" className="section-pad process-section scroll-reveal"><div className="container process-layout"><div className="process-sticky"><span className="section-index">N/ 03 — o caminho</span><h2>Do “preciso de um site” ao <span>“agora faz sentido.”</span></h2><p>Um processo enxuto, transparente e sem palavras difíceis para você acompanhar o projeto com segurança.</p><WhatsappButton secondary>Falar sobre meu projeto</WhatsappButton></div><div className="steps-list">{steps.map((step, idx) => <div className="step" key={step.number}><div className="step-marker"><span>{step.number}</span>{idx < steps.length - 1 && <i />}</div><div><h3>{step.title}</h3><p>{step.text}</p></div></div>)}</div></div></section>

        <section className="section-pad proof-section scroll-reveal"><div className="container proof-layout"><div><span className="section-index">N/ 04 — prova social</span><h2>Projetos reais.<br /><span>Resultados que ficam.</span></h2></div><div className="proof-note"><ShieldCheck size={20} /><p>Alguns trabalhos desenvolvidos pela N. Empreendimentos, com textos publicados nas próprias páginas dos projetos.</p></div></div><div className="container testimonial-placeholders"><article className="testimonial-placeholder case-card"><div className="case-card-top"><span className="case-brand">M</span><span className="case-label">MetaBoost · case real</span></div><blockquote>Landing page de saúde com narrativa clara, autoridade visual e caminhos de conversão pensados para agendamento.</blockquote><div className="case-result"><strong>Landing page</strong><span>estratégia + conversão</span></div></article><article className="testimonial-placeholder active-placeholder case-card"><div className="case-card-top"><span className="case-brand empreste-brand">E+</span><span className="case-label">EmpresteMais+ · case real</span></div><blockquote>Site de crédito com planos organizados, comunicação direta e uma jornada simples do primeiro clique à simulação.</blockquote><div className="case-result"><strong>Site comercial</strong><span>clareza + confiança</span></div></article><article className="testimonial-placeholder case-card"><div className="case-card-top"><span className="case-brand" style={{ background: "#f96b4a" }}>FF</span><span className="case-label">Fonte Forte · case real</span></div><blockquote>Página de produto com apresentação direta, visual marcante e foco em guiar o visitante até a próxima ação.</blockquote><div className="case-result"><strong>Site de produto</strong><span>presença + conversão</span></div></article></div></section>

        <section id="faq" className="section-pad faq-section scroll-reveal"><div className="container faq-layout"><div className="faq-heading"><span className="section-index">N/ 05 — perguntas frequentes</span><h2>Antes de começar,<br /><span>vamos deixar claro.</span></h2><p>Se a sua dúvida não apareceu aqui, me chama no WhatsApp. Eu respondo sem rodeios.</p><WhatsappButton secondary>Tirar uma dúvida</WhatsappButton></div><div className="faq-list">{faqs.map((faq, index) => <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={faq.question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span>{faq.question}</span><ChevronDown size={19} /></button><div className="faq-answer"><p>{faq.answer}</p></div></div>)}</div></div></section>

        <section className="cta-section scroll-reveal"><div className="cta-grid" /><div className="container cta-inner"><div className="cta-copy"><span className="section-index">N/ pronto para o próximo nível?</span><h2>Seu negócio já tem história.<br /><span>Agora ele precisa de presença.</span></h2><p>Preencha o formulário. Eu recebo tudo organizado no WhatsApp e retorno para entender o melhor caminho.</p></div><form className="contact-form" onSubmit={handleContactSubmit}><div className="form-row"><label>Seu nome<input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Como posso te chamar?" /></label><label>Seu negócio<input value={formData.business} onChange={(event) => setFormData({ ...formData, business: event.target.value })} placeholder="Nome da empresa" /></label></div><label>O que você precisa?<select value={formData.service} onChange={(event) => setFormData({ ...formData, service: event.target.value })}><option>Landing Page</option><option>Site Institucional</option><option>Loja Virtual</option><option>Outro projeto</option></select></label><label>Conte um pouco sobre o projeto<textarea value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="Objetivo, prazo ou qualquer contexto importante..." rows={3} /></label><button className="form-submit" type="submit"><MessageCircle size={17} /> Enviar pelo WhatsApp <ArrowUpRight size={17} /></button></form></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><Logo /><p>Estratégia, design e código para negócios que querem ser escolhidos.</p><a className="footer-contact" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={15} /> (62) 99838-0147</a></div><div className="container footer-bottom"><span>© 2023 N. Empreendimentos. Feito para mover ideias.</span><span>São Paulo · Brasil</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={14} /></a></div></footer>
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar pelo WhatsApp"><MessageCircle size={21} /></a>
    </div>
  );
}
