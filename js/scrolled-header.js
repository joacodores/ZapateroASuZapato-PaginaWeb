window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    let logo = document.getElementById("logo"); 
    if (window.scrollY > 50) { // Si se baja más de 50px, cambia el estilo
        header.classList.add("scrolled");
        logo.src = "assets/ZAPATERIO LOGO.png"; 
    } else {
        header.classList.remove("scrolled");
        logo.src = "assets/ZAPATERO LOGO BLANCO.png";
    }
});