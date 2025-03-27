// Efeito de scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Simulação de envio de formulário
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Entrarei em contato em breve.');
  this.reset();
});