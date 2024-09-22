function scrollToSection() {
    const section = document.getElementById("terapia");
    section.scrollIntoView({ behavior: "smooth" });
}
document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = link.getAttribute('href'); // Obtém o ID do alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        // Rola suavemente até o elemento alvo
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});