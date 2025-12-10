document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. MENU MOBILE ---
    const menuToggle = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('active');
        });
    });

    // --- 2. INTERAÇÃO COM FORMULÁRIO ---
    const form = document.getElementById('contactForm');

    if(form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Simulação de envio
            const botao = form.querySelector('button');
            const textoOriginal = botao.innerText;
            
            botao.innerText = "Enviando...";
            botao.disabled = true;
            botao.style.opacity = "0.7";

            setTimeout(() => {
                alert(`Obrigado, ${nome}! \nRecebemos sua mensagem e entraremos em contato.`);
                form.reset();
                botao.innerText = textoOriginal;
                botao.disabled = false;
                botao.style.opacity = "1";
            }, 1500);
        });
    }

    // --- 3. MODO ESCURO (DARK MODE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Verifica se já existe uma preferência salva no navegador
    const temaSalvo = localStorage.getItem('tema');
    
    if (temaSalvo === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerText = '☀️'; // Sol para voltar ao claro
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.innerText = '☀️';
            localStorage.setItem('tema', 'dark'); // Salva "dark"
        } else {
            themeToggleBtn.innerText = '🌙';
            localStorage.setItem('tema', 'light'); // Salva "light"
        }
    });

});