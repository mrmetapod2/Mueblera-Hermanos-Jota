// Mezclar el array de productos aleatoriamente
const productosAleatorios = [...productos] // copiamos para no modificar el original
  .sort(() => Math.random() - 0.5) // mezcla aleatoria
  .slice(0, 4); // toma solo 4 productos


const contenedor = document.getElementById("productos-container");//se encuentra donde se va a poner los productos

  // Mostrar solo los 4 productos seleccionados
productosAleatorios.forEach(p => {
  const card = document.createElement("div");
  card.classList.add("producto-card");
  card.innerHTML = ` 
    <img src="${p.img}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p class="precio">${p.precio}</p>
    <button onclick="location.href='producto.html?id=${p.id}'">Ver más</button>
  `;
  contenedor.appendChild(card);
});