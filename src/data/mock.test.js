import { personalInfo, footer, keywords } from './mock';

test('personalInfo tiene los datos mínimos en ambos idiomas', () => {
  ['en', 'es'].forEach((lang) => {
    expect(personalInfo[lang].name).toBeTruthy();
    expect(personalInfo[lang].email).toMatch(/@/);
    expect(personalInfo[lang].title).toBeTruthy();
  });
});

test('no se expone el teléfono en los datos públicos', () => {
  ['en', 'es'].forEach((lang) => {
    expect(personalInfo[lang].phone).toBeUndefined();
  });
});

test('footer y keywords están traducidos', () => {
  ['en', 'es'].forEach((lang) => {
    expect(footer[lang].rights).toBeTruthy();
    expect(keywords[lang].length).toBeGreaterThan(0);
  });
});
