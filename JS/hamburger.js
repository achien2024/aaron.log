
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// Function to close the mobile menu if clicked outside of it
function closeMenu(event) {
    const mobileMenu = document.getElementById('mobileMenu');
    if (event.target === mobileMenu) {
        mobileMenu.style.display = 'none';
    }
}
