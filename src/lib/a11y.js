// Permite activar con Enter / Espacio los elementos clickeables que no son <button>.
export function onActivate(e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    e.currentTarget.click();
  }
}
