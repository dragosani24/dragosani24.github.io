import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTimelineData } from '../data/mock';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Timeline = () => {
  const { language } = useLanguage();
  const events = getTimelineData(language);
  const [expandedIndex, setExpandedIndex] = useState(0);
  
  const title = language === 'en' ? 'Career Journey' : 'Trayectoria Profesional';
  const subtitle = language === 'en' ? 'Evolution & Technologies' : 'Evolución y Tecnologías';
  const achievementsLabel = language === 'en' ? 'Key Achievements:' : 'Logros Clave:';
  const technologiesLabel = language === 'en' ? 'Technologies:' : 'Tecnologías:';

  const toggleExpanded = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="journey" className="timeline-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="timeline-wrapper">
          {events.map((event, index) => {
            const techList = event.technologies.split(', ');
            const achievementsList = event.achievements.split('|');
            
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                  {index !== events.length - 1 && <div className="timeline-line"></div>}
                </div>

                <div className="timeline-content">
                  <div
                    className="timeline-header"
                    role="button"
                    tabIndex={0}
                    aria-expanded={expandedIndex === index}
                    aria-controls={`timeline-details-${index}`}
                    onClick={() => toggleExpanded(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExpanded(index);
                      }
                    }}
                  >
                    <div className="timeline-meta">
                      <span className="timeline-period">{event.period}</span>
                      <h3 className="timeline-role">{event.role}</h3>
                      <p className="timeline-company">{event.company} • {event.location}</p>
                    </div>
                    <span className="timeline-toggle" aria-hidden="true">
                      {expandedIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </span>
                  </div>

                  {expandedIndex === index && (
                    <div className="timeline-details" id={`timeline-details-${index}`}>
                      <p className="timeline-description">{event.description}</p>

                      <div className="timeline-achievements">
                        <h4 className="achievements-title">{achievementsLabel}</h4>
                        <ul className="achievements-list">
                          {achievementsList.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="timeline-technologies">
                        <h4 className="technologies-title">{technologiesLabel}</h4>
                        <div className="tech-tags">
                          {techList.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;