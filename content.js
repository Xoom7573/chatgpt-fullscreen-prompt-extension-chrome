function addMenuBars($menu) {
  const menuBar1 = document.createElement("div");
  const menuBar2 = document.createElement("div");
  const menuBar3 = document.createElement("div");

  menuBar1.className = "bar open";
  menuBar2.className = "bar open";
  menuBar3.className = "bar open";

  $menu.appendChild(menuBar1);
  $menu.appendChild(menuBar2);
  $menu.appendChild(menuBar3);
}

function addBurgerMenu() {
  const $sidebar = document.querySelector(
    "div.dark.flex-shrink-0.overflow-x-hidden.bg-gray-900"
  );

  const menuButton = document.createElement("div");
  menuButton.className = "burger-menu";

  addMenuBars(menuButton);

  let myToggle = true;

  menuButton.addEventListener("click", () => {
    myToggle = !myToggle;

    myToggle
      ? (menuButton.style.left = "17.2rem")
      : (menuButton.style.left = ".8rem");

    $sidebar?.classList.toggle("hidden");
    menuButton?.classList.toggle("open");
  });

  document.body.appendChild(menuButton);
}

window.addEventListener("load", () => {
  // addBurgerMenu();
});
