console.log("Site da Velas Corretora carregado com sucesso.");
<script>
  // Animação ao rolar (fade-in)
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // roda uma vez só por elemento
        }
      });
    }, {
      threshold: 0.1
    });

    // Seleciona todos os elementos com a classe "fade-in"
    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(el => observer.observe(el));
  });
</script>