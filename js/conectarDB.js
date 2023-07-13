const ul = document.getElementById('productos');
const urlProductos = 'https://rafamacdonough.pythonanywhere.com/productos';
const urlTags = 'https://rafamacdonough.pythonanywhere.com/tags';
let productos = [];
let tags = [];
// let unArray = [];
async function fetchProductos() {
	const response = await fetch(urlProductos)
	productos = await response.json()
}

//let productos = fetchProductos()

async function fetchTags() {
	const response = await fetch(urlTags)
	tags = await response.json()
}

//let tags = fetchTags()

async function fetchTodos() {
	await fetchProductos();
	await fetchTags();
//	console.log(productos);
//	console.log(tags);

	for (prod of productos) {	
		let listaTags = tags.filter(t => t.id_Producto == prod.id);
		var listaTagNames = [];
		for (unTag of listaTags) {
			listaTagNames.push(unTag.tag);		
		}
		prod.tags = listaTagNames;		
	};
	console.log(productos);	
}

fetchTodos();

