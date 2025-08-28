  const contenedor = document.getElementById("productos-container");//se encuentra donde se va a poner los productos

    productos.forEach(p => {// por cada producto en la lista
      const card = document.createElement("div"); //se crea un nuevo elemento para el producto
      card.classList.add("producto-card");// se le añade la classe producto-card
      card.innerHTML = ` 
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="precio">${p.precio}</p>
        <button onclick="location.href='producto.html?id=${p.id}'">Ver más</button>
      `;//se le inserta el html con la informacion importante
      contenedor.appendChild(card); // y se le hace append al para añadirlo al contenedor
    });
