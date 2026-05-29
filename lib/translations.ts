export type Lang = "pt" | "en"

export const translations = {
  nav: {
    pt: {
      items: [
        { label: "Sobre", href: "#about" },
        { label: "Servicos", href: "#servicos" },
        { label: "Resultados", href: "#resultados" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Cases", href: "#cases" },
        { label: "Experiencia", href: "#experience" },
        { label: "Contato", href: "#contact" },
      ],
      cta: "Contato",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
    },
    en: {
      items: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#servicos" },
        { label: "Results", href: "#resultados" },
        { label: "Dashboard", href: "#dashboard" },
        { label: "Cases", href: "#cases" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
      ],
      cta: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
  },
  hero: {
    pt: {
      tag: "Marketing Manager | Growth & Paid Media para SaaS B2B",
      name: "Antonio Kiepert",
      headline: "Construo motores de crescimento que geram pipeline e receita real.",
      description1start: "Foco em ",
      description1highlight: "Growth, Paid Media e Automacao",
      description1end:
        " para SaaS & B2B. Cuido da operacao de marketing de ponta a ponta na SlabWare (startup-stage SaaS, EUA + Brasil) — da geracao de demanda ao product-led growth, com execucao orientada por dados.",
      description2start: "Diferencial: tambem ",
      description2link: "construo as ferramentas",
      description2end:
        " que rodo (React, TypeScript, Supabase, n8n). Bilingue PT/EN.",
      metrics: [
        { suffix: "K+", label: "Impressoes (31 dias)" },
        { suffix: "K+", label: "Cliques (31 dias)" },
        { suffix: "", label: "Demos qualificadas" },
      ],
      ctaPrimary: "Ver resultados",
      ctaSecondary: "Fale comigo",
      downloadCv: "Baixar CV",
      downloadCvDev: "Baixar CV Dev",
    },
    en: {
      tag: "Marketing Manager | Growth & Paid Media for B2B SaaS",
      name: "Antonio Kiepert",
      headline: "I build growth engines that generate pipeline and real revenue.",
      description1start: "Focused on ",
      description1highlight: "Growth, Paid Media & Automation",
      description1end:
        " for SaaS & B2B. I run end-to-end marketing at SlabWare (startup-stage SaaS, US + Brazil) — from demand generation to product-led growth, with data-driven execution.",
      description2start: "Edge: I also ",
      description2link: "build the tools",
      description2end:
        " I run (React, TypeScript, Supabase, n8n). Bilingual EN/PT.",
      metrics: [
        { suffix: "K+", label: "Impressions (31 days)" },
        { suffix: "K+", label: "Clicks (31 days)" },
        { suffix: "", label: "Qualified demos" },
      ],
      ctaPrimary: "See results",
      ctaSecondary: "Get in touch",
      downloadCv: "Download CV",
      downloadCvDev: "Download Dev CV",
    },
  },
  about: {
    pt: {
      sectionNumber: "01.",
      sectionTitle: "Sobre Mim",
      paragraphs: [
        {
          before: "Sou um ",
          highlight: "Marketing Manager",
          after:
            " que opera na intersecao entre estrategia, execucao e automacao. Não apenas rodo campanhas. Eu ",
          highlight2: "projeto sistemas",
          after2:
            " que conectam marketing, produto e vendas para gerar resultado previsivel.",
        },
        {
          before: "Na SlabWare, reestruturei toda a operacao de Paid Media (Meta + Reddit). Snapshot ao vivo de 31 dias: ",
          highlight: "CTR 3.82% e CPC de R$ 0,78",
          after:
            " (acima do benchmark B2B SaaS), 58 demos qualificadas a R$ 83/CPA. Implementei o Zoho CRM como stack de vendas e marketing e desenhei o funil completo: da geracao de demanda ate automacoes de onboarding e retencao.",
        },
        {
          before: "Trago uma ",
          highlight: "mentalidade global",
          after:
            ": ingles fluente (parte da formacao escolar nos EUA) e experiencia ativa rodando campanhas para mercados americano e brasileiro em paralelo.",
        },
        {
          before:
            "Como diferencial, uso tecnologia para construir as ferramentas internas que opero (controle de producao, minerador de leads e disparador de email integrado ao CRM) usando React, TypeScript, Supabase e n8n. Operacao tecnica + estrategia de marketing na mesma cabeca.",
        },
      ],
      competencias: [
        {
          area: "Growth & Demand Gen",
          items: ["Free Trials", "Pipeline Generation", "Revenue-Driven Campaigns"],
        },
        {
          area: "Paid Media",
          items: ["Meta Ads", "Google Ads", "YouTube Ads", "A/B Testing"],
        },
        {
          area: "Automacao & CRM",
          items: ["Zoho CRM", "n8n", "Lead Scoring", "Lifecycle Marketing", "Email Sequences"],
        },
        {
          area: "Criativo & Conteudo",
          items: ["Video Production", "After Effects", "AI Creative", "Copywriting"],
        },
      ],
    },
    en: {
      sectionNumber: "01.",
      sectionTitle: "About Me",
      paragraphs: [
        {
          before: "I'm a ",
          highlight: "Marketing Manager",
          after:
            " who operates at the intersection of strategy, execution and automation. I don't just run campaigns. I ",
          highlight2: "design systems",
          after2:
            " that connect marketing, product and sales to drive predictable results.",
        },
        {
          before:
            "At SlabWare, I restructured the entire Paid Media operation (Meta + Reddit). Live 31-day snapshot: ",
          highlight: "3.82% CTR and R$ 0.78 CPC",
          after:
            " (above B2B SaaS benchmark), 58 qualified demos at R$ 83/CPA. Implemented Zoho CRM as the sales and marketing stack and designed the complete funnel: from demand generation to onboarding and retention automations.",
        },
        {
          before: "I bring a ",
          highlight: "global mindset",
          after:
            ": fluent English (partly schooled in the US) and active experience running campaigns for both American and Brazilian markets in parallel.",
        },
        {
          before:
            "As a differentiator, I use technology to build the internal tools I operate (production control, lead miner and CRM-integrated email dispatcher) using React, TypeScript, Supabase and n8n. Technical execution + marketing strategy in the same head.",
        },
      ],
      competencias: [
        {
          area: "Growth & Demand Gen",
          items: ["Free Trials", "Pipeline Generation", "Revenue-Driven Campaigns"],
        },
        {
          area: "Paid Media",
          items: ["Meta Ads", "Google Ads", "YouTube Ads", "A/B Testing"],
        },
        {
          area: "Automation & CRM",
          items: ["Zoho CRM", "n8n", "Lead Scoring", "Lifecycle Marketing", "Email Sequences"],
        },
        {
          area: "Creative & Content",
          items: ["Video Production", "After Effects", "AI Creative", "Copywriting"],
        },
      ],
    },
  },
  services: {
    pt: {
      sectionNumber: "02.",
      sectionTitle: "O Que Eu Faco",
      subtitle: "Competencias e servicos que ofereco para acelerar o crescimento da sua empresa.",
      items: [
        {
          title: "Growth Strategy & Demand Gen",
          description: "Estrategia de crescimento orientada por dados: funis de aquisicao, free trials, pipeline generation e revenue marketing para SaaS & B2B.",
        },
        {
          title: "Paid Media & Performance",
          description: "Gestao completa de Meta Ads, Google Ads e YouTube Ads com foco em ROI. A/B testing sistematico, otimizacao de audiencias e criativos data-driven.",
        },
        {
          title: "Marketing Automation & CRM",
          description: "Implementacao de CRM (Zoho), automacoes com n8n, lifecycle marketing, lead scoring, email sequences e workflows de retencao e onboarding.",
        },
        {
          title: "Producao Criativa & Video",
          description: "Pipeline de producao de video com After Effects, Premiere, IA e ElevenLabs. Criativos de conversao em escala para campanhas de ads.",
        },
        {
          title: "Ferramentas Internas & Automacao",
          description: "Construcao de sistemas internos com React, TypeScript e Supabase: dashboards de producao, mineradores de leads, disparadores de email e integracao com CRM.",
        },
        {
          title: "Onboarding & Retencao",
          description: "Redesenho de fluxos de onboarding para SaaS, melhoria de ativacao e reducao de churn com lifecycle marketing automatizado e customer success.",
        },
      ],
    },
    en: {
      sectionNumber: "02.",
      sectionTitle: "What I Do",
      subtitle: "Competencies and services I offer to accelerate your company's growth.",
      items: [
        {
          title: "Growth Strategy & Demand Gen",
          description: "Data-driven growth strategy: acquisition funnels, free trials, pipeline generation and revenue marketing for SaaS & B2B.",
        },
        {
          title: "Paid Media & Performance",
          description: "Full management of Meta Ads, Google Ads and YouTube Ads focused on ROI. Systematic A/B testing, audience optimization and data-driven creatives.",
        },
        {
          title: "Marketing Automation & CRM",
          description: "CRM implementation (Zoho), n8n automations, lifecycle marketing, lead scoring, email sequences and retention/onboarding workflows.",
        },
        {
          title: "Creative Production & Video",
          description: "Video production pipeline with After Effects, Premiere, AI and ElevenLabs. Conversion creatives at scale for ad campaigns.",
        },
        {
          title: "Internal Tools & Automation",
          description: "Building internal systems with React, TypeScript and Supabase: production dashboards, lead miners, email dispatchers and CRM integration.",
        },
        {
          title: "Onboarding & Retention",
          description: "SaaS onboarding flow redesign, activation improvement and churn reduction with automated lifecycle marketing and customer success.",
        },
      ],
    },
  },
  results: {
    pt: {
      sectionNumber: "03.",
      sectionTitle: "Resultados",
      subtitle:
        "Numeros reais da campanha ativa de Meta Ads na SlabWare (28/04 a 28/05, 31 dias). Dados extraidos do dashboard unificado GA4 + Meta Ads.",
      items: [
        {
          metric: { end: 225673, suffix: "" },
          title: "Impressoes em 31 dias",
          description:
            "Volume de impressoes geradas no periodo via Meta Ads (BR feed + Reddit) para o mercado SaaS B2B SlabWare.",
        },
        {
          metric: { end: 8612, suffix: "" },
          title: "Cliques no funil",
          description:
            "Cliques gerados pelas campanhas no mesmo periodo. Click-through-rate (CTR) de 3.82%, bem acima da media de B2B SaaS.",
        },
        {
          metric: { text: "3.82%" },
          title: "CTR Meta Ads",
          description:
            "Click-through-rate de 3,82% nas campanhas de Meta Ads. Indicador direto de qualidade do criativo + segmentacao.",
        },
        {
          metric: { text: "R$ 0,78" },
          title: "CPC otimizado",
          description:
            "Custo por clique medio de R$ 0,78 no Meta Ads, resultado de otimizacao continua de audiencia, criativos e bid strategy.",
        },
        {
          metric: { text: "R$ 83" },
          title: "CPA / Conversoes",
          description:
            "58 conversoes no periodo com CPA medio de R$ 83. Funil: Meta + Reddit Ads → landing → Calendly demo qualificada.",
        },
        {
          metric: { text: "1.82x" },
          title: "ROAS unificado (em escala)",
          description:
            "ROAS 1.82x cross-channel via GA4 (paid + organic + outbound) em fase de escala da operacao. Investimento de R$ 4.792 nos 31 dias, com plano de chegar a 3x conforme aumentamos LTV via onboarding + retencao.",
        },
      ],
    },
    en: {
      sectionNumber: "03.",
      sectionTitle: "Results",
      subtitle:
        "Live numbers from the active Meta Ads campaign at SlabWare (Apr 28 to May 28, 31 days). Data pulled from the unified GA4 + Meta Ads dashboard.",
      items: [
        {
          metric: { end: 225673, suffix: "" },
          title: "Impressions in 31 days",
          description:
            "Impression volume generated in the period via Meta Ads (BR feed + Reddit) for SlabWare's B2B SaaS market.",
        },
        {
          metric: { end: 8612, suffix: "" },
          title: "Clicks in the funnel",
          description:
            "Clicks generated by the campaigns in the same period. Click-through-rate (CTR) of 3.82%, well above B2B SaaS average.",
        },
        {
          metric: { text: "3.82%" },
          title: "Meta Ads CTR",
          description:
            "3.82% click-through-rate on Meta Ads campaigns. Direct indicator of creative quality + audience targeting.",
        },
        {
          metric: { text: "R$ 0.78" },
          title: "Optimized CPC",
          description:
            "Average cost per click of R$ 0.78 on Meta Ads, the result of continuous optimization on audience, creative and bid strategy.",
        },
        {
          metric: { text: "R$ 83" },
          title: "CPA / Conversions",
          description:
            "58 conversions in the period with avg CPA of R$ 83. Funnel: Meta + Reddit Ads → landing → qualified Calendly demo.",
        },
        {
          metric: { text: "1.82x" },
          title: "Unified ROAS (in scale-up)",
          description:
            "1.82x cross-channel ROAS via GA4 (paid + organic + outbound) during scale-up phase. Spend of R$ 4,792 over 31 days, with a path to 3x as we lift LTV via onboarding + retention.",
        },
      ],
    },
  },
  projects: {
    pt: {
      sectionNumber: "05.",
      sectionTitle: "Cases & Projetos",
      subtitle:
        "Campanhas, estrategias e sistemas que construi e liderei, combinando visao de marketing com execucao tecnica.",
      items: [
        {
          tag: "Paid Media",
          title: "Meta Ads na SlabWare: 31 dias rodando",
          description:
            "Reestruturei a operacao de Meta Ads da SlabWare combinando criativos data-driven, testes A/B sistematicos e segmentacao de alta intencao. Em 31 dias de operacao: R$ 4.792 investidos, 225.673 impressoes, 8.612 cliques, CTR de 3.82%, CPC de R$ 0,78, 58 conversoes e CPA de R$ 83. ROAS unificado de 1.82x considerando atribuicao cross-channel via GA4.",
          highlights: ["Meta Ads", "Google Ads", "A/B Testing", "GA4", "Funnel Attribution"],
          result: "CTR 3.82% | CPC R$ 0,78 | CPA R$ 83",
          url: "https://slabware.com",
        },
        {
          tag: "Funnel & Landing",
          title: "Funil SlabWare: Meta + Reddit Ads → Calendly",
          description:
            "Desenhei e implementei o funil completo da SlabWare: anuncios em Meta Ads e Reddit Ads direcionam para a landing page principal (slabware.com), que converte em agendamento de demo via Calendly. Mudanca chave: substituimos o Free Trial direto pelo agendamento qualificado, aumentando significativamente a qualidade dos leads que chegam ao time comercial.",
          highlights: ["Meta Ads", "Reddit Ads", "Landing Page", "Calendly", "Lead Qualification"],
          result: "Lead quality significativamente maior",
          url: "https://slabware.com",
        },
        {
          tag: "Lead Gen Tool",
          title: "Bouzr: Plataforma propria de Lead Mining (live)",
          description:
            "Projeto pessoal no ar em early access: plataforma de mineracao de leads B2B que tambem alimenta o pipeline outbound da SlabWare. O minerador captura leads via APIs publicas (Google Places, Hunter.io), enriquece com dados de empresa e dispara sequencias de email integradas ao Zoho CRM. Pipeline outbound + Meta Ads + Reddit Ads compoem a estrategia full-funnel.",
          highlights: ["Lead Mining", "Outbound Ops", "Zoho CRM", "API Integration", "Email Automation"],
          result: "Live · pipeline outbound automatizado",
          url: "https://bouzr.com",
        },
        {
          tag: "E-commerce & Ads",
          title: "Arara Silk: Site, ADS e operacao completa",
          description:
            "Construi o ararasilk.com.br do zero (site, identidade, e-commerce) e rodei a operacao de Meta Ads e Google Ads para o negocio. Como co-fundador, ownei todo o funil de aquisicao (do criativo ao checkout), aplicando o mesmo playbook de performance que uso em SaaS B2B.",
          highlights: ["Meta Ads", "Google Ads", "E-commerce", "Web Dev", "Brand"],
          result: "Negocio proprio gerenciado end-to-end",
          url: "https://www.ararasilk.com.br",
        },
        {
          tag: "CRM & Sales",
          title: "Zoho CRM completo: APIs + Integracoes nativas",
          description:
            "Implementei o Zoho CRM como stack completa de vendas e marketing na SlabWare. Configurei pipelines, automacoes de lead management, dashboards comerciais e integracoes diretas via API com o produto SaaS. Leads de ads, free trial e outbound entram no CRM com lead scoring automatico e roteamento.",
          highlights: ["Zoho CRM", "API Integration", "Pipeline Setup", "Lead Scoring", "Sales Automation"],
          result: "Stack comercial integrada via API",
          url: "https://slabware.com",
        },
        {
          tag: "Marketing Ops",
          title: "Stack tecnica: React, TypeScript, n8n, Supabase",
          description:
            "Diferencial unico: alem de Media Buyer, sou hands-on em codigo. Construo dashboards internos, automacoes n8n e integracoes API com React, TypeScript, Supabase. Isso significa que nao dependo de dev pra subir uma landing, testar um pixel, ajustar um webhook ou integrar uma plataforma nova. Executo a operacao tecnica e a estrategia juntas.",
          highlights: ["React", "TypeScript", "n8n", "Supabase", "API"],
          result: "Media Buyer + Tech operator",
        },
      ],
    },
    en: {
      sectionNumber: "05.",
      sectionTitle: "Cases & Projects",
      subtitle:
        "Campaigns, strategies and systems I built and led, combining marketing vision with technical execution.",
      items: [
        {
          tag: "Paid Media",
          title: "SlabWare Meta Ads: live 31-day campaign",
          description:
            "Restructured SlabWare's Meta Ads operation combining data-driven creatives, systematic A/B testing and high-intent segmentation. Last 31 days: R$ 4,792 spend, 225,673 impressions, 8,612 clicks, 3.82% CTR, R$ 0.78 CPC, 58 conversions and R$ 83 CPA. Unified ROAS of 1.82x considering cross-channel attribution via GA4.",
          highlights: ["Meta Ads", "Google Ads", "A/B Testing", "GA4", "Funnel Attribution"],
          result: "3.82% CTR | R$ 0.78 CPC | R$ 83 CPA",
          url: "https://slabware.com",
        },
        {
          tag: "Funnel & Landing",
          title: "SlabWare Funnel: Meta + Reddit Ads → Calendly",
          description:
            "Designed and shipped SlabWare's full funnel: Meta Ads and Reddit Ads drive traffic to the main landing page (slabware.com), which converts into a Calendly demo booking. Key shift: we replaced the direct Free Trial with a qualified demo booking, significantly improving the quality of leads reaching the sales team.",
          highlights: ["Meta Ads", "Reddit Ads", "Landing Page", "Calendly", "Lead Qualification"],
          result: "Significantly higher lead quality",
          url: "https://slabware.com",
        },
        {
          tag: "Lead Gen Tool",
          title: "Bouzr: my own B2B lead mining platform (live)",
          description:
            "Personal project live in early access: a B2B lead mining platform that also feeds SlabWare's outbound pipeline. The miner pulls leads via public APIs (Google Places, Hunter.io), enriches with company data and triggers email sequences integrated with Zoho CRM. Outbound pipeline + Meta Ads + Reddit Ads compose the full-funnel strategy.",
          highlights: ["Lead Mining", "Outbound Ops", "Zoho CRM", "API Integration", "Email Automation"],
          result: "Live · automated outbound pipeline",
          url: "https://bouzr.com",
        },
        {
          tag: "E-commerce & Ads",
          title: "Arara Silk: Site, ads and full operation",
          description:
            "Built ararasilk.com.br from scratch (site, brand, e-commerce) and ran Meta Ads + Google Ads for the business. As co-founder, owned the entire acquisition funnel (from creative to checkout), applying the same performance playbook I use for B2B SaaS.",
          highlights: ["Meta Ads", "Google Ads", "E-commerce", "Web Dev", "Brand"],
          result: "Own business managed end-to-end",
          url: "https://www.ararasilk.com.br",
        },
        {
          tag: "CRM & Sales",
          title: "Full Zoho CRM: APIs + native integrations",
          description:
            "Implemented Zoho CRM as the complete sales and marketing stack at SlabWare. Configured pipelines, lead management automations, sales dashboards and direct API integrations with the SaaS product itself. Leads from ads, free trial and outbound land in the CRM with auto lead scoring and routing.",
          highlights: ["Zoho CRM", "API Integration", "Pipeline Setup", "Lead Scoring", "Sales Automation"],
          result: "Sales stack integrated via API",
          url: "https://slabware.com",
        },
        {
          tag: "Marketing Ops",
          title: "Tech stack: React, TypeScript, n8n, Supabase",
          description:
            "Unique edge: beyond Media Buyer, I'm hands-on in code. I build internal dashboards, n8n automations and API integrations with React, TypeScript and Supabase. That means I don't wait on a dev to ship a landing page, debug a pixel, fix a webhook or wire up a new platform. I run the technical operation and the strategy together.",
          highlights: ["React", "TypeScript", "n8n", "Supabase", "API"],
          result: "Media Buyer + Tech operator",
        },
      ],
    },
  },
  experience: {
    pt: {
      sectionNumber: "06.",
      sectionTitle: "Experiencia",
      items: [
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Mkt)",
          title: "Marketing Manager",
          period: "Mai 2025 → Presente",
          url: "https://slabware.com",
          description: "SaaS para a industria da pedra | Mercados EUA & Brasil",
          bullets: [
            "Lidero operacoes de marketing de ponta a ponta: demanda, paid media, automacao, onboarding e product-led growth.",
            "Reestruturei a estrategia de Paid Media (Meta + Reddit + Google) alcancando CTR 3.82% e CPC R$ 0,78 (acima do benchmark B2B SaaS), com 58 demos qualificadas a R$ 83/CPA em snapshot de 31 dias.",
            "Implementei o Zoho CRM como stack completa de vendas e marketing, configurando pipelines, automacoes e dashboards.",
            "Desenhei o funil completo de Free Trial: da aquisicao ao onboarding automatizado e retencao.",
            "Construi workflows de automacao com n8n para lifecycle marketing, lead scoring e customer success.",
            "Criei sistema de mineracao de leads e disparador de emails integrado ao CRM para a equipe comercial.",
            "Desenvolvi dashboard de controle de producao da equipe usando React, TypeScript e Supabase.",
          ],
        },
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Video)",
          title: "Video Editor & Motion Designer",
          period: "Set 2024 → Jul 2025",
          url: "https://slabware.com",
          description: "Producao criativa para ads e onboarding",
          bullets: [
            "Produzi conteudo em video focado em conversao usando After Effects, Premiere e ferramentas de IA.",
            "Criei campanhas combinando roteiros por IA, voice-over ElevenLabs e motion design para Meta e Google Ads.",
            "Desenvolvi tutoriais e walkthroughs do produto para suporte ao onboarding.",
          ],
        },
        {
          company: "Autonomo",
          tabLabel: "Freelancer",
          title: "Freelancer: Design Grafico",
          period: "Jan 2020 → Nov 2022",
          url: "#",
          description: "Projetos de design e marketing digital",
          bullets: [
            "Prestei servicos de design grafico usando Adobe Suite e CorelDRAW.",
            "Apoiei empresas com design, identidade visual e marketing digital.",
          ],
        },
        {
          company: "Distribuidora de Racao",
          tabLabel: "Distribuidora",
          title: "Coordenador de Marketing",
          period: "2019 → 2022",
          url: "#",
          description: "Distribuidora de racao animal | Marketing do zero",
          bullets: [
            "Criei e implementei toda a operacao de marketing da empresa do zero, incluindo identidade visual e posicionamento.",
            "Desenvolvi o site institucional e implementei o sistema de e-commerce integrado.",
            "Implementei o e-commerce que faturou R$ 40 mil nos primeiros 5 meses de operacao atraves de vendas online.",
            "Estruturei a presenca digital da marca com estrategias de SEO, redes sociais e campanhas pagas.",
            "Coordenei a producao de conteudo e materiais de comunicacao para canais online e offline.",
            "Gerenciei o relacionamento com fornecedores de servicos de marketing e tecnologia.",
          ],
        },
        {
          company: "Arara Silk",
          tabLabel: "Arara Silk",
          title: "Co-fundador & Proprietario",
          period: "Jan 2023 → Dez 2025",
          url: "#",
          description: "Negocio de estamparia textil",
          bullets: [
            "Co-fundei e gerenciei negocio de impressao textil, cuidando de operacoes, design e relacionamento com clientes.",
            "Apliquei design grafico e marketing digital para crescer a marca e base de clientes.",
          ],
        },
        {
          company: "Icone Sports",
          tabLabel: "Icone Sports",
          title: "Desenhista Tecnico",
          period: "Nov 2022 → Ago 2024",
          url: "#",
          description: "Artes graficas para sublimacao textil",
          bullets: [
            "Especialista em sublimacao textil e vetorizacao, transformando conceitos criativos em designs de alta qualidade.",
            "Trabalho com CorelDRAW e Adobe Suite para producao de artes para a marca.",
          ],
        },
      ],
    },
    en: {
      sectionNumber: "06.",
      sectionTitle: "Experience",
      items: [
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Mkt)",
          title: "Marketing Manager",
          period: "May 2025 → Present",
          url: "https://slabware.com",
          description: "SaaS for the stone industry | US & Brazil markets",
          bullets: [
            "Lead end-to-end marketing operations: demand gen, paid media, automation, onboarding and product-led growth.",
            "Restructured the Paid Media strategy (Meta + Reddit + Google) achieving 3.82% CTR and R$ 0.78 CPC (above B2B SaaS benchmark), with 58 qualified demos at R$ 83/CPA in a 31-day snapshot.",
            "Implemented Zoho CRM as the complete sales and marketing stack, configuring pipelines, automations and dashboards.",
            "Designed the complete Free Trial funnel: from acquisition to automated onboarding and retention.",
            "Built automation workflows with n8n for lifecycle marketing, lead scoring and customer success.",
            "Created a lead mining system and email dispatcher integrated with CRM for the sales team.",
            "Developed a team production control dashboard using React, TypeScript and Supabase.",
          ],
        },
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Video)",
          title: "Video Editor & Motion Designer",
          period: "Sep 2024 → Jul 2025",
          url: "https://slabware.com",
          description: "Creative production for ads and onboarding",
          bullets: [
            "Produced conversion-focused video content using After Effects, Premiere and AI tools.",
            "Created campaigns combining AI scripts, ElevenLabs voice-over and motion design for Meta and Google Ads.",
            "Developed product tutorials and walkthroughs to support onboarding.",
          ],
        },
        {
          company: "Self-employed",
          tabLabel: "Freelance",
          title: "Freelance Graphic Designer",
          period: "Jan 2020 → Nov 2022",
          url: "#",
          description: "Design and digital marketing projects",
          bullets: [
            "Provided graphic design services using Adobe Suite and CorelDRAW.",
            "Supported companies with design, visual identity and digital marketing.",
          ],
        },
        {
          company: "Feed Distributor",
          tabLabel: "Feed Dist.",
          title: "Marketing Coordinator",
          period: "2019 → 2022",
          url: "#",
          description: "Animal feed distributor | Marketing from scratch",
          bullets: [
            "Created and implemented the entire marketing operation from scratch, including brand identity and positioning.",
            "Developed the institutional website and implemented the integrated e-commerce system.",
            "Implemented the e-commerce system which generated R$ 40k in revenue within the first 5 months of online operations.",
            "Structured the brand's digital presence with SEO strategies, social media and paid campaigns.",
            "Coordinated content production and communication materials for online and offline channels.",
            "Managed relationships with marketing and technology service providers.",
          ],
        },
        {
          company: "Arara Silk",
          tabLabel: "Arara Silk",
          title: "Co-founder & Owner",
          period: "Jan 2023 → Dec 2025",
          url: "#",
          description: "Textile printing business",
          bullets: [
            "Co-founded and managed a textile printing business, handling operations, design and client relationships.",
            "Applied graphic design and digital marketing to grow the brand and customer base.",
          ],
        },
        {
          company: "Icone Sports",
          tabLabel: "Icone Sports",
          title: "Technical Designer",
          period: "Nov 2022 → Aug 2024",
          url: "#",
          description: "Graphic arts for textile sublimation",
          bullets: [
            "Textile sublimation and vectorization specialist, turning creative concepts into high-quality designs.",
            "Worked with CorelDRAW and Adobe Suite for brand art production.",
          ],
        },
      ],
    },
  },
  contact: {
    pt: {
      sectionNumber: "07.",
      sectionLabel: "E agora?",
      title: "Vamos Conversar",
      description:
        "Estou aberto a novas oportunidades como Marketing Manager & Growth em empresas SaaS & B2B. Se voce busca alguem que une visao estrategica, execucao hands-on e automacao pra escalar resultados, entre em contato.",
      formName: "Seu nome",
      formEmail: "Seu email",
      formMessage: "Sua mensagem",
      formSend: "Enviar mensagem",
      formSending: "Enviando...",
      formSuccess: "Mensagem enviada! Retorno em breve.",
      downloadCv: "Baixar meu CV",
      orReach: "Ou fale diretamente:",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
    },
    en: {
      sectionNumber: "07.",
      sectionLabel: "What's next?",
      title: "Let's Talk",
      description:
        "I'm open to new opportunities as a Marketing Manager & Growth at SaaS & B2B companies. If you're looking for someone who combines strategic vision, hands-on execution and automation to scale results, reach out.",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Your message",
      formSend: "Send message",
      formSending: "Sending...",
      formSuccess: "Message sent! I'll get back to you soon.",
      downloadCv: "Download my CV",
      orReach: "Or reach out directly:",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
    },
  },
  footer: {
    pt: "Feito por Antonio Kiepert com Next.js & TypeScript",
    en: "Built by Antonio Kiepert with Next.js & TypeScript",
  },
  dev: {
    pt: {
      nav: {
        items: [
          { label: "Sobre", href: "#dev-about" },
          { label: "Stack", href: "#dev-stack" },
          { label: "Projetos", href: "#dev-projects" },
          { label: "Experiencia", href: "#dev-experience" },
          { label: "Contato", href: "#dev-contact" },
        ],
        cta: "Contato",
        marketingLink: "Portfolio Marketing",
        menuOpen: "Abrir menu",
        menuClose: "Fechar menu",
      },
      hero: {
        tag: "Full Stack Developer | React · Next.js · TypeScript · Supabase",
        name: "Antonio Kiepert",
        headline: "Construo sistemas completos do front ao banco.",
        description1start: "Desenvolvedor full stack com ",
        description1highlight: "projetos shipped em producao",
        description1end:
          ". E-commerce, dashboards internos, automacoes e meu SaaS proprio (Bouzr) no ar em early access. Stack diaria: React, Next.js, TypeScript, Supabase, n8n.",
        description2start: "Background em marketing digital me da ",
        description2highlight: "visao de produto e negocio",
        description2end:
          " antes de escrever uma linha de codigo. Bilingue PT/EN (parte da formacao escolar nos EUA).",
        metrics: [
          { value: "2", label: "Sistemas proprios live" },
          { value: "3", label: "Ferramentas internas SlabWare" },
          { value: "PT/EN", label: "Bilingue" },
        ],
        ctaPrimary: "Ver projetos",
        ctaSecondary: "Fale comigo",
        downloadCv: "Baixar CV Dev",
      },
      about: {
        sectionNumber: "01.",
        sectionTitle: "Sobre",
        paragraphs: [
          {
            before: "Sou ",
            highlight: "Full Stack Developer",
            after:
              " com sistemas shipped em producao. Construo do HTML/CSS/JS ao banco de dados, com foco em arquitetura limpa e integracoes. Trabalho diariamente com React, Next.js, TypeScript, Supabase e n8n.",
          },
          {
            before: "Atualmente construindo o ",
            highlight: "Bouzr",
            after:
              " (SaaS B2B proprio, no ar em early access com primeiros usuarios em onboarding) com multi-tenancy via Row Level Security no Postgres, pagamentos via Mercado Pago, OAuth (Google/LinkedIn/Facebook) e integracoes com Google APIs (GA4, Ads, Places, Search Console) e Meta Ads.",
          },
          {
            before:
              "Meu diferencial e o background em marketing digital: entendo o negocio antes de escrever codigo. Construo o que ",
            highlight: "gera resultado",
            after:
              ", nao so o que e elegante. Bilingue PT/EN (parte da formacao escolar nos EUA), disponivel para remoto, hibrido ou relocacao.",
          },
        ],
      },
      stack: {
        sectionNumber: "02.",
        sectionTitle: "Stack Tecnica",
        subtitle:
          "Ferramentas que uso no dia a dia em projetos em producao.",
        items: [
          {
            area: "Frontend",
            tools: [
              "React",
              "Next.js (App Router)",
              "TypeScript",
              "JavaScript (ES6+)",
              "HTML5 / CSS3",
              "Tailwind CSS",
              "Shadcn/UI",
              "Radix UI",
              "Framer Motion",
              "React Hook Form",
              "Zod",
              "TanStack Query",
            ],
          },
          {
            area: "Backend & Banco",
            tools: [
              "Supabase (PostgreSQL)",
              "Next.js API Routes",
              "REST APIs",
              "Row Level Security",
              "Migrations",
              "Realtime (WebSocket)",
              "Storage",
              "Node.js",
              "Python / FastAPI (ferramentas internas)",
            ],
          },
          {
            area: "Integracoes & Automacao",
            tools: [
              "n8n (workflows, webhooks)",
              "Mercado Pago",
              "Zoho CRM",
              "Google APIs (GA4, Ads, Places, Search Console)",
              "Meta Ads API",
              "Snov.io",
              "Hunter.io",
              "Resend",
              "Inngest",
            ],
          },
          {
            area: "Deploy & Ferramentas",
            tools: [
              "Vercel",
              "Docker / Docker Compose",
              "Git / GitHub",
              "pnpm / npm",
              "Puppeteer",
              "Recharts",
              "jsPDF",
              "VS Code",
              "Cursor AI",
            ],
          },
        ],
      },
      projects: {
        sectionNumber: "03.",
        sectionTitle: "Projetos em Producao",
        subtitle:
          "Sistemas reais rodando, com foco em arquitetura, integracoes e profundidade tecnica.",
        items: [
          {
            title: "Bouzr — SaaS B2B para Agencias (early access)",
            description:
              "SaaS multi-tenant proprio no ar (early access, primeiros usuarios em onboarding). Stack: Next.js + Supabase com Row Level Security para isolamento por tenant, autenticacao OAuth (Google, LinkedIn, Facebook), pagamentos Mercado Pago + webhooks, integracoes com Google APIs (GA4, Ads, Places, Search Console) e Meta Ads. Modulos: mineracao de leads (Google Places + Hunter.io), kanban de campanhas, notificacoes realtime via Supabase, chat por tarefa e painel admin multi-tenant.",
            tech: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "n8n", "Inngest", "OAuth"],
            highlights: ["Multi-tenant + RLS", "OAuth + Webhooks", "Live · early access"],
            url: "https://bouzr.com",
            role: "Projeto pessoal · Solo dev",
          },
          {
            title: "Arara Silk — E-commerce de Impressao Textil",
            description:
              "E-commerce completo para impressao DTF, DTF UV e Serigrafia: catalogo de produtos, calculadora de preco dinamica por metodo de producao, pipeline de leads (cotacao → qualificacao → venda), integracao com Mercado Pago para pagamentos, GA4 + Meta Pixel para rastreamento de conversao, painel admin para gestao de leads e pedidos.",
            tech: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "GA4", "Meta Pixel"],
            highlights: ["E-commerce end-to-end", "Calculadora dinamica", "Admin de pedidos"],
            url: "https://ararasilk.com.br",
            role: "Co-founder & Web Developer",
          },
          {
            title: "Lead Mining + Email Dispatcher (SlabWare)",
            description:
              "Pipeline de outbound completo: mineracao de leads, enriquecimento via Snov.io, validacao e deduplicacao de emails, segmentacao no banco PostgreSQL (Supabase) e disparo automatizado de emails integrado ao Zoho CRM via n8n. Sistema de retries, logs e orquestracao dos servicos via shell script e Docker Compose.",
            tech: ["n8n", "Supabase", "Snov.io", "Zoho CRM", "Docker", "Email API"],
            highlights: ["Pipeline outbound", "Dedup + validacao", "Orquestrado por Docker"],
            role: "Internal Tool · SlabWare",
          },
          {
            title: "Kanban de Producao (SlabWare)",
            description:
              "Sistema de gestao de tarefas multi-tenant estilo Kanban: colunas dinamicas, cartoes com prioridade, tags, anexos e checklists, comentarios colaborativos, notificacoes em tempo real via Supabase Realtime, analytics e relatorios com Recharts. Isolamento de workspace por tenant via RLS.",
            tech: ["Next.js", "TypeScript", "Supabase", "Realtime", "Recharts"],
            highlights: ["Multi-tenant RLS", "Realtime collab", "Analytics integrado"],
            role: "Internal Tool · SlabWare",
          },
          {
            title: "Validador e Deduplicador de Emails",
            description:
              "Ferramenta interna com frontend React + backend Python (FastAPI) para validacao em lote de listas de emails: deteccao de duplicatas, engine de deduplicacao inteligente, merge de grupos, workers para processamento assincrono e dashboard com 4 abas de analytics. Containerizado com Docker Compose.",
            tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Workers"],
            highlights: ["Batch processing", "Workers assincronos", "Dashboard analytics"],
            role: "Internal Tool",
          },
        ],
      },
      experience: {
        sectionNumber: "04.",
        sectionTitle: "Experiencia",
        items: [
          {
            company: "SlabWare",
            tabLabel: "SlabWare",
            title: "Full Stack Developer & Marketing Manager",
            period: "Mai 2025 → Presente",
            url: "https://slabware.com",
            description: "SaaS B2B na industria da pedra | Mercados EUA & Brasil",
            bullets: [
              "Desenvolvo sistemas web com React, Next.js, TypeScript e Supabase (PostgreSQL).",
              "Construo formularios web, landing pages e interfaces com HTML, CSS e JavaScript.",
              "Crio automacoes e integracoes de APIs com n8n: webhooks, fluxos de onboarding, lead scoring.",
              "Mantenho banco de dados PostgreSQL: modelagem de tabelas, migrations e queries.",
              "Integro APIs externas: Zoho CRM, Snov.io, servicos de email.",
              "Coloco sistemas em producao com autonomia: Vercel, Supabase, deploy continuo.",
            ],
          },
          {
            company: "Bouzr (projeto pessoal)",
            tabLabel: "Bouzr",
            title: "Solo Developer · Projeto pessoal",
            period: "2024 → Presente (live em early access)",
            url: "https://bouzr.com",
            description: "SaaS B2B proprio no ar, primeiros usuarios em onboarding",
            bullets: [
              "Construi do zero um SaaS multi-tenant com planos de assinatura e pagamentos, hoje no ar (early access) com primeiros usuarios em onboarding.",
              "Multi-tenancy via Row Level Security no Postgres, autenticacao OAuth (Google/LinkedIn/Facebook), notificacoes Realtime.",
              "Integracoes via API: Mercado Pago (pagamentos + webhooks), Google APIs (GA4, Ads, Places, Search Console), Meta Ads, Hunter.io.",
              "Modulos: mineracao de leads, kanban de campanhas, chat por tarefa e painel admin multi-tenant.",
            ],
          },
          {
            company: "Arara Silk",
            tabLabel: "Arara Silk",
            title: "Co-founder & Web Developer",
            period: "Jan 2023 → Dez 2025",
            url: "https://ararasilk.com.br",
            description: "Estamparia textil | E-commerce proprio",
            bullets: [
              "Desenvolvi e-commerce completo com catalogo, calculadora de preco, pagamentos e painel admin.",
              "Integrei Mercado Pago, GA4 e Meta Pixel para rastreamento de conversao e vendas.",
              "Mantive performance, SEO e UX da plataforma em producao.",
            ],
          },
          {
            company: "Excellence",
            tabLabel: "Excellence",
            title: "Marketing Coordinator & Web Developer",
            period: "2019 → 2022",
            url: "#",
            description: "Distribuidora de racao | Primeira experiencia em desenvolvimento web",
            bullets: [
              "Desenvolvi o site institucional e implementei e-commerce com integracao de pagamento e logistica.",
              "Plataforma faturou R$ 40 mil nos primeiros 5 meses de operacao.",
              "Implementei rastreamento de conversao e fluxos de pedido.",
            ],
          },
        ],
      },
      languages: {
        title: "Idiomas",
        items: [
          { name: "Portugues", level: "Nativo" },
          { name: "Ingles", level: "Fluente (parte da formacao nos EUA)" },
          { name: "Espanhol", level: "Basico" },
        ],
      },
      education: {
        title: "Formacao",
        items: [
          {
            title: "Tecnologo em Marketing",
            org: "Universidade Vila Velha (UVV)",
            period: "Out 2025 → Jul 2027 (em andamento)",
          },
          {
            title: "Ensino Medio",
            org: "EEEM Ormanda Goncalves",
            period: "Concluido",
          },
        ],
      },
      contact: {
        sectionNumber: "05.",
        sectionLabel: "Vamos construir junto?",
        title: "Disponivel para Oportunidades Dev",
        description:
          "Aberto a vagas Full Stack, Frontend Senior e roles tecnicas. Remoto, hibrido ou relocacao. Se voce busca um dev que entende produto e negocio, fala.",
        formName: "Seu nome",
        formEmail: "Seu email",
        formMessage: "Sua mensagem",
        formSend: "Enviar mensagem",
        formSending: "Enviando...",
        formSuccess: "Mensagem enviada! Retorno em breve.",
        downloadCv: "Baixar CV Dev",
        orReach: "Ou fale diretamente:",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
      },
      footer: "Versao dev do portfolio · feito com Next.js, TypeScript e Supabase",
    },
    en: {
      nav: {
        items: [
          { label: "About", href: "#dev-about" },
          { label: "Stack", href: "#dev-stack" },
          { label: "Projects", href: "#dev-projects" },
          { label: "Experience", href: "#dev-experience" },
          { label: "Contact", href: "#dev-contact" },
        ],
        cta: "Contact",
        marketingLink: "Marketing portfolio",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      },
      hero: {
        tag: "Full Stack Developer | React · Next.js · TypeScript · Supabase",
        name: "Antonio Kiepert",
        headline: "I build complete systems from frontend to database.",
        description1start: "Full stack developer with ",
        description1highlight: "systems shipped to production",
        description1end:
          ". E-commerce, internal dashboards, automations and my own SaaS (Bouzr) live in early access. Daily stack: React, Next.js, TypeScript, Supabase, n8n.",
        description2start: "A digital marketing background gives me ",
        description2highlight: "product and business sense",
        description2end:
          " before writing a single line of code. Bilingual EN/PT (partly schooled in the US).",
        metrics: [
          { value: "2", label: "Personal systems live" },
          { value: "3", label: "Internal tools at SlabWare" },
          { value: "EN/PT", label: "Bilingual" },
        ],
        ctaPrimary: "See projects",
        ctaSecondary: "Get in touch",
        downloadCv: "Download Dev CV",
      },
      about: {
        sectionNumber: "01.",
        sectionTitle: "About",
        paragraphs: [
          {
            before: "I'm a ",
            highlight: "Full Stack Developer",
            after:
              " with systems shipped to production. I build from HTML/CSS/JS to the database, focused on clean architecture and integrations. I work daily with React, Next.js, TypeScript, Supabase and n8n.",
          },
          {
            before: "Currently building ",
            highlight: "Bouzr",
            after:
              " (my own B2B SaaS, live in early access with first users onboarding): multi-tenancy via Row Level Security on Postgres, Mercado Pago payments, OAuth (Google/LinkedIn/Facebook), integrations with Google APIs (GA4, Ads, Places, Search Console) and Meta Ads.",
          },
          {
            before:
              "My edge is a digital marketing background: I understand the business before writing code. I build what ",
            highlight: "drives results",
            after:
              ", not just what's elegant. Bilingual EN/PT (partly schooled in the US), open to remote, hybrid or relocation.",
          },
        ],
      },
      stack: {
        sectionNumber: "02.",
        sectionTitle: "Tech Stack",
        subtitle:
          "Tools I use day to day on systems in production.",
        items: [
          {
            area: "Frontend",
            tools: [
              "React",
              "Next.js (App Router)",
              "TypeScript",
              "JavaScript (ES6+)",
              "HTML5 / CSS3",
              "Tailwind CSS",
              "Shadcn/UI",
              "Radix UI",
              "Framer Motion",
              "React Hook Form",
              "Zod",
              "TanStack Query",
            ],
          },
          {
            area: "Backend & Database",
            tools: [
              "Supabase (PostgreSQL)",
              "Next.js API Routes",
              "REST APIs",
              "Row Level Security",
              "Migrations",
              "Realtime (WebSocket)",
              "Storage",
              "Node.js",
              "Python / FastAPI (internal tools)",
            ],
          },
          {
            area: "Integrations & Automation",
            tools: [
              "n8n (workflows, webhooks)",
              "Mercado Pago",
              "Zoho CRM",
              "Google APIs (GA4, Ads, Places, Search Console)",
              "Meta Ads API",
              "Snov.io",
              "Hunter.io",
              "Resend",
              "Inngest",
            ],
          },
          {
            area: "Deploy & Tooling",
            tools: [
              "Vercel",
              "Docker / Docker Compose",
              "Git / GitHub",
              "pnpm / npm",
              "Puppeteer",
              "Recharts",
              "jsPDF",
              "VS Code",
              "Cursor AI",
            ],
          },
        ],
      },
      projects: {
        sectionNumber: "03.",
        sectionTitle: "Projects in Production",
        subtitle:
          "Real systems running today, with focus on architecture, integrations and technical depth.",
        items: [
          {
            title: "Bouzr — B2B SaaS for Marketing Agencies (early access)",
            description:
              "My own multi-tenant SaaS live in early access with first users onboarding. Stack: Next.js + Supabase with Row Level Security for tenant isolation, OAuth auth (Google, LinkedIn, Facebook), Mercado Pago payments + webhooks, integrations with Google APIs (GA4, Ads, Places, Search Console) and Meta Ads. Modules: lead mining (Google Places + Hunter.io), campaign kanban, Supabase Realtime notifications, per-task chat and multi-tenant admin panel.",
            tech: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "n8n", "Inngest", "OAuth"],
            highlights: ["Multi-tenant + RLS", "OAuth + Webhooks", "Live · early access"],
            url: "https://bouzr.com",
            role: "Personal project · Solo dev",
          },
          {
            title: "Arara Silk — Textile Printing E-commerce",
            description:
              "Full e-commerce for DTF, UV DTF and Silkscreen printing: product catalog, dynamic price calculator per production method, lead pipeline (quote → qualification → sale), Mercado Pago payment integration, GA4 + Meta Pixel for conversion tracking, admin panel for lead and order management.",
            tech: ["Next.js", "TypeScript", "Supabase", "Mercado Pago", "GA4", "Meta Pixel"],
            highlights: ["End-to-end e-commerce", "Dynamic price calculator", "Order admin"],
            url: "https://ararasilk.com.br",
            role: "Co-founder & Web Developer",
          },
          {
            title: "Lead Mining + Email Dispatcher (SlabWare)",
            description:
              "Full outbound pipeline: lead mining, enrichment via Snov.io, email validation and dedup, segmentation in the PostgreSQL database (Supabase) and automated email dispatch integrated with Zoho CRM via n8n. Retry system, logs and service orchestration via shell script and Docker Compose.",
            tech: ["n8n", "Supabase", "Snov.io", "Zoho CRM", "Docker", "Email API"],
            highlights: ["Outbound pipeline", "Dedup + validation", "Docker-orchestrated"],
            role: "Internal Tool · SlabWare",
          },
          {
            title: "Production Kanban (SlabWare)",
            description:
              "Multi-tenant Kanban-style task management system: dynamic columns, cards with priority, tags, attachments and checklists, collaborative comments, real-time notifications via Supabase Realtime, analytics and reports with Recharts. Workspace isolation per tenant via RLS.",
            tech: ["Next.js", "TypeScript", "Supabase", "Realtime", "Recharts"],
            highlights: ["Multi-tenant RLS", "Realtime collab", "Built-in analytics"],
            role: "Internal Tool · SlabWare",
          },
          {
            title: "Email Validator & Deduplicator",
            description:
              "Internal tool with React frontend + Python (FastAPI) backend for batch email list validation: duplicate detection, smart dedup engine, group merging, async workers for processing and dashboard with 4 analytics tabs. Containerized with Docker Compose.",
            tech: ["React", "Python", "FastAPI", "PostgreSQL", "Docker", "Workers"],
            highlights: ["Batch processing", "Async workers", "Analytics dashboard"],
            role: "Internal Tool",
          },
        ],
      },
      experience: {
        sectionNumber: "04.",
        sectionTitle: "Experience",
        items: [
          {
            company: "SlabWare",
            tabLabel: "SlabWare",
            title: "Full Stack Developer & Marketing Manager",
            period: "May 2025 → Present",
            url: "https://slabware.com",
            description: "B2B SaaS for the stone industry | US & Brazil markets",
            bullets: [
              "Build web systems with React, Next.js, TypeScript and Supabase (PostgreSQL).",
              "Build web forms, landing pages and interfaces with HTML, CSS and JavaScript.",
              "Create automations and API integrations with n8n: webhooks, onboarding flows, lead scoring.",
              "Own the PostgreSQL database: table modeling, migrations and queries.",
              "Integrate external APIs: Zoho CRM, Snov.io, email services.",
              "Ship systems to production autonomously: Vercel, Supabase, continuous deploy.",
            ],
          },
          {
            company: "Bouzr (personal project)",
            tabLabel: "Bouzr",
            title: "Solo Developer · Personal project",
            period: "2024 → Present (live · early access)",
            url: "https://bouzr.com",
            description: "My own B2B SaaS live, first users onboarding",
            bullets: [
              "Built a multi-tenant SaaS from scratch with subscription plans and payments, currently live in early access with first users onboarding.",
              "Multi-tenancy via Row Level Security on Postgres, OAuth auth (Google/LinkedIn/Facebook), Realtime notifications.",
              "API integrations: Mercado Pago (payments + webhooks), Google APIs (GA4, Ads, Places, Search Console), Meta Ads, Hunter.io.",
              "Modules: lead mining, campaign kanban, per-task chat and multi-tenant admin panel.",
            ],
          },
          {
            company: "Arara Silk",
            tabLabel: "Arara Silk",
            title: "Co-founder & Web Developer",
            period: "Jan 2023 → Dec 2025",
            url: "https://ararasilk.com.br",
            description: "Textile printing business | Own e-commerce",
            bullets: [
              "Built full e-commerce with catalog, price calculator, payments and admin panel.",
              "Integrated Mercado Pago, GA4 and Meta Pixel for conversion and sales tracking.",
              "Maintained performance, SEO and UX of the platform in production.",
            ],
          },
          {
            company: "Excellence",
            tabLabel: "Excellence",
            title: "Marketing Coordinator & Web Developer",
            period: "2019 → 2022",
            url: "#",
            description: "Feed distributor | First professional web dev experience",
            bullets: [
              "Built the institutional website and implemented e-commerce with payment and logistics integration.",
              "Platform generated R$ 40k in revenue within the first 5 months of operation.",
              "Implemented conversion tracking and order flows.",
            ],
          },
        ],
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Portuguese", level: "Native" },
          { name: "English", level: "Fluent (partly schooled in the US)" },
          { name: "Spanish", level: "Basic" },
        ],
      },
      education: {
        title: "Education",
        items: [
          {
            title: "Technology Degree in Marketing",
            org: "Universidade Vila Velha (UVV)",
            period: "Oct 2025 → Jul 2027 (in progress)",
          },
          {
            title: "High School Diploma",
            org: "EEEM Ormanda Goncalves",
            period: "Completed",
          },
        ],
      },
      contact: {
        sectionNumber: "05.",
        sectionLabel: "Let's build something?",
        title: "Open to Dev Opportunities",
        description:
          "Open to Full Stack, Senior Frontend and engineering roles. Remote, hybrid or relocation. If you want a dev who understands product and business, let's talk.",
        formName: "Your name",
        formEmail: "Your email",
        formMessage: "Your message",
        formSend: "Send message",
        formSending: "Sending...",
        formSuccess: "Message sent! I'll get back to you soon.",
        downloadCv: "Download Dev CV",
        orReach: "Or reach out directly:",
        whatsappLabel: "WhatsApp",
        emailLabel: "Email",
        linkedinLabel: "LinkedIn",
        githubLabel: "GitHub",
      },
      footer: "Dev version of the portfolio · built with Next.js, TypeScript and Supabase",
    },
  },
} as const
