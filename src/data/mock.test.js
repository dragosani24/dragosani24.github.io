import { personalInfo, contact, footer, keywords } from './mock';

test('personalInfo tiene los datos mínimos en ambos idiomas', () => {
  ['en', 'es'].forEach((lang) => {
    expect(personalInfo[lang].name).toBeTruthy();
    expect(personalInfo[lang].email).toMatch(/@/);
    expect(personalInfo[lang].title).toBeTruthy();
  });
});

test('los textos del formulario existen en ambos idiomas', () => {
  ['en', 'es'].forEach((lang) => {
    ['title', 'formName', 'formEmail', 'formMessage', 'formSubmit', 'formSuccess', 'formOpenEmail', 'formError']
      .forEach((key) => {
        expect(contact[lang][key]).toBeTruthy();
      });
  });
});

test('footer y keywords están traducidos', () => {
  ['en', 'es'].forEach((lang) => {
    expect(footer[lang].rights).toBeTruthy();
    expect(keywords[lang].length).toBeGreaterThan(0);
  });
});
