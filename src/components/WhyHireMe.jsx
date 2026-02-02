import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getBenefitsData } from '../data/mock';
import { TrendingUp, Code, Brain, Cloud, Layers, Users } from 'lucide-react';

const WhyHireMe = () => {
  const { language } = useLanguage();
  const benefits = getBenefitsData(language);
  const title = language === 'en' ? 'Why Hire Me' : 'Por Qué Contratarme';
  const subtitle = language === 'en' ? 'Measurable Impact & Technical Excellence' : 'Impacto Medible y Excelencia Técnica';

  const getIcon = (metric) => {
    if (metric === '80%') return TrendingUp;
    if (metric === '10+') return Code;
    if (metric === 'AI/ML' || metric === 'IA/ML') return Brain;
    if (metric === 'DevOps') return Cloud;
    if (metric === 'Full Stack') return Layers;
    if (metric === 'Agile') return Users;
    return Code;
  };

  return (
    <section id="why-me" className="why-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{subtitle}</p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = getIcon(benefit.metric);
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <Icon size={32} />
                </div>
                <div className="benefit-content">
                  <div className="benefit-metric">{benefit.metric}</div>
                  <h3 className="benefit-title">{benefit.description}</h3>
                  <p className="benefit-detail">{benefit.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;