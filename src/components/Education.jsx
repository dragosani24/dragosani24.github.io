import { useLanguage } from '../context/LanguageContext';
import { getEducationData } from '../data/mock';
import { GraduationCap, Languages, Check, Award, MapPin, Calendar } from 'lucide-react';

const Education = () => {
  const { language } = useLanguage();
  const data = getEducationData(language);

  return (
    <section id="education" className="education-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{data.title}</h2>
          <p className="section-subtitle">{data.subtitle}</p>
        </div>

        <div className="education-grid">
          {/* Degree Card */}
          <div className="education-card degree-card">
            <div className="card-top-icon">
              <GraduationCap size={36} />
            </div>
            <div className="degree-header">
              <span className="degree-badge">
                {language === 'en' ? "Bachelor's Degree" : 'Licenciatura'}
              </span>
              <h3 className="degree-title">{data.degree.title}</h3>
              <p className="degree-institution">{data.degree.institution}</p>
            </div>
            
            <div className="degree-meta">
              <span className="meta-item">
                <MapPin size={16} />
                <span>{data.degree.location}</span>
              </span>
              <span className="meta-item">
                <Calendar size={16} />
                <span>{data.degree.date}</span>
              </span>
            </div>

            <p className="degree-description">{data.degree.description}</p>
          </div>

          {/* Languages & Practices Card */}
          <div className="education-card languages-card">
            <div className="card-top-icon">
              <Languages size={36} />
            </div>
            
            <h3 className="card-title">
              {language === 'en' ? 'Languages' : 'Idiomas'}
            </h3>

            <div className="languages-list">
              {data.languages.map((langItem, idx) => (
                <div key={idx} className="language-row">
                  <div className="language-info">
                    <span className="language-name">{langItem.language}</span>
                    <span className="language-level">{langItem.level}</span>
                  </div>
                  <span className="language-badge">{langItem.badge}</span>
                </div>
              ))}
            </div>

            <div className="methodologies-block">
              <h4 className="methodologies-title">
                <Award size={18} />
                <span>{language === 'en' ? 'Agile & Best Practices' : 'Metodologías y Buenas Prácticas'}</span>
              </h4>
              <ul className="methodologies-list">
                {data.methodologies.map((item, idx) => (
                  <li key={idx}>
                    <Check size={16} className="check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
