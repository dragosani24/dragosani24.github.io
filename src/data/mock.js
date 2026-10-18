// Portfolio data updated with Santiago Avilés Vázquez curriculum

export const personalInfo = {
  en: {
    name: "Santiago Avilés Vázquez",
    title: "Full Stack Developer & Systems Architect",
    location: "Sinaloa, México",
    email: "santiagoav@gmail.com",
    phone: "+52 55 27 44 06 92",
    linkedin: "https://www.linkedin.com/in/santiagoav-0206",
    github: "https://github.com/dragosani24",
    summary: "Information Technology and Systems Expert with over 10 years of experience as a Full Stack Developer, working across both front-end and back-end development, as well as web and mobile application design and administration. Throughout my career, I have led end-to-end developments that enhance product delivery, optimize performance, and strengthen application security."
  },
  es: {
    name: "Santiago Avilés Vázquez",
    title: "Desarrollador Full Stack y Arquitecto de Software",
    location: "Sinaloa, México",
    email: "santiagoav@gmail.com",
    phone: "+52 55 27 44 06 92",
    linkedin: "https://www.linkedin.com/in/santiagoav-0206",
    github: "https://github.com/dragosani24",
    summary: "Experto en Tecnologías y Sistemas de Información con más de 10 años de experiencia como Desarrollador Full Stack, trabajando en desarrollo front-end y back-end, así como diseño y administración de aplicaciones web y móviles. A lo largo de mi carrera, he liderado desarrollos de punta a punta que mejoran la entrega de productos, optimizan el rendimiento y fortalecen la seguridad de las aplicaciones."
  }
};

export const keywords = {
  en: ["Full Stack Developer", "Java Spring Boot", "AI Agents", "Laravel", "Vue.js", "React", "AWS & GCP", "Android / Kotlin", "CI/CD", "PostgreSQL"],
  es: ["Desarrollador Full Stack", "Java Spring Boot", "Agentes de IA", "Laravel", "Vue.js", "React", "AWS & GCP", "Android / Kotlin", "CI/CD", "PostgreSQL"]
};

export const getBenefitsData = (lang) => {
  if (lang === 'en') {
    return [
      {
        metric: "80%",
        description: "Faster software delivery via CI/CD pipelines",
        detail: "Implemented CI/CD practices that reduced errors and deployment times by over 80%, parallelizing CI workflows to minimize cloud costs."
      },
      {
        metric: "10+",
        description: "Years of Full Stack & Systems Engineering",
        detail: "Over a decade architecting high-impact web and mobile solutions with Java Spring Boot, Laravel, Vue.js, React, Node.js, and Python."
      },
      {
        metric: "AI",
        description: "AI Agent Engineering & Rekognition Integration",
        detail: "Engineered autonomous AI agents with custom skills, built custom CLI developer assistants, and deployed facial recognition systems."
      },
      {
        metric: "Cloud",
        description: "Multi-Cloud DevOps (AWS, Azure & GCP)",
        detail: "Infrastructure management and automated deployments across AWS (Rekognition, EC2, Lambda), Azure, GCP, and Docker containers."
      },
      {
        metric: "Core APIs",
        description: "Framework Decoupling & Cryptographic Security",
        detail: "Led core framework centralization and decoupling, implemented design patterns for logging, and deployed Galois/Counter Mode (GCM) encryption."
      },
      {
        metric: "Mobile",
        description: "Native Android App Development",
        detail: "Created performant native Android mobile applications in Kotlin and Java with biometric AI recognition and REST backend integration."
      }
    ];
  }
  return [
    {
      metric: "80%",
      description: "Entrega más rápida de software mediante CI/CD",
      detail: "Implementé prácticas de CI/CD que redujeron errores y tiempos de despliegue en más del 80%, paralelizando flujos para optimizar costos en la nube."
    },
    {
      metric: "10+",
      description: "Años de experiencia Full Stack y Sistemas",
      detail: "Más de una década diseñando soluciones web y móviles con Java Spring Boot, Laravel, Vue.js, React, Node.js y Python."
    },
    {
      metric: "IA",
      description: "Ingeniería de Agentes de IA y Rekognition",
      detail: "Diseñé agentes de IA con custom skills, desarrollé asistentes CLI para optimizar flujos de desarrollo e integré reconocimiento facial."
    },
    {
      metric: "Cloud",
      description: "DevOps Multi-Cloud (AWS, Azure y GCP)",
      detail: "Gestión de infraestructura y despliegues automatizados en AWS (Rekognition, EC2, Lambda), Azure, GCP y contenedores Docker."
    },
    {
      metric: "Core APIs",
      description: "Desacoplamiento de Framework y Seguridad Criptográfica",
      detail: "Centralicé y desacoplé APIs centrales, implementé patrones de diseño para logging y modelo de encriptación GCM (Galois/Counter Mode)."
    },
    {
      metric: "Mobile",
      description: "Desarrollo Nativo Android (Kotlin y Java)",
      detail: "Creé aplicaciones móviles nativas para Android en Kotlin y Java con reconocimiento biométrico por IA e integración de APIs REST."
    }
  ];
};

export const getTimelineData = (lang) => {
  if (lang === 'en') {
    return [
      {
        period: "September 2025 – Present",
        role: "Full Stack Developer",
        company: "Kairos DS (Client: Coppel)",
        location: "Culiacan, Sinaloa, Mexico",
        description: "Driving the core API decoupling and framework centralization project, engineering AI agents with custom skills for developer productivity, and strengthening legacy business logic and cryptographic security.",
        technologies: "Java Spring Boot, PostgreSQL, C#, AI Agents, Custom Skills, CLI Developer Assistant, GCM Encryption, Azure, GCP, Jira, Scrum, Git / GitHub",
        achievements: "Developed and updated APIs for the decoupling and centralization project of the core API framework (Java Spring Boot / PostgreSQL)|Implemented design patterns to improve logging decoupling (Java Spring Boot)|Implemented the GCM (Galois/Counter Mode) encryption model for robust cryptographic security|Developed new business logic for legacy core systems (C# / PostgreSQL)|Engineered and managed AI agents, incorporating custom skills to optimize development workflows|Built a custom CLI AI agent designed to serve as an autonomous developer assistant|Updated and refined development requirements and sprint tasks using Jira under Scrum methodology|Utilized Azure and GCP cloud management tools, and applied Git branching strategies (GitHub / Azure)"
      },
      {
        period: "November 2015 – March 2025",
        role: "Lead FrontEnd and Backend Architect",
        company: "Grupo Salus",
        location: "Mexico City, Mexico",
        description: "Architected and engineered the complete web and mobile product ecosystem, leading full-stack development, AWS cloud infrastructure, AI biometric recognition, and automated CI/CD pipelines.",
        technologies: "Laravel, Vue.js, Laravel Nova, AWS (Rekognition, EC2, Lambda), Docker, CI/CD, Bitbucket Pipelines, Jenkins, Kotlin, Java, Android SDK, MySQL, REST APIs",
        achievements: "Developed the complete web application for both Frontend (Laravel Nova | Vue.js) and Backend (Laravel)|Implemented AI-based person recognition systems using Amazon Rekognition for web and Android applications|Implemented CI/CD practices to improve software delivery efficiency, reducing errors and deployment times by over 80%|Parallelized CI workflows to save execution time and operational costs while scaling AWS solutions|Created native mobile applications for Android using Java and Kotlin|Deployed and managed DevOps infrastructure (cloud servers, automated CI/CD, and production deployments)|Collaborated in multidisciplinary teams following Agile and Scrum methodologies"
      },
      {
        period: "July 2013 – August 2014",
        role: "Systems Coordinator",
        company: "Cistel",
        location: "Mexico City, Mexico",
        description: "Coordinated systems maintenance, managed internal server infrastructure, and ensured high hardware and software availability across the organization.",
        technologies: "Server Administration, Linux/Windows Servers, Hardware/Software Maintenance, System Optimization, IT Technical Support",
        achievements: "Optimized and configured servers within the organization to maximize reliability and uptime|Performed scheduled preventive and corrective server maintenance|Installed and tuned specialized software for equipment maintenance and performance|Provided comprehensive technical support and troubleshooting to staff"
      },
      {
        period: "July 2009 – August 2012",
        role: "Systems Coordinator",
        company: "Mediaccess",
        location: "Mexico City, Mexico",
        description: "Planned and orchestrated the IT infrastructure rollout for the Clinics division nationwide, integrating healthcare insurance platforms and managing vendors and technology assets.",
        technologies: "IT Infrastructure Planning, System Integration, GNP Seguros Integration, Asset Management, Clinic Management Systems, IT Vendor Management",
        achievements: "Planned the IT infrastructure for the Clinics division across multiple locations in Mexico|Integrated GNP Seguros software into Mediaccess clinic systems for seamless claims and patient processing|Coordinated the installation and commissioning of all necessary IT infrastructure for clinical centers|Managed IT assets, equipment lifecycle, and oversaw technology vendors for Mediaccess clinics"
      }
    ];
  }
  return [
    {
      period: "Septiembre 2025 – Presente",
      role: "Desarrollador Full Stack",
      company: "Kairos DS (Cliente: Coppel)",
      location: "Culiacán, Sinaloa, México",
      description: "Impulsando el proyecto de desacoplamiento y centralización del framework core de APIs, diseñando agentes de IA con custom skills para productividad de desarrollo, e implementando seguridad criptográfica y lógica de negocio.",
      technologies: "Java Spring Boot, PostgreSQL, C#, Agentes de IA, Custom Skills, CLI Asistente de Desarrollo, Encriptación GCM, Azure, GCP, Jira, Scrum, Git / GitHub",
      achievements: "Desarrollé y actualicé APIs para el proyecto de desacoplamiento y centralización del framework core (Java Spring Boot / PostgreSQL)|Implementé patrones de diseño para mejorar el desacoplamiento de logging (Java Spring Boot)|Implementé el modelo de encriptación GCM (Galois/Counter Mode) para máxima seguridad criptográfica|Desarrollé nueva lógica de negocio para el sistema legacy (C# / PostgreSQL)|Diseñé y gestioné agentes de IA, incorporando custom skills para optimizar flujos de desarrollo|Construí un agente de IA en CLI personalizado diseñado para servir como asistente de desarrollo|Actualicé y refiné requerimientos de desarrollo y seguimiento de tareas en Jira bajo marco Scrum|Utilicé herramientas de gestión en la nube Azure y GCP, aplicando estrategia de ramas Git (GitHub / Azure)"
    },
    {
      period: "Noviembre 2015 – Marzo 2025",
      role: "Arquitecto Líder FrontEnd y Backend",
      company: "Grupo Salus",
      location: "Ciudad de México, México",
      description: "Diseñé y lideré la arquitectura del ecosistema completo web y móvil, desarrollo full-stack, infraestructura en AWS, reconocimiento facial biométrico con IA y automatización DevOps.",
      technologies: "Laravel, Vue.js, Laravel Nova, AWS (Rekognition, EC2, Lambda), Docker, CI/CD, Bitbucket Pipelines, Jenkins, Kotlin, Java, Android SDK, MySQL, REST APIs",
      achievements: "Desarrollé la aplicación web completa tanto para Frontend (Laravel Nova | Vue.js) como Backend (Laravel)|Implementé sistemas de reconocimiento de personas basados en IA mediante Amazon Rekognition para web y Android|Implementé prácticas de CI/CD para mejorar la eficiencia de entrega, reduciendo errores y tiempos de despliegue en más del 80%|Paralelicé flujos de trabajo de CI para ahorrar tiempo y costos al escalar soluciones en AWS|Creé aplicaciones móviles nativas para Android utilizando Java y Kotlin|Desplegué y administré infraestructura DevOps integral (servidores, CI/CD y despliegues en la nube)|Colaboré en equipos multidisciplinarios siguiendo metodologías ágiles"
    },
    {
      period: "Julio 2013 – Agosto 2014",
      role: "Coordinador de Sistemas",
      company: "Cistel",
      location: "Ciudad de México, México",
      description: "Coordinación del mantenimiento de sistemas, gestión de infraestructura de servidores y garantía de disponibilidad de hardware y software a nivel organizacional.",
      technologies: "Administración de Servidores, Servidores Linux/Windows, Mantenimiento de Hardware/Software, Optimización de Sistemas, Soporte Técnico IT",
      achievements: "Optimicé y configuré servidores dentro de la organización asegurando alta disponibilidad|Realicé mantenimiento preventivo y correctivo de servidores críticos|Instalé y configuré software para mantenimiento y alto rendimiento de equipos|Brindé soporte técnico integral y resolución de incidencias a todo el personal"
    },
    {
      period: "Julio 2009 – Agosto 2012",
      role: "Coordinador de Sistemas",
      company: "Mediaccess",
      location: "Ciudad de México, México",
      description: "Planeación e implementación de infraestructura IT para la red de clínicas a nivel nacional, integración de sistemas de aseguradoras y gestión de activos y proveedores tecnológicos.",
      technologies: "Planeación de Infraestructura IT, Integración de Sistemas, Integración GNP Seguros, Gestión de Activos, Sistemas Clínicos, Gestión de Proveedores",
      achievements: "Planifiqué la infraestructura IT para la división de Clínicas en múltiples sedes en México|Integré el software de GNP Seguros en el sistema de clínicas de Mediaccess para agilizar procesos médicos|Coordiné la instalación y puesta en marcha de toda la infraestructura IT para las clínicas|Gestioné activos de TI y supervisé contratos con proveedores tecnológicos para clínicas Mediaccess"
    }
  ];
};

export const getSkillsData = (lang) => {
  if (lang === 'en') {
    return [
      {
        category: "Frontend",
        icon: "layout",
        skills: ["Vue.js", "React", "Laravel Nova", "HTML5 / CSS3", "Tailwind CSS", "JavaScript (ES6+)"]
      },
      {
        category: "Backend & Architecture",
        icon: "server",
        skills: ["Java Spring Boot", "Laravel", "Node.js", "Python", "C#", "REST APIs", "Microservices", "GCM Encryption"]
      },
      {
        category: "AI & Innovation",
        icon: "brain",
        skills: ["AI Agents Engineering", "Custom Agent Skills", "Developer CLI AI Assistant", "Amazon Rekognition", "AI/ML Integration"]
      },
      {
        category: "Cloud & DevOps",
        icon: "cloud",
        skills: ["AWS (Rekognition, EC2, Lambda)", "Azure", "GCP", "CI/CD (Bitbucket Pipelines, Jenkins)", "Docker"]
      },
      {
        category: "Mobile",
        icon: "smartphone",
        skills: ["Android SDK", "Kotlin", "Java", "Mobile AI Integration"]
      },
      {
        category: "Databases & Methodologies",
        icon: "database",
        skills: ["PostgreSQL", "MySQL", "Firebase", "Agile / Scrum", "Jira", "Git / GitHub / Azure DevOps", "TDD"]
      }
    ];
  }
  return [
    {
      category: "Frontend",
      icon: "layout",
      skills: ["Vue.js", "React", "Laravel Nova", "HTML5 / CSS3", "Tailwind CSS", "JavaScript (ES6+)"]
    },
    {
      category: "Backend y Arquitectura",
      icon: "server",
      skills: ["Java Spring Boot", "Laravel", "Node.js", "Python", "C#", "APIs REST", "Microservicios", "Encriptación GCM"]
    },
    {
      category: "IA e Innovación",
      icon: "brain",
      skills: ["Ingeniería de Agentes de IA", "Custom Skills para Agentes", "Asistente CLI de IA para Devs", "Amazon Rekognition", "Integración IA/ML"]
    },
    {
      category: "Cloud y DevOps",
      icon: "cloud",
      skills: ["AWS (Rekognition, EC2, Lambda)", "Azure", "GCP", "CI/CD (Bitbucket Pipelines, Jenkins)", "Docker"]
    },
    {
      category: "Móvil",
      icon: "smartphone",
      skills: ["Android SDK", "Kotlin", "Java", "Integración de IA en Móvil"]
    },
    {
      category: "Bases de Datos y Metodologías",
      icon: "database",
      skills: ["PostgreSQL", "MySQL", "Firebase", "Agile / Scrum", "Jira", "Git / GitHub / Azure DevOps", "TDD"]
    }
  ];
};

export const getEducationData = (lang) => {
  if (lang === 'en') {
    return {
      title: "Education & Additional Skills",
      subtitle: "Academic Background and Languages",
      degree: {
        title: "Bachelor's Degree in Information Technologies and Systems",
        institution: "Universidad Autónoma de México",
        location: "Mexico City, Mexico",
        date: "July 2011",
        description: "Comprehensive education in software engineering, system architecture, data management, and computing infrastructure."
      },
      languages: [
        { language: "Spanish", level: "Native speaker", badge: "Native" },
        { language: "English", level: "Professional Working Proficiency", badge: "B2 Level" }
      ],
      methodologies: [
        "Agile / Scrum Methodology",
        "Jira Task & Requirement Tracking",
        "Git Branching Strategies (GitHub / Azure)",
        "TDD & Clean Architecture"
      ]
    };
  }
  return {
    title: "Educación y Habilidades",
    subtitle: "Formación Académica e Idiomas",
    degree: {
      title: "Licenciatura en Tecnologías y Sistemas de Información",
      institution: "Universidad Autónoma de México",
      location: "Ciudad de México, México",
      date: "Julio 2011",
      description: "Formación integral en ingeniería de software, arquitectura de sistemas, gestión de datos e infraestructura computacional."
    },
    languages: [
      { language: "Español", level: "Hablante Nativo", badge: "Nativo" },
      { language: "Inglés", level: "Competencia Profesional de Trabajo", badge: "Nivel B2" }
    ],
    methodologies: [
      "Metodología Agile / Scrum",
      "Seguimiento de Tareas y Requerimientos con Jira",
      "Estrategias de Ramas Git (GitHub / Azure)",
      "TDD y Arquitectura Limpia"
    ]
  };
};

export const contact = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project or technical challenge",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSuccess: "Message sent successfully! I'll get back to you soon.",
    formOpenEmail: "Your email app will open with the message ready to send.",
    formError: "Failed to send message. Please try again."
  },
  es: {
    title: "Contacto",
    subtitle: "Hablemos sobre tu próximo proyecto o desafío técnico",
    formName: "Tu Nombre",
    formEmail: "Tu Email",
    formMessage: "Tu Mensaje",
    formSubmit: "Enviar Mensaje",
    formSuccess: "¡Mensaje enviado exitosamente! Te responderé pronto.",
    formOpenEmail: "Se abrirá tu aplicación de correo con el mensaje listo para enviar.",
    formError: "Error al enviar mensaje. Por favor intenta de nuevo."
  }
};

export const footer = {
  en: {
    rights: "All rights reserved.",
    designed: "Designed & Built by Santiago Avilés"
  },
  es: {
    rights: "Todos los derechos reservados.",
    designed: "Diseñado y Desarrollado por Santiago Avilés"
  }
};