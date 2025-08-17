//este script se encarga de mostrar los productos y mandarte a producto.html cuando lo clickeas

const productos = [
      { id: 1, nombre: "Aparador Uspallata", precio: "$250", img: "../public/img/Aparador Uspallata.png" },
      { id: 2, nombre: "Biblioteca Recoleta", precio: "$400", img: "../public/img/Biblioteca Recoleta.png" },
      { id: 3, nombre: "Butaca Mendoza", precio: "$150", img: "../public/img/Butaca Mendoza.png" },
      { id: 4, nombre: "Escritorio Costa", precio: "$600", img: "../public/img/Escritorio Costa.png" }
    ];

    const contenedor = document.getElementById("productos-container");

    productos.forEach(p => {
      const card = document.createElement("div");
      card.classList.add("producto-card");
      card.innerHTML = `
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p class="precio">${p.precio}</p>
        <button onclick="location.href='productos.html?id=${p.id}'">Ver más</button>
      `;
      contenedor.appendChild(card);
    });
