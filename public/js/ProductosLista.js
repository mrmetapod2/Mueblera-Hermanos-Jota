//este script se encarga de mostrar los productos y mandarte a producto.html cuando lo clickeas

const productos = [// se crea una lista para los productos
      { id: 1, nombre: "Aparador Uspallata", precio: "$250", img: "../public/img/Aparador Uspallata.png" },
      { id: 2, nombre: "Biblioteca Recoleta", precio: "$400", img: "../public/img/Biblioteca Recoleta.png" },
      { id: 3, nombre: "Butaca Mendoza", precio: "$150", img: "../public/img/Butaca Mendoza.png" },
      { id: 4, nombre: "Escritorio Costa", precio: "$600", img: "../public/img/Escritorio Costa.png" }
    ];

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
