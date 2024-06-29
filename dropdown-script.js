(function dropdownController() {
  function closeOpenItems() {
    const itemsContainer = this.parentElement.classList.contains(
      "dropdown-items"
    )
      ? this.parentElement
      : this.parentElement.querySelector(".dropdown-items");

    itemsContainer.style.display === "block"
      ? (itemsContainer.style.display = "")
      : (itemsContainer.style.display = "block");
  }

  function selectItem() {
    closeOpenItems.call(this);

    this.parentElement.parentElement.querySelector(
      ".dropdown-selector p"
    ).textContent = `Selected: ${this.textContent}`;
  }

  function bindEvents() {
    // Selector Clicked Event
    const selectors = document.querySelectorAll(".dropdown-selector");
    selectors.forEach((selector) => {
      selector.addEventListener("click", closeOpenItems);
    });

    // Select Item Event
    const items = document.querySelectorAll(".dropdown-item");
    items.forEach((item) => {
      item.addEventListener("click", selectItem, false);
    });
  }

  bindEvents();
})();
