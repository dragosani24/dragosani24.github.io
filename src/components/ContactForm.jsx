import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contact } from '../data/mock';
import { useToast } from '../hooks/use-toast';

const ContactForm = () => {
  const { language } = useLanguage();
  const content = contact[language];
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const submissions = JSON.parse(localStorage.getItem('contact-submissions') || '[]');
      submissions.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('contact-submissions', JSON.stringify(submissions));

      toast({
        title: language === 'en' ? 'Success!' : '¡Éxito!',
        description: content.formSuccess,
        duration: 5000,
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: language === 'en' ? 'Error' : 'Error',
        description: content.formError,
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const placeholderName = language === 'en' ? 'John Doe' : 'Juan Pérez';
  const placeholderEmail = language === 'en' ? 'john@example.com' : 'juan@ejemplo.com';
  const placeholderMessage = language === 'en' ? 'Tell me about your project...' : 'Cuéntame sobre tu proyecto...';
  const sendingText = language === 'en' ? 'Sending...' : 'Enviando...';

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">{content.title}</h2>
          <p className="section-subtitle">{content.subtitle}</p>
        </div>

        <div className="contact-wrapper">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">{content.formName}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={placeholderName}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">{content.formEmail}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder={placeholderEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{content.formMessage}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-textarea"
                placeholder={placeholderMessage}
              />
            </div>

            <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
              {isSubmitting ? sendingText : content.formSubmit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;