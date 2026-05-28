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
      tag: "Marketing Manager | Growth & Paid Media",
      name: "Antonio Kiepert",
      headline: "Construo motores de crescimento que geram pipeline e receita real.",
      description1start: "Especialista em ",
      description1highlight: "Growth, Paid Media e Automacao",
      description1end:
        " para SaaS & B2B. Lidero operacoes de marketing de ponta a ponta (da geracao de demanda ao product-led growth) com mentalidade global e execucao orientada por dados.",
      description2start: "Atualmente na ",
      description2link: "SlabWare",
      description2end:
        ", liderando marketing para a industria da pedra nos mercados EUA e Brasil.",
      metrics: [
        { suffix: "K+", label: "Impressoes (31 dias)" },
        { suffix: "%+", label: "ROI em Paid Media" },
        { suffix: "+", label: "Anos nos EUA" },
      ],
      ctaPrimary: "Ver resultados",
      ctaSecondary: "Fale comigo",
      downloadCv: "Baixar CV",
      downloadCvDev: "Baixar CV Dev",
    },
    en: {
      tag: "Marketing Manager | Growth & Paid Media",
      name: "Antonio Kiepert",
      headline: "I build growth engines that generate pipeline and real revenue.",
      description1start: "Specialized in ",
      description1highlight: "Growth, Paid Media & Automation",
      description1end:
        " for SaaS & B2B. I lead end-to-end marketing operations (from demand generation to product-led growth) with a global mindset and data-driven execution.",
      description2start: "Currently at ",
      description2link: "SlabWare",
      description2end:
        ", leading marketing for the stone industry across the US and Brazil.",
      metrics: [
        { suffix: "K+", label: "Impressions (31 days)" },
        { suffix: "%+", label: "Paid Media ROI" },
        { suffix: "+", label: "Years in the US" },
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
          before: "Na SlabWare, reestruturei toda a operacao de Paid Media alcancando ",
          highlight: "ROI acima de 150%",
          after:
            " com reducao significativa de custo de aquisicao. Implementei o Zoho CRM como stack de vendas e marketing, desenhei o funil completo: da geracao de demanda com free trials ate automacoes de onboarding e retencao para reduzir churn.",
        },
        {
          before: "Trago uma ",
          highlight: "mentalidade global",
          after:
            " com 9 anos morando nos EUA, ingles fluente e experiencia ativa rodando campanhas para mercados americano e brasileiro.",
        },
        {
          before:
            "Como diferencial, uso tecnologia para construir ferramentas internas (sistemas de controle de producao, mineradores de leads e disparadores de email integrados a CRM) usando React, TypeScript, Supabase e n8n.",
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
            "At SlabWare, I restructured the entire Paid Media operation achieving ",
          highlight: "ROI above 150%",
          after:
            " with a significant reduction in acquisition costs. I implemented Zoho CRM as the sales and marketing stack, designed the complete funnel: from demand generation with free trials to onboarding and retention automations to reduce churn.",
        },
        {
          before: "I bring a ",
          highlight: "global mindset",
          after:
            " with 9 years living in the US, fluent English and active experience running campaigns for both American and Brazilian markets.",
        },
        {
          before:
            "As a differentiator, I use technology to build internal tools (production control systems, lead miners and email dispatchers integrated with CRM) using React, TypeScript, Supabase and n8n.",
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
          title: "ROAS unificado",
          description:
            "ROAS 1.82x considerando atribuicao cross-channel via GA4 (paid + organic + outbound). Investimento total no periodo: R$ 4.792.",
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
          title: "Unified ROAS",
          description:
            "Unified ROAS of 1.82x considering cross-channel attribution via GA4 (paid + organic + outbound). Total spend in the period: R$ 4,792.",
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
          title: "Bouzr: Plataforma de Lead Mining (criada por mim)",
          description:
            "Desenvolvi a Bouzr do zero: plataforma propria de mineracao de leads B2B que alimenta o pipeline outbound da SlabWare. O minerador captura leads qualificados via APIs publicas, enriquece com dados de empresa e dispara sequencias de email integradas ao Zoho CRM. Pipeline outbound + Meta Ads + Reddit Ads compoem a estrategia full-funnel.",
          highlights: ["Lead Mining", "Outbound Ops", "Zoho CRM", "API Integration", "Email Automation"],
          result: "Pipeline outbound automatizado",
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
          title: "Bouzr: B2B lead mining platform I built",
          description:
            "Built Bouzr from scratch: a proprietary B2B lead mining platform that feeds SlabWare's outbound pipeline. The miner pulls qualified leads via public APIs, enriches with company data and triggers email sequences integrated with Zoho CRM. Outbound pipeline + Meta Ads + Reddit Ads compose the full-funnel strategy.",
          highlights: ["Lead Mining", "Outbound Ops", "Zoho CRM", "API Integration", "Email Automation"],
          result: "Automated outbound pipeline",
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
            "Reestruturei a estrategia de Paid Media (Meta + Google + YouTube) alcancando ROI acima de 150% com reducao significativa no CAC.",
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
            "Restructured the Paid Media strategy (Meta + Google + YouTube) achieving 150%+ ROI with significant CAC reduction.",
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
} as const
