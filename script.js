function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function toggleSubMenu() {
  const subMenu = document.getElementById('subMenu');
  subMenu.classList.toggle('open');
}

function toggleMobileSubMenu() {
  const submenu = document.getElementById('mobileSubMenu');
  const button = document.getElementById('mobileSubmenuToggle');
  const isOpen = submenu.classList.toggle('open');
  button.textContent = isOpen ? 'Adult Formation ▲' : 'Adult Formation ▼';
}

function toggleDesktopSubMenu() {
  const submenu = document.getElementById('desktopSubMenu');
  const button = document.getElementById('desktopSubmenuToggle');
  const isOpen = submenu.classList.toggle('open');
  button.textContent = isOpen ? 'Adult Formation ▲' : 'Adult Formation ▼';
}


function scrollImages(direction) {
  const container = document.getElementById("imageTable");
  const scrollAmount = 120; // Adjust based on image width

  container.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth"
  });
}

function handleClick(imageId) {
  alert("You clicked image " + imageId);
  // You can do more here (open modal, navigate, etc.)
}



