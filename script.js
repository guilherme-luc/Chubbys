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