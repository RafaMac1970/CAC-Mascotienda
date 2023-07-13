let unProducto = productos.filter(p => p.id == 1)[0]
/*
let tarjeta = ``;

	tarjeta = tarjeta.concat(`<article class="destacado">
					 <img src="${prod.foto}" alt="${prod.nombre}">
                <h3>${prod.nombre}</h3>
                <h4>$${prod.precio}</h4>
                <p class="descrip">${prod.descripcion}</p>
                <button>Comprar</button>
                </article>`);  

document.getElementsByClassName("unProducto")[0].innerHTML=tarjeta;
*/

const unaTarjetaGrande = document.createElement("article");
unaTarjetaGrande.className = "destacado";
			
const unaImagen = document.createElement("img");
unaImagen.src = unProducto.foto;
unaImagen.alt = unProducto.nombre;
unaTarjetaGrande.appendChild(unaImagen);

const unNombre = document.createElement("h3");
unNombre.innerHTML = unProducto.nombre;
unaTarjetaGrande.appendChild(unNombre);

const unaDescripcion = document.createElement("p");
unaDescripcion.innerHTML = unProducto.descripcion;
unaTarjetaGrande.appendChild(unaDescripcion);

const unPrecio = document.createElement("h4");
unPrecio.innerHTML = "$".concat(unProducto.precio) ;
unaTarjetaGrande.appendChild(unPrecio);

const unaCantidad = document.createElement("input");
unaCantidad.type = "text";
unaCantidad.id = "cantidad";
unaCantidad.name = "cantidad";
unaCantidad.placeholder = "Cantidad" ;
unaTarjetaGrande.appendChild(unaCantidad);

const unBoton = document.createElement("input");
unBoton.type = "submit";
unBoton.innerHTML = "Agregar al Carrito";
unaTarjetaGrande.appendChild(unBoton);
				
document.getElementsByClassName("unProducto")[0].appendChild(unaTarjetaGrande);