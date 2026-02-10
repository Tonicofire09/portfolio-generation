export type Lang = "pt" | "en"

export const translations = {
  nav: {
    pt: {
      items: [
        { label: "Sobre", href: "#about" },
        { label: "Servicos", href: "#servicos" },
        { label: "Resultados", href: "#resultados" },
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
        " para SaaS & B2B. Lidero operacoes de marketing de ponta a ponta \u2014 da geracao de demanda ao product-led growth \u2014 com mentalidade global e execucao orientada por dados.",
      description2start: "Atualmente na ",
      description2link: "SlabWare",
      description2end:
        ", liderando marketing para a industria da pedra nos mercados EUA e Brasil.",
      metrics: [
        { suffix: "%+", label: "ROI em Paid Media" },
        { suffix: "%", label: "Full-funnel ownership" },
        { suffix: "+", label: "Anos nos EUA" },
      ],
      ctaPrimary: "Ver resultados",
      ctaSecondary: "Fale comigo",
      downloadCv: "Baixar CV",
    },
    en: {
      tag: "Marketing Manager | Growth & Paid Media",
      name: "Antonio Kiepert",
      headline: "I build growth engines that generate pipeline and real revenue.",
      description1start: "Specialized in ",
      description1highlight: "Growth, Paid Media & Automation",
      description1end:
        " for SaaS & B2B. I lead end-to-end marketing operations \u2014 from demand generation to product-led growth \u2014 with a global mindset and data-driven execution.",
      description2start: "Currently at ",
      description2link: "SlabWare",
      description2end:
        ", leading marketing for the stone industry across the US and Brazil.",
      metrics: [
        { suffix: "%+", label: "Paid Media ROI" },
        { suffix: "%", label: "Full-funnel ownership" },
        { suffix: "+", label: "Years in the US" },
      ],
      ctaPrimary: "See results",
      ctaSecondary: "Get in touch",
      downloadCv: "Download CV",
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
            " que opera na intersecao entre estrategia, execucao e automacao. Nao apenas rodo campanhas \u2014 eu ",
          highlight2: "projeto sistemas",
          after2:
            " que conectam marketing, produto e vendas para gerar resultado previsivel.",
        },
        {
          before: "Na SlabWare, reestruturei toda a operacao de Paid Media alcancando ",
          highlight: "ROI acima de 150%",
          after:
            " com reducao significativa de custo de aquisicao. Implementei o Zoho CRM como stack de vendas e marketing, desenhei o funil completo \u2014 da geracao de demanda com free trials ate automacoes de onboarding e retencao para reduzir churn.",
        },
        {
          before: "Trago uma ",
          highlight: "mentalidade global",
          after:
            " com 9 anos morando nos EUA, ingles fluente e experiencia ativa rodando campanhas para mercados americano e brasileiro.",
        },
        {
          before:
            "Como diferencial, uso tecnologia para construir ferramentas internas \u2014 como sistemas de controle de producao, mineradores de leads e disparadores de email integrados a CRM \u2014 usando React, TypeScript, Supabase e n8n.",
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
            " who operates at the intersection of strategy, execution and automation. I don't just run campaigns \u2014 I ",
          highlight2: "design systems",
          after2:
            " that connect marketing, product and sales to drive predictable results.",
        },
        {
          before:
            "At SlabWare, I restructured the entire Paid Media operation achieving ",
          highlight: "ROI above 150%",
          after:
            " with a significant reduction in acquisition costs. I implemented Zoho CRM as the sales and marketing stack, designed the complete funnel \u2014 from demand generation with free trials to onboarding and retention automations to reduce churn.",
        },
        {
          before: "I bring a ",
          highlight: "global mindset",
          after:
            " with 9 years living in the US, fluent English and active experience running campaigns for both American and Brazilian markets.",
        },
        {
          before:
            "As a differentiator, I use technology to build internal tools \u2014 such as production control systems, lead miners and email dispatchers integrated with CRM \u2014 using React, TypeScript, Supabase and n8n.",
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
        "Numeros e entregas reais do meu trabalho como Marketing Manager na SlabWare \u2014 liderando crescimento para um SaaS B2B na industria da pedra.",
      items: [
        {
          metric: { end: 150, suffix: "%+" },
          title: "ROI em Paid Media",
          description:
            "Reestruturacao completa da estrategia de Meta Ads e Google Ads com otimizacao de audiencias, criativos e A/B testing sistematico.",
        },
        {
          metric: { end: 40, suffix: "%" },
          title: "Reducao no CAC",
          description:
            "Custo de aquisicao reduzido significativamente mantendo o volume e qualidade dos leads gerados.",
        },
        {
          metric: { end: 100, suffix: "%" },
          title: "Ownership Full-Funnel",
          description:
            "Dono de toda a operacao: demanda, paid media, automacao, onboarding, retencao e produto.",
        },
        {
          metric: { text: "2 Markets" },
          title: "EUA & Brasil",
          description:
            "Campanhas ativas simultaneas para mercado americano e brasileiro com copy, criativos e segmentacoes localizadas.",
        },
        {
          metric: { text: "Zoho CRM" },
          title: "Stack de CRM Implementada",
          description:
            "Implementacao completa do Zoho CRM como stack de vendas e marketing, integrando lead management, automacoes e pipeline comercial.",
        },
        {
          metric: { text: "Outbound" },
          title: "Pipeline Comercial",
          description:
            "Construcao de sistema de mineracao de leads e disparo de emails integrado ao CRM para abastecer a equipe comercial.",
        },
      ],
    },
    en: {
      sectionNumber: "03.",
      sectionTitle: "Results",
      subtitle:
        "Real numbers and deliverables from my work as Marketing Manager at SlabWare \u2014 leading growth for a B2B SaaS in the stone industry.",
      items: [
        {
          metric: { end: 150, suffix: "%+" },
          title: "Paid Media ROI",
          description:
            "Complete restructuring of Meta Ads and Google Ads strategy with audience optimization, creatives and systematic A/B testing.",
        },
        {
          metric: { end: 40, suffix: "%" },
          title: "CAC Reduction",
          description:
            "Acquisition cost significantly reduced while maintaining lead volume and quality.",
        },
        {
          metric: { end: 100, suffix: "%" },
          title: "Full-Funnel Ownership",
          description:
            "Full ownership of the operation: demand, paid media, automation, onboarding, retention and product.",
        },
        {
          metric: { text: "2 Markets" },
          title: "US & Brazil",
          description:
            "Simultaneous active campaigns for US and Brazilian markets with localized copy, creatives and segmentation.",
        },
        {
          metric: { text: "Zoho CRM" },
          title: "CRM Stack Implemented",
          description:
            "Complete Zoho CRM implementation as the sales and marketing stack, integrating lead management, automations and sales pipeline.",
        },
        {
          metric: { text: "Outbound" },
          title: "Sales Pipeline",
          description:
            "Built a lead mining system and email dispatcher integrated with CRM to feed the sales team.",
        },
      ],
    },
  },
  projects: {
    pt: {
      sectionNumber: "04.",
      sectionTitle: "Cases & Projetos",
      subtitle:
        "Campanhas, estrategias e sistemas que construi e liderei \u2014 combinando visao de marketing com execucao tecnica.",
      items: [
        {
          tag: "Paid Media",
          title: "Reestruturacao de Paid Media com ROI 150%+",
          description:
            "Reestruturei toda a estrategia de midia paga da SlabWare (Meta Ads + Google Ads + YouTube). Combinei criativos data-driven, testes A/B sistematicos e otimizacao de audiencia para alcancar ROI acima de 150% com reducao significativa no custo de aquisicao.",
          highlights: ["Meta Ads", "Google Ads", "YouTube Ads", "A/B Testing", "Analytics"],
          result: "ROI 150%+ | CAC reduzido",
        },
        {
          tag: "CRM & Sales",
          title: "Implementacao do Zoho CRM na SlabWare",
          description:
            "Implementei o Zoho CRM como stack completa de vendas e marketing. Configurei pipelines, automacoes de lead management, integracao com campanhas pagas e dashboards de acompanhamento para a equipe comercial.",
          highlights: ["Zoho CRM", "Pipeline Setup", "Lead Management", "Sales Automation", "Dashboards"],
          result: "Stack comercial integrada",
        },
        {
          tag: "Growth Strategy",
          title: "Black Friday SlabWare - Free Trial 15 Dias",
          description:
            "Liderei toda a estrategia de Black Friday focada em gerar oportunidades qualificadas via Free Trial de 15 dias. Gerenciei o ciclo completo: producao criativa, segmentacao de leads de alta intencao nos EUA e Brasil, automacao de onboarding e nurturing durante o trial.",
          highlights: ["Campaign Strategy", "Segmentation", "n8n Automation", "Nurturing"],
          result: "Full campaign ownership",
        },
        {
          tag: "Outbound & CRM",
          title: "Lead Miner + Email Dispatcher para Equipe Comercial",
          description:
            "Desenvolvi um sistema integrado de mineracao de leads combinado com disparador automatico de emails conectado ao CRM. Essa ferramenta alimenta o pipeline da equipe comercial automatizando prospecao e follow-up.",
          highlights: ["n8n", "Supabase", "Email API", "CRM Integration", "TypeScript"],
          result: "Pipeline outbound automatizado",
        },
        {
          tag: "Onboarding & Retencao",
          title: "Otimizacao de Onboarding e Controle de Churn",
          description:
            "Redesenhei o fluxo de onboarding para free trials SaaS focando em metricas de ativacao. Implementei lifecycle marketing automatizado com lead scoring e workflows de retencao proativa para reduzir churn.",
          highlights: ["Onboarding Flow", "Lead Scoring", "n8n", "Lifecycle Marketing"],
          result: "Melhoria na ativacao e retencao",
        },
        {
          tag: "Marketing Ops",
          title: "Sistema de Controle de Producao da Equipe",
          description:
            "Construi um dashboard completo de controle de producao para a equipe de marketing usando React, TypeScript e Supabase via vibe coding com IA. O sistema rastreia entregas, prazos e performance do time.",
          highlights: ["React", "TypeScript", "Supabase", "n8n", "v0"],
          result: "Operacao organizada e mensuravel",
        },
      ],
    },
    en: {
      sectionNumber: "04.",
      sectionTitle: "Cases & Projects",
      subtitle:
        "Campaigns, strategies and systems I built and led \u2014 combining marketing vision with technical execution.",
      items: [
        {
          tag: "Paid Media",
          title: "Paid Media Restructuring with 150%+ ROI",
          description:
            "Restructured SlabWare's entire paid media strategy (Meta Ads + Google Ads + YouTube). Combined data-driven creatives, systematic A/B testing and audience optimization to achieve 150%+ ROI with significant CAC reduction.",
          highlights: ["Meta Ads", "Google Ads", "YouTube Ads", "A/B Testing", "Analytics"],
          result: "150%+ ROI | Reduced CAC",
        },
        {
          tag: "CRM & Sales",
          title: "Zoho CRM Implementation at SlabWare",
          description:
            "Implemented Zoho CRM as the complete sales and marketing stack. Configured pipelines, lead management automations, paid campaign integration and tracking dashboards for the sales team.",
          highlights: ["Zoho CRM", "Pipeline Setup", "Lead Management", "Sales Automation", "Dashboards"],
          result: "Integrated sales stack",
        },
        {
          tag: "Growth Strategy",
          title: "SlabWare Black Friday - 15-Day Free Trial",
          description:
            "Led the entire Black Friday strategy focused on generating qualified opportunities via a 15-day Free Trial. Managed the full cycle: creative production, high-intent lead segmentation in the US and Brazil, onboarding automation and nurturing during the trial.",
          highlights: ["Campaign Strategy", "Segmentation", "n8n Automation", "Nurturing"],
          result: "Full campaign ownership",
        },
        {
          tag: "Outbound & CRM",
          title: "Lead Miner + Email Dispatcher for Sales Team",
          description:
            "Built an integrated lead mining system combined with an automatic email dispatcher connected to the CRM. This tool feeds the sales team pipeline by automating prospecting and follow-up.",
          highlights: ["n8n", "Supabase", "Email API", "CRM Integration", "TypeScript"],
          result: "Automated outbound pipeline",
        },
        {
          tag: "Onboarding & Retention",
          title: "Onboarding Optimization & Churn Control",
          description:
            "Redesigned the onboarding flow for SaaS free trials focusing on activation metrics. Implemented automated lifecycle marketing with lead scoring and proactive retention workflows to reduce churn.",
          highlights: ["Onboarding Flow", "Lead Scoring", "n8n", "Lifecycle Marketing"],
          result: "Improved activation & retention",
        },
        {
          tag: "Marketing Ops",
          title: "Team Production Control System",
          description:
            "Built a complete production control dashboard for the marketing team using React, TypeScript and Supabase via AI vibe coding. The system tracks deliverables, deadlines and team performance.",
          highlights: ["React", "TypeScript", "Supabase", "n8n", "v0"],
          result: "Organized & measurable ops",
        },
      ],
    },
  },
  experience: {
    pt: {
      sectionNumber: "05.",
      sectionTitle: "Experiencia",
      items: [
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Mkt)",
          title: "Marketing Manager",
          period: "Mai 2025 - Presente",
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
          period: "Set 2024 - Jul 2025",
          url: "https://slabware.com",
          description: "Producao criativa para ads e onboarding",
          bullets: [
            "Produzi conteudo em video focado em conversao usando After Effects, Premiere e ferramentas de IA.",
            "Criei campanhas combinando roteiros por IA, voice-over ElevenLabs e motion design para Meta e Google Ads.",
            "Desenvolvi tutoriais e walkthroughs do produto para suporte ao onboarding.",
          ],
        },
        {
          company: "Distribuidora de Racao",
          tabLabel: "Distribuidora",
          title: "Coordenador de Marketing",
          period: "2019 - 2022",
          url: "#",
          description: "Distribuidora de racao animal | Marketing do zero",
          bullets: [
            "Criei e implementei toda a operacao de marketing da empresa do zero, incluindo identidade visual e posicionamento.",
            "Desenvolvi o site institucional e implementei o sistema de e-commerce integrado.",
            "Estruturei a presenca digital da marca com estrategias de SEO, redes sociais e campanhas pagas.",
            "Coordenei a producao de conteudo e materiais de comunicacao para canais online e offline.",
            "Gerenciei o relacionamento com fornecedores de servicos de marketing e tecnologia.",
          ],
        },
        {
          company: "Arara Silk",
          tabLabel: "Arara Silk",
          title: "Co-fundador & Proprietario",
          period: "Jan 2023 - Dez 2025",
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
          period: "Nov 2022 - Ago 2024",
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
      sectionNumber: "05.",
      sectionTitle: "Experience",
      items: [
        {
          company: "SlabWare",
          tabLabel: "SlabWare (Mkt)",
          title: "Marketing Manager",
          period: "May 2025 - Present",
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
          period: "Sep 2024 - Jul 2025",
          url: "https://slabware.com",
          description: "Creative production for ads and onboarding",
          bullets: [
            "Produced conversion-focused video content using After Effects, Premiere and AI tools.",
            "Created campaigns combining AI scripts, ElevenLabs voice-over and motion design for Meta and Google Ads.",
            "Developed product tutorials and walkthroughs to support onboarding.",
          ],
        },
        {
          company: "Feed Distributor",
          tabLabel: "Feed Dist.",
          title: "Marketing Coordinator",
          period: "2019 - 2022",
          url: "#",
          description: "Animal feed distributor | Marketing from scratch",
          bullets: [
            "Created and implemented the entire marketing operation from scratch, including brand identity and positioning.",
            "Developed the institutional website and implemented the integrated e-commerce system.",
            "Structured the brand's digital presence with SEO strategies, social media and paid campaigns.",
            "Coordinated content production and communication materials for online and offline channels.",
            "Managed relationships with marketing and technology service providers.",
          ],
        },
        {
          company: "Arara Silk",
          tabLabel: "Arara Silk",
          title: "Co-founder & Owner",
          period: "Jan 2023 - Dec 2025",
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
          period: "Nov 2022 - Aug 2024",
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
      sectionNumber: "06.",
      sectionLabel: "E agora?",
      title: "Vamos Conversar",
      description:
        "Estou aberto a novas oportunidades como Marketing Manager & Growth em empresas SaaS & B2B. Se voce busca alguem que une visao estrategica, execucao hands-on e automacao pra escalar resultados \u2014 entre em contato.",
      formName: "Seu nome",
      formEmail: "Seu email",
      formMessage: "Sua mensagem",
      formSend: "Enviar mensagem",
      formSending: "Enviando...",
      formSuccess: "Mensagem enviada! Retorno em breve.",
      orReach: "Ou fale diretamente:",
      whatsappLabel: "WhatsApp",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
    },
    en: {
      sectionNumber: "06.",
      sectionLabel: "What's next?",
      title: "Let's Talk",
      description:
        "I'm open to new opportunities as a Marketing Manager & Growth at SaaS & B2B companies. If you're looking for someone who combines strategic vision, hands-on execution and automation to scale results \u2014 reach out.",
      formName: "Your name",
      formEmail: "Your email",
      formMessage: "Your message",
      formSend: "Send message",
      formSending: "Sending...",
      formSuccess: "Message sent! I'll get back to you soon.",
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
