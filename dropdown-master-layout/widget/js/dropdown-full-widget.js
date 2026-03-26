class SpDropdown {
  constructor(el) {
    this.el = el;
    this.trigger = el.querySelector('[class*="__dropdown__trigger"]');
    this.menu = el.querySelector('[class*="__dropdown__menu"]');
    this.triggerText = el.querySelector('[class*="__dropdown__trigger-text"]');
    this.items = el.querySelectorAll('[class*="__dropdown__item"]');
    this.isOpen = false;

    this.init();
  }

  init() {
    this.menu.style.display = 'none';
    this.trigger.setAttribute('aria-expanded', 'false');

    this.selectItem(this.items[0], false);

    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });

    this.items.forEach(item => {
      item.addEventListener('click', (e) => {
        e.stopPropagation();
        this.selectItem(item, true);
      });
    });

    document.addEventListener('click', (e) => {
      if (!this.el.contains(e.target)) this.close();
    });

    this.el.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  }

  selectItem(item, closeAfter = true) {
    this.items.forEach(i => i.setAttribute('aria-selected', 'false'));
    item.setAttribute('aria-selected', 'true');
    this.triggerText.textContent = item.querySelector('[class*="__dropdown__item-text"]').textContent;
    if (closeAfter) this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.menu.style.display = 'flex';
    this.trigger.setAttribute('aria-expanded', 'true');
    this.isOpen = true;
  }

  close() {
    this.menu.style.display = 'none';
    this.trigger.setAttribute('aria-expanded', 'false');
    this.isOpen = false;
  }
}

document.querySelectorAll('[class*="sp-dropdown-"]').forEach(el => {
  if (/sp-dropdown-[a-z-]+__dropdown$/.test([...el.classList].find(c => c.includes('sp-dropdown-')) || '')) {
    new SpDropdown(el);
  }
});