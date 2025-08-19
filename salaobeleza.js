// script.js

// Exemplo: adicionar callback para navegação no menu se quiser animar algo

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Evita comportamento padrão para melhorar controle (opcional)
    e.preventDefault();

    const targetID = this.getAttribute('href').substr(1);
    const targetSection = document.getElementById(targetID);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
