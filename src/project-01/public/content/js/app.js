const isDevelopment =
  location.hostname === 'localhost' ||
  location.hostname.startsWith('192.168.') ||
  location.hostname === '127.0.0.1';

// Registro de Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => {
      console.log('[App] SW registrado', reg);
    })
    .catch(err => console.error('[App] Error registrando SW:', err));
}
