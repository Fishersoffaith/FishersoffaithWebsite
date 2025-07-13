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
  const scrollAmount = 300; // Adjust based on image width

  container.scrollBy({
    left: scrollAmount * direction,
    behavior: "smooth"
  });
}

window.addEventListener('resize', () => {
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileSubMenu = document.getElementById('mobileSubMenu');
  const desktopSubMenu = document.getElementById('desktopSubMenu');

  // Close the mobile menu if it's open
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    mobileMenu.classList.remove('open');
  }

  // Close the mobile submenu if it's open
  if (mobileSubMenu && mobileSubMenu.classList.contains('open')) {
    mobileSubMenu.classList.remove('open');

    // Reset button text
    const mobileToggle = document.getElementById('mobileSubmenuToggle');
    if (mobileToggle) {
      mobileToggle.textContent = 'Adult Formation ▼';
    }
  }

  // Close the desktop submenu if it's open
  if (desktopSubMenu && desktopSubMenu.classList.contains('open')) {
    desktopSubMenu.classList.remove('open');

    // Reset button text
    const desktopToggle = document.getElementById('desktopSubmenuToggle');
    if (desktopToggle) {
      desktopToggle.textContent = 'Adult Formation ▼';
    }
  }
});


