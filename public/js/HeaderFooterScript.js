    
    //este script se encarga de añadirle el header y footer a la pagina, lo separe a un archivo propio asi se copia menos veces el mismo codigo
    async function loadPart(id, file) {
      const el = document.getElementById(id);
      const res = await fetch(file);
      el.innerHTML = await res.text();
    }

    loadPart("header", "public/inc/header.inc.html");
    loadPart("footer", "public/inc/footer.inc.html");

