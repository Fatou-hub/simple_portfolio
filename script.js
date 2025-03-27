function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function scrollToNav(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien
    const navElement = document.querySelector("nav"); // Sélectionne la première balise <nav>
  
    if (navElement) {
      navElement.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la navigation
    }
  }
  