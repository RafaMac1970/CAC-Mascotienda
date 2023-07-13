setTimeout(function(){

let otrosAnimales = productos.filter(p => p.tags.some((x) => x == "otroAnimal"))
prods = otrosAnimales.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="destacado">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("destacados")[0].innerHTML=tarjeta;

prods = otrosAnimales.filter(p => p.tags.some((x) => x == "alimento"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="alimento">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("alimentos")[0].innerHTML=tarjeta;

prods = otrosAnimales.filter(p => p.tags.some((x) => x == "accesorio"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="accesorio">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("accesorios")[0].innerHTML=tarjeta;

prods = otrosAnimales.filter(p => p.tags.some((x) => x == "salud"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="salud">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("saludes")[0].innerHTML=tarjeta;

}, 1000);
