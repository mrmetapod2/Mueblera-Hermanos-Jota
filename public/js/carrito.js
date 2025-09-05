document.addEventListener("DOMContentLoaded", () => {
  // Elemento contador en el header
  const cartCount = document.querySelector(".cart-count");

  // Todos los botones "Añadir al Carrito"
  const botonesCarrito = document.querySelectorAll(".btn-carrito");

  let contador = 0;

  botonesCarrito.forEach(boton => {
    boton.addEventListener("click", () => {
      contador++;
      cartCount.textContent = contador;
    });
  });
});
