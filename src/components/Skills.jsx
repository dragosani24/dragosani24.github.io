import { useLanguage } from '../context/LanguageContext';
import { getSkillsData } from '../data/mock';
import { Layout, Server, Brain, Cloud, Smartphone, Database, CheckCircle2 } from 'lucide-react';

const Skills = () => {
  const { language } = useLanguage();
  const skillsCategories = getSkillsData(language);
  const title = language === 'en' ? 'Technical Skills' : 'Habilidades Técnicas';
  const subtitle = language === 'en' 
    ? 'Comprehensive stack across frontend, backend, AI agents, cloud, and mobile' 
    : 'Stack tecnológico integral en frontend, backend, agentes de IA, nube y móvil';

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'layout': return Layout;
      case 'server': return Server;
      case 'brain': return Brain;
      case 'cloud': return Cloud;
      case 'smartphone': return Smartphone;
      case 'database': return Database;
      default: return Server;
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="skills-grid">
          {skillsCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            return (
              <div key={idx} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-category-icon">
                    <Icon size={26} />
                  </div>
                  <h3 className="skill-category-title">{cat.category}</h3>
                </div>

                <div className="skill-items-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item-badge">
                      <CheckCircle2 size={14} className="skill-item-icon" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
