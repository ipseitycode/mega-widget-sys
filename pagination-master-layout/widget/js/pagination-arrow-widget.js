document.addEventListener("DOMContentLoaded", function () {

  // Seleciona todas as paginações (small, medium, large)
  const paginations = document.querySelectorAll('[class*="sp-pagination-arrow-"][class$="__pagination"]');

  paginations.forEach(pagination => {

    const buttons = pagination.querySelectorAll("button");
    const numberButtons = Array.from(buttons).filter(btn => !btn.querySelector("i"));

    const firstBtn = pagination.querySelector('[aria-label="First page"]')?.parentElement;
    const prevBtn = pagination.querySelector('[aria-label="Previous page"]')?.parentElement;
    const nextBtn = pagination.querySelector('[aria-label="Next page"]')?.parentElement;
    const lastBtn = pagination.querySelector('[aria-label="Last page"]')?.parentElement;

    let currentPage = getCurrentPage();
    const totalPages = getTotalPages();

    // Pega página atual
    function getCurrentPage() {
      const active = pagination.querySelector('[class*="--active"]');
      return active ? parseInt(active.textContent) : 1;
    }

    // Pega total de páginas
    function getTotalPages() {
      const pages = numberButtons
        .map(btn => parseInt(btn.textContent))
        .filter(n => !isNaN(n));

      return Math.max(...pages);
    }

    // Gera automaticamente a classe --active correta
    function getActiveClass(btn) {
      const baseClass = [...btn.classList].find(c => c.endsWith("__button"));
      return baseClass + "--active";
    }

    // Atualiza botão ativo
    function updateActive(page) {
      currentPage = page;

      numberButtons.forEach(btn => {
        const activeClass = getActiveClass(btn);

        btn.classList.remove(activeClass);
        btn.removeAttribute("aria-current");

        if (parseInt(btn.textContent) === page) {
          btn.classList.add(activeClass);
          btn.setAttribute("aria-current", "page");
        }
      });

      updateArrows();
    }

    // Controla visibilidade das setas
    function updateArrows() {
      if (firstBtn) firstBtn.style.display = currentPage === 1 ? "none" : "flex";
      if (prevBtn) prevBtn.style.display = currentPage === 1 ? "none" : "flex";

      if (nextBtn) nextBtn.style.display = currentPage === totalPages ? "none" : "flex";
      if (lastBtn) lastBtn.style.display = currentPage === totalPages ? "none" : "flex";
    }

    // Clique nos números
    numberButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const page = parseInt(btn.textContent);
        if (!isNaN(page)) {
          updateActive(page);
        }
      });
    });

    // Clique nas setas
    buttons.forEach(btn => {
      const label = btn.getAttribute("aria-label");

      btn.addEventListener("click", () => {
        if (label === "First page") updateActive(1);
        if (label === "Previous page") updateActive(currentPage - 1);
        if (label === "Next page") updateActive(currentPage + 1);
        if (label === "Last page") updateActive(totalPages);
      });
    });

    // Estado inicial
    updateArrows();

  });

});