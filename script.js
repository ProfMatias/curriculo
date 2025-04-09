// Efeito de scroll suave para links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

/* Simulação de envio de formulário
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Mensagem enviada! Entrarei em contato em breve.');
  this.reset();
});*/
/*document.getElementById("meuFormulario").addEventListener("submit", async (e) => {
  e.preventDefault();
  const statusMensagem = document.getElementById("status-mensagem");
  statusMensagem.textContent = "Enviando...";

  const formData = new FormData(e.target);
  const response = await fetch("https://formspree.io/f/https://formspree.io/f/xdkeyedd", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem")
    })
  });

  if (response.ok) {
    statusMensagem.textContent = "Mensagem enviada! Obrigado!";
    e.target.reset();
  } else {
    statusMensagem.textContent = "Erro ao enviar. Tente novamente.";
  }*/
});
