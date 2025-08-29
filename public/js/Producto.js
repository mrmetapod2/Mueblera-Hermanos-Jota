
// Obtener el parámetro "id" de la URL
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id"));


// Buscar el producto correspondiente
const producto = productos.find(p => p.id === productId);


// Referencias a los elementos del HTML
const imagen = document.querySelector(".imagen-detalle");
const titulo = document.querySelector(".info-detalle h1");
const descripcion = document.querySelector(".descripcion");
const detalles = document.querySelector(".detalles");
const precio = document.querySelector(".precio");

// Si encontramos el producto, cargamos sus datos
if (producto) {
  imagen.src = producto.img;
  imagen.alt = producto.nombre;
  titulo.textContent = producto.nombre;
  descripcion.textContent = `Este es el detalle completo de ${producto.nombre}. 
  Es un producto artesanal con materiales de calidad.`;
  detalles.innerHTML = `<strong>Detalles de fabricación:</strong> Información personalizada de ${producto.nombre}.`;
  precio.textContent = `Precio: ${producto.precio}`;
} else {
  // Si no existe el producto, mostramos un mensaje
  document.querySelector(".producto-detalle").innerHTML = `
    <h2>Producto no encontrado</h2>
    <p>El producto que estás buscando no existe.</p>
  `;
}