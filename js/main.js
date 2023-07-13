setTimeout(function(){
	
let prods = productos.filter(p => p.tags.some((x) => x == "destacado"))
let tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="producto">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("productos")[0].innerHTML=tarjeta;


prods = productos.filter(p => p.tags.some((x) => x == "novedad"))
tarjeta = ``;
for (let prod of prods) {
	tarjeta = tarjeta.concat(`<article class="novedad">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  
}
document.getElementsByClassName("novedades")[0].innerHTML=tarjeta;

}, 1000);
