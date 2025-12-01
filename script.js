// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Theme toggle
const toggleBtn = document.querySelector('.theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Reveal animations
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));


// =========================================
//              TRADUÇÕES
// =========================================
const translations = {
    pt: {
        brand_role: "Desenvolvedor",
        nav_home: "Início",
        nav_about: "Sobre",
        nav_skills: "Habilidades",
        nav_projects: "Projetos",
        nav_contact: "Contato",

        hero_kicker: "Desenvolvedor Full Stack",
        hero_title_1: "Construindo soluções",
        hero_title_2: "simples, modernas e eficientes.",
        hero_subtitle:
            "Trabalho com desenvolvimento web, APIs, integrações e automação, sempre focado em entregar valor real para pessoas e negócios.",

        btn_projects: "Ver projetos",
        btn_contact: "Entrar em contato",

        about_title: "Sobre mim",
        about_text:
            "Desenvolvedor Full Stack com experiência em sistemas web, automações e IoT. Trabalho com JavaScript, Spring Boot, Firebase e infraestrutura.",

        skills_title: "Habilidades",

        skill_frontend_title: "Front-end",
        skill_frontend_desc: "HTML, CSS, JavaScript, React e interfaces responsivas focadas em UX.",

        skill_backend_title: "Back-end",
        skill_backend_desc: "Java com Spring Boot, PHP e APIs REST bem estruturadas.",

        skill_cloud_title: "Banco & Cloud",
        skill_cloud_desc: "Firebase, Firestore, autenticação, storage e integrações em nuvem.",

        skill_iot_title: "Automação & IoT",
        skill_iot_desc: "Projetos com ESP32/ESP8266, sensores, bots e integração com APIs.",

        skill_data_title: "Análise de Dados",
        skill_data_desc: "Python, Pandas e manipulação de dados para insights rápidos.",

        skill_collab_title: "Colaboração",
        skill_collab_desc: "Git, GitHub, organização de projetos e comunicação com equipe.",

        projects_title: "Projetos em destaque",

        proj_valcounter_desc: "Bot para Twitch com overlay para Valorant...",
        proj_acianexus_desc: "Plataforma completa desenvolvida para a ACIA...",
        proj_varal_desc: "Projeto IoT com controle via Telegram...",

        btn_github: "Ver no GitHub →",

        contact_title: "Contato",
        contact_text: "Aberto para oportunidades, parcerias e novos projetos.",

        footer_note: "Desenvolvido com atenção aos detalhes."
    },

    en: {
        brand_role: "Developer",
        nav_home: "Home",
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_contact: "Contact",

        hero_kicker: "Full Stack Developer",
        hero_title_1: "Building solutions",
        hero_title_2: "simple, modern and efficient.",
        hero_subtitle:
            "I work with web development, APIs, integrations and automation, always focused on delivering real value for people and businesses.",

        btn_projects: "See projects",
        btn_contact: "Contact me",

        about_title: "About me",
        about_text:
            "Full Stack developer experienced in web systems, automation and IoT. Skilled in JavaScript, Spring Boot, Firebase and cloud integration.",

        skills_title: "Skills",

        skill_frontend_title: "Front-end",
        skill_frontend_desc: "HTML, CSS, JavaScript, React and responsive UX-focused interfaces.",

        skill_backend_title: "Back-end",
        skill_backend_desc: "Java with Spring Boot, PHP and well-structured REST APIs.",

        skill_cloud_title: "Database & Cloud",
        skill_cloud_desc: "Firebase, Firestore, authentication, storage and cloud integrations.",

        skill_iot_title: "Automation & IoT",
        skill_iot_desc: "Projects with ESP32/ESP8266, sensors, bots and API integration.",

        skill_data_title: "Data Analysis",
        skill_data_desc: "Python, Pandas and data manipulation for quick insights.",

        skill_collab_title: "Collaboration",
        skill_collab_desc: "Git, GitHub, project organization and client/team communication.",

        projects_title: "Featured Projects",

        proj_valcounter_desc: "Twitch bot with Valorant overlay...",
        proj_acianexus_desc: "Complete platform developed for ACIA...",
        proj_varal_desc: "IoT project with Telegram control...",

        btn_github: "View on GitHub →",

        contact_title: "Contact",
        contact_text: "Open to opportunities, partnerships and new projects.",

        footer_note: "Developed with attention to detail."
    },

    es: {
        brand_role: "Desarrollador",
        nav_home: "Inicio",
        nav_about: "Sobre mí",
        nav_skills: "Habilidades",
        nav_projects: "Proyectos",
        nav_contact: "Contacto",

        hero_kicker: "Desarrollador Full Stack",
        hero_title_1: "Construyendo soluciones",
        hero_title_2: "simples, modernas y eficientes.",
        hero_subtitle:
            "Trabajo con desarrollo web, APIs, integraciones y automatización, siempre enfocado en entregar valor real a personas y negocios.",

        btn_projects: "Ver proyectos",
        btn_contact: "Contactar",

        about_title: "Sobre mí",
        about_text:
            "Desarrollador Full Stack con experiencia en sistemas web, automatización e IoT. Experto en JavaScript, Spring Boot, Firebase e integración en la nube.",

        skills_title: "Habilidades",

        skill_frontend_title: "Front-end",
        skill_frontend_desc: "HTML, CSS, JavaScript, React e interfaces responsivas enfocadas en UX.",

        skill_backend_title: "Back-end",
        skill_backend_desc: "Java con Spring Boot, PHP y APIs REST bien estructuradas.",

        skill_cloud_title: "Base de datos & Nube",
        skill_cloud_desc: "Firebase, Firestore, autenticación, almacenamiento e integraciones en la nube.",

        skill_iot_title: "Automatización & IoT",
        skill_iot_desc: "Proyectos con ESP32/ESP8266, sensores, bots e integración con APIs.",

        skill_data_title: "Análisis de Datos",
        skill_data_desc: "Python, Pandas y manipulación de datos para obtener insights rápidos.",

        skill_collab_title: "Colaboración",
        skill_collab_desc: "Git, GitHub, organización de proyectos y comunicación con equipos.",

        projects_title: "Proyectos destacados",

        proj_valcounter_desc: "Bot para Twitch con overlay de Valorant...",
        proj_acianexus_desc: "Plataforma completa desarrollada para ACIA...",
        proj_varal_desc: "Proyecto IoT con control vía Telegram...",

        btn_github: "Ver en GitHub →",

        contact_title: "Contacto",
        contact_text: "Abierto a oportunidades, asociaciones y nuevos proyectos.",

        footer_note: "Desarrollado con atención a los detalles."
    }
};

// Aplica tradução
function applyTranslation(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

// Inicialização
const langSwitch = document.getElementById("lang-switch");
const savedLang = localStorage.getItem("lang") || "pt";

langSwitch.value = savedLang;
applyTranslation(savedLang);

langSwitch.addEventListener("change", () => {
    applyTranslation(langSwitch.value);
});
