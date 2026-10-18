import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';

let container;
let root;

beforeEach(() => {
  localStorage.clear();
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const Probe = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{language}</span>
      <button type="button" onClick={toggleLanguage}>toggle</button>
    </div>
  );
};

const renderProvider = async () => {
  await act(async () => {
    root.render(
      <LanguageProvider>
        <Probe />
      </LanguageProvider>
    );
  });
};

const currentLang = () => container.querySelector('[data-testid="lang"]').textContent;

test('usa español por defecto y lo persiste en localStorage', async () => {
  await renderProvider();

  expect(currentLang()).toBe('es');
  expect(localStorage.getItem('portfolio-language')).toBe('es');
});

test('ignora valores corruptos de localStorage en lugar de romper la app', async () => {
  localStorage.setItem('portfolio-language', 'valor-inexistente');

  await renderProvider();

  expect(currentLang()).toBe('es');
});

test('lee el idioma guardado y sincroniza document.documentElement.lang', async () => {
  localStorage.setItem('portfolio-language', 'en');

  await renderProvider();

  expect(currentLang()).toBe('en');
  expect(document.documentElement.lang).toBe('en');
});

test('alterna entre en/es', async () => {
  await renderProvider();

  await act(async () => {
    container.querySelector('button').dispatchEvent(new MouseEvent('click', { bubbles: true }));
  });

  expect(currentLang()).toBe('en');
  expect(document.documentElement.lang).toBe('en');
});
