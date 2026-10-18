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
  expect(container.querySelector('#contact')).not.toBeNull();

  // El formulario de contacto existe y tiene los 3 campos
  const form = container.querySelector('.contact-form');
  expect(form).not.toBeNull();
  expect(form.querySelectorAll('input, textarea').length).toBe(3);

  // Todos los labels están vinculados a su campo (accesibilidad básica)
  form.querySelectorAll('label').forEach((label) => {
    const id = label.getAttribute('for');
    expect(id).toBeTruthy();
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  });
});
