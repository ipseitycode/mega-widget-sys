(function () {
    const SIZES = ["small", "medium", "large"];

    const NAV_LINK_CLASS = (size) =>
        `sp-header-bridge-${size}__header__nav-link`;

    const ACTIVE_SUFFIX = "-active";

    function initNavForSize(size) {
        const linkClass = NAV_LINK_CLASS(size);
        const activeClass = linkClass + ACTIVE_SUFFIX;
        const links = document.querySelectorAll(`.${linkClass}`);

        if (!links.length) return;

        links.forEach((link) => {
            link.addEventListener("click", function (e) {
                e.preventDefault();

                links.forEach((l) => l.classList.remove(activeClass));

                this.classList.add(activeClass);
            });
        });
    }

    function init() {
        SIZES.forEach(initNavForSize);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();