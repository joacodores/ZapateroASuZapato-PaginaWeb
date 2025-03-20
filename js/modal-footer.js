document.addEventListener("DOMContentLoaded", function () {
  // Obtener los elementos de los modals
  const modalDondeComprar = document.getElementById("modal-donde-comprar");
  

  // Obtener los botones que abren los modals
  const btnDondeComprar = document.querySelector(".footer-donde-comprar");


  // Obtener los elementos de cierre
  const closeButtons = document.querySelectorAll("[data-modal]");

  // Función para abrir un modal
  function openModal(modal) {
      modal.style.display = "flex"; // Se usa flex para centrar el modal
  }

  // Función para cerrar un modal
  function closeModal(modal) {
      modal.style.display = "none";
  }

  // Eventos para abrir los modals
  btnDondeComprar.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      openModal(modalDondeComprar);
  });

  // Eventos para cerrar los modals al hacer clic en la "X"
  closeButtons.forEach(button => {
      button.addEventListener("click", function () {
          const modalId = this.getAttribute("data-modal");
          const modal = document.getElementById(modalId);
          closeModal(modal);
      });
  });

  // Cerrar el modal si el usuario hace clic fuera del contenido
  window.addEventListener("click", function (event) {
      if (event.target === modalDondeComprar) {
          closeModal(modalDondeComprar);
      }
      if (event.target === modalContacto) {
          closeModal(modalContacto);
      }
  });
});
