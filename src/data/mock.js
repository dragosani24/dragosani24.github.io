// Simplified mock data structure

export const personalInfo = {
  en: {
    name: "Santiago Avilés Vázquez",
    title: "Full Stack Developer",
    location: "Sinaloa, México",
    email: "santiagoav@gmail.com",
    phone: "+52 55 27 44 06 92",
    linkedin: "https://www.linkedin.com/in/santiagoav-0206",
    github: "https://github.com/dragosani24",
    summary: "Over 10 years of experience as a Full Stack Developer. Led FrontEnd and Backend development at Grupo Salus, achieving improvements in product delivery, web performance, and a unified platform."
  },
  es: {
    name: "Santiago Avilés Vázquez",
    title: "Desarrollador Full Stack",
    location: "Sinaloa, México",
    email: "santiagoav@gmail.com",
    phone: "+52 55 27 44 06 92",
    linkedin: "https://www.linkedin.com/in/santiagoav-0206",
    github: "https://github.com/dragosani24",
    summary: "Más de 10 años de experiencia como Desarrollador Full Stack. Lideré el desarrollo FrontEnd y Backend en Grupo Salus, logrando la mejora en la entrega de productos, el rendimiento web y una plataforma unificada."
  }
};

export const keywords = {
  en: ["Full Stack Developer", "Laravel", "Vue.js", "AWS", "Kotlin", "CI/CD", "React", "Docker", "Python", "Node.js"],
  es: ["Desarrollador Full Stack", "Laravel", "Vue.js", "AWS", "Kotlin", "CI/CD", "React", "Docker", "Python", "Node.js"]
};

export const getBenefitsData = (lang) => {
  if (lang === 'en') {
    return [
      { metric: "80%", description: "Faster software delivery through CI/CD implementation", detail: "Reduced deployment errors and delivery times significantly" },
      { metric: "10+", description: "Years of Full Stack Development Experience", detail: "Laravel, Vue.js, React, Node.js, Python, and mobile development" },
      { metric: "AI/ML", description: "Applied AI Experience with AWS Rekognition", detail: "Implemented person recognition systems for web and Android" },
      { metric: "DevOps", description: "Complete Infrastructure Management", detail: "AWS, Docker, CI/CD pipelines, server administration" },
      { metric: "Full Stack", description: "End-to-End Development Capability", detail: "Frontend, Backend, Mobile (Android), and Cloud infrastructure" },
      { metric: "Agile", description: "Collaborative Team Player", detail: "Experience with agile methodologies and multidisciplinary teams" }
    ];
  }
  return [
    { metric: "80%", description: "Entrega de software más rápida mediante CI/CD", detail: "Reducción significativa de errores de despliegue y tiempos de entrega" },
    { metric: "10+", description: "Años de Experiencia en Desarrollo Full Stack", detail: "Laravel, Vue.js, React, Node.js, Python y desarrollo móvil" },
    { metric: "IA/ML", description: "Experiencia en IA Aplicada con AWS Rekognition", detail: "Implementación de sistemas de reconocimiento facial para web y Android" },
    { metric: "DevOps", description: "Gestión Completa de Infraestructura", detail: "AWS, Docker, pipelines CI/CD, administración de servidores" },
    { metric: "Full Stack", description: "Capacidad de Desarrollo End-to-End", detail: "Frontend, Backend, Móvil (Android) e infraestructura en la nube" },
    { metric: "Agile", description: "Colaborador en Equipos Multidisciplinarios", detail: "Experiencia con metodologías ágiles y trabajo en equipo" }
  ];
};

export const getTimelineData = (lang) => {
  if (lang === 'en') {
    return [
      {
        period: "2015 - 2025",
        role: "Full Stack Developer",
        company: "Grupo Salus",
        location: "Mexico City, Mexico",
        description: "Led complete web application development with Frontend and Backend. Implemented AI recognition systems and DevOps infrastructure.",
        technologies: "Laravel, Vue.js, Laravel Nova, AWS Rekognition, CI/CD, Bitbucket Pipelines, Docker, Kotlin, Java, Android SDK, MySQL, REST APIs",
        achievements: "Implemented CI/CD reducing delivery times by 80%|Developed AI person recognition with Amazon Rekognition|Built native Android applications|Optimized system performance and scalability"
      },
      {
        period: "2013 - 2014",
        role: "Systems Coordinator",
        company: "Cistel",
        location: "Mexico City, Mexico",
        description: "Optimized and configured servers, provided maintenance and software installation support.",
        technologies: "Server Administration, System Optimization, IT Support",
        achievements: "Optimized server configurations|Maintained critical infrastructure|Provided technical support organization-wide"
      },
      {
        period: "2009 - 2012",
        role: "Systems Coordinator",
        company: "Mediaccess",
        location: "Mexico City, Mexico",
        description: "Planned IT infrastructure for multiple clinic locations across Mexico.",
        technologies: "IT Infrastructure, System Integration, Asset Management, Vendor Management",
        achievements: "Planned IT infrastructure for clinics nationwide|Integrated GNP Seguros software into clinic systems|Coordinated complete IT infrastructure installations|Managed IT assets and vendor relationships"
      }
    ];
  }
  return [
    {
      period: "2015 - 2025",
      role: "Desarrollador Full Stack",
      company: "Grupo Salus",
      location: "Ciudad de México, México",
      description: "Lideré el desarrollo completo de aplicación web con Frontend y Backend. Implementé sistemas de reconocimiento con IA e infraestructura DevOps.",
      technologies: "Laravel, Vue.js, Laravel Nova, AWS Rekognition, CI/CD, Bitbucket Pipelines, Docker, Kotlin, Java, Android SDK, MySQL, REST APIs",
      achievements: "Implementé CI/CD reduciendo tiempos de entrega en 80%|Desarrollé reconocimiento de personas con Amazon Rekognition|Creé aplicaciones nativas para Android|Optimicé rendimiento y escalabilidad del sistema"
    },
    {
      period: "2013 - 2014",
      role: "Coordinador de Sistemas",
      company: "Cistel",
      location: "Ciudad de México, México",
      description: "Optimicé y configuré servidores, proporcioné mantenimiento y soporte de instalación de software.",
      technologies: "Administración de Servidores, Optimización de Sistemas, Soporte IT",
      achievements: "Optimicé configuraciones de servidores|Mantuve infraestructura crítica|Proporcioné soporte técnico a toda la organización"
    },
    {
      period: "2009 - 2012",
      role: "Coordinador de Sistemas",
      company: "Mediaccess",
      location: "Ciudad de México, México",
      description: "Planifiqué infraestructura IT para múltiples clínicas en todo México.",
      technologies: "Infraestructura IT, Integración de Sistemas, Gestión de Activos, Gestión de Proveedores",
      achievements: "Planifiqué infraestructura IT para clínicas a nivel nacional|Integré software GNP Seguros en sistemas de clínicas|Coordiné instalaciones completas de infraestructura IT|Gestioné activos IT y relaciones con proveedores"
    }
  ];
};

export const contact = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project",
    formName: "Your Name",
    formEmail: "Your Email",
    formMessage: "Your Message",
    formSubmit: "Send Message",
    formSuccess: "Message sent successfully! I'll get back to you soon.",
    formError: "Failed to send message. Please try again."
  },
  es: {
    title: "Contacto",
    subtitle: "Hablemos sobre tu próximo proyecto",
    formName: "Tu Nombre",
    formEmail: "Tu Email",
    formMessage: "Tu Mensaje",
    formSubmit: "Enviar Mensaje",
    formSuccess: "¡Mensaje enviado exitosamente! Te responderé pronto.",
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