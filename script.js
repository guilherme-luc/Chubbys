document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica do Menu Hambúrguer (Mobile)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Abre/Fecha o menu ao clicar no ícone
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Alterna o ícone entre hambúrguer e "X"
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha o menu mobile quando clica em algum link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // 2. Animação de Scroll Suave (Fade In)
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInOnScroll = () => {
        fadeElements.forEach(element => {
            // Pega a posição do elemento em relação à janela
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            // Se o elemento estiver visível na tela (com uma pequena margem)
            if (elementTop < windowHeight - 50) {
                element.classList.add('visible');
            }
        });
    };

    // Roda uma vez no carregamento
    fadeInOnScroll();

    // Roda toda vez que o usuário dá scroll
    window.addEventListener('scroll', fadeInOnScroll);
});

/* =========================================
   LAZY PLAY DO VÍDEO (SKATE & BURGER)
========================================= */
document.addEventListener("DOMContentLoaded", function() {
    const videoSkate = document.getElementById('video-promo');

    if (videoSkate) {
        // Pausa o vídeo logo que o site carrega para ele não rodar escondido
        videoSkate.pause();

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Quando aparece na tela, dá o play
                    videoSkate.play().catch(error => console.log("Erro de play:", error));
                } else {
                    // Quando sai da tela, pausa e volta para o começo (0:00)
                    videoSkate.pause();
                    videoSkate.currentTime = 0; 
                }
            });
        }, { threshold: 0.2 }); // Dispara quando 20% do vídeo aparecer

        observer.observe(videoSkate);
    }
});