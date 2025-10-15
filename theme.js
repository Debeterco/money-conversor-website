// Alternância entre modo escuro e claro
const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Carrega preferência salva
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  toggle.textContent = '☀️';
}

// Evento de clique no botão
toggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});