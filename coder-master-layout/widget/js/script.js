class CoderController {
    constructor(container) {
        this.container = container;
        this.tabs = container.querySelectorAll(".sp-coder-tab__coder__tab");
        this.panels = container.querySelectorAll(".sp-coder-tab__coder__panel");
        this.title = container.querySelector(".sp-coder-tab__coder__title");

        if (!this.tabs.length) return;

        this.init();
    }

    init() {
        this.tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                this.activateTab(index);
            });
        });

        // HTML
        this.activateTab(0);
    }

    activateTab(index) {
        // Ativa botao
        this.tabs.forEach((btn, i) => {
            const isActive = i === index;
            btn.classList.toggle("sp-coder-tab__coder__tab--active", isActive);
            btn.setAttribute("aria-selected", isActive);
        });

        this.panels.forEach((panel, i) => {
            panel.style.display = (i === index) ? "block" : "none";
        });

        if (this.title) {
            const label = this.tabs[index].textContent;
            this.title.textContent = `Código ${label}`;
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".sp-coder-tab__coder").forEach(container => {
        new CoderController(container);
    });
});