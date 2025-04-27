document.addEventListener('DOMContentLoaded', function() {
    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (!anchor.target || anchor.target !== '_blank') {
            anchor.addEventListener('click', smoothScroll);
        }
    });

    // Controle do portfólio expansível
    const portfolioToggle = document.getElementById('portfolioToggle');
    const portfolioOptions = document.getElementById('portfolioOptions');
    
    if (portfolioToggle && portfolioOptions) {
        portfolioToggle.addEventListener('click', togglePortfolio);
    }

    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        
        // Fecha o portfólio se estiver aberto
        if (targetId !== '#portfolio') {
            const portfolioOptions = document.getElementById('portfolioOptions');
            if (portfolioOptions && portfolioOptions.classList.contains('active')) {
                togglePortfolio();
            }
        }
    }
}

function togglePortfolio() {
    const portfolioToggle = document.getElementById('portfolioToggle');
    const portfolioOptions = document.getElementById('portfolioOptions');
    
    portfolioOptions.classList.toggle('active');
    portfolioToggle.textContent = portfolioOptions.classList.contains('active') 
        ? 'Portfólio ▲' 
        : 'Portfólio ▼';
}

async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const messageElement = document.getElementById('formMessage');
    
    messageElement.textContent = "Enviando...";
    messageElement.className = "form-message sending";
    
    try {
        const formData = new FormData(form);
        const response = await fetch('https://formspree.io/f/xdkeyedd', {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            showFormMessage('Mensagem enviada com sucesso!', 'success');
            form.reset();
        } else {
            throw new Error('Erro no servidor');
        }
    } catch (error) {
        console.error('Erro:', error);
        showFormMessage('Erro ao enviar mensagem. Tente novamente.', 'error');
    }
}

function showFormMessage(message, type) {
    const messageElement = document.getElementById('formMessage');
    messageElement.textContent = message;
    messageElement.className = `form-message ${type}`;
    
    if (type === 'success') {
        setTimeout(() => {
            messageElement.textContent = '';
            messageElement.className = 'form-message';
        }, 5000);
    }
}
