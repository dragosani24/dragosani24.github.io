import { createRoot } from 'react-dom/client';
import { act } from 'react';
import App from './App';

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

test('renderiza la aplicación completa sin lanzar errores', async () => {
  await act(async () => {
    root.render(<App />);
  });

  // Encabezado principal y secciones clave
  expect(container.querySelector('h1')).not.toBeNull();
  expect(container.querySelector('#why-me')).not.toBeNull();
  expect(container.querySelector('#journey')).not.toBeNull();
  expect(container.querySelector('#skills')).not.toBeNull();
  expect(container.querySelector('#education')).not.toBeNull();
});

test('no quedan enlaces internos rotos hacia #contact', async () => {
  await act(async () => {
    root.render(<App />);
  });

  const roto = Array.from(container.querySelectorAll('a[href^="#"]'))
    .map((a) => a.getAttribute('href'))
    .filter((href) => href !== '#' && !container.querySelector(href));

  expect(roto).toEqual([]);
});

test('la navegación del header está formada por enlaces accesibles', async () => {
  await act(async () => {
    root.render(<App />);
  });

  const nav = container.querySelector('.desktop-nav');
  expect(nav).not.toBeNull();
  nav.querySelectorAll('a').forEach((a) => {
    expect(a.textContent.trim()).not.toBe('');
    expect(a.getAttribute('href')).toMatch(/^#/);
  });
});
