# tp-codoacodo

## NORMAS INTERNAS

1. Cada uno trabaja sobre una rama
2. Cada imagen debe:
	- guardarse en la carpeta img/
	- El tamaño de la imagen debe ser cuadrada (preferiblemente de 300 x 300 px)
	- Cada imagen lleva por nombre el mismo que el del producto (sin espacios)
	
3. Las categorías de animales son: gato, perro, otroAnimal (estos nombres se usan para los tags de cada producto)
4. Las categorías de productos son: alimento, salud, accesorio (estos nombres se usan para los tags de cada producto)
5. Se usa un tag novedad, destacado, regular, para cada producto que se desea que aparezca en dicha categoría.

## Estructura del .html
```
<body>
<!-- Lo llena el encabezadoYPie.js -->
	<header></header> 
	<main class="container">
<!-- Con dos div se establece el sistema de una columna angosta a la izquierda y otra más ancha a la derecha -->
		<div class="col-3 col-m-5 col-s-6">
			<h2>Últimas novedades</h2>
<!-- A cada sección las llena el main.js -->
			<section class="novedades"> 
			</section>
		</div>
		
		<div class="col-9 col-m-7 col-s-6">  
			<h2>Productos destacados</h2>
			<section class="productos">
			</section>
		</div>     
	</main>
<!-- Lo llena el encabezadoYPie.js -->
	<footer></footer> 
</body>
```
## Estructura del .css
1. Se define un container grid.
2. Para los div usa el frameworck de las 12 columnas. Es responsive con 3 puntos de corte (Muy grande > 1300px > Grande > 900 > Tablet > 650 > Celular).
3. La "clase productos" es un contenedor de items de la "clase producto" (con formato de tarjeta)
4. La "clase novedades" es un contenedor de items de la "clase novedad" (con formato de tarjeta)
5. Tanto los productos como las novedades son containers de flexbox (display: flex)

## Estructura de encabezadoYPie.js
1. Escribe el header y el footer
2. Primero arma un strig de comillas francesas
3. Luego escribe el string en el documento html.

## Estructura del main.js
1. Escribe las tarjetas rellenando cada sección de acuerdo a su class
3. La estructura de cada tarjeta es la siguiente
```
	<article class="producto"> <!-- ó <article class="novedad"> -->
		<img src="${prod.foto}" alt="${prod.nombre}">
 	   <h3>${prod.nombre}</h3>
  	   <p>${prod.descripcion}</p>
  	   <h4>Precio: ${prod.precio}</h4>
      <button>Comprar</button>
  	 </article>
 ```      
4. La información para cada tarjeta la toma de un archivo json llamado apiMascotienda.js

## Estructura de apiMascotienda.js
1. Tiene un array (llamado productos) que contiene objetos JSON con la siguiente estructura
```
	`{
		"id" : 1,
		"nombre" : "Transportadora Hipster",
		"descripcion" : "Mantenga seguro a su perro cuando viaje",
		"foto" : "img/TransportadoraHipster.png",
		"precio" : 1200,
		"tags" : ["perro","accesorio","novedad"]
	},`
```
Observar que el nombre de la imagen debe iniciarse con el nombre de la carpeta img/.... y todas las imagenes deben ubicarse en dicha carpeta
	
## Productos en la api actualmente
	
|					| Perros			|	Gatos			| Otros Animales|
|------------- | ------------ | ------------ | ------------- |
|Alimentos		|			4		|			4		|			4		 |
|Accesorios		|			4		|			4		|			4		 |
|Salud			|			4		|			4		|			4		 |

Habría que decidir qué y cuantos productos se incluyen como "destacado" y "novedad". Yo pondría uno de cada tag en cada animal.

## Carrousell que consume la api PetFinder
1. En el head debe contener
```
   <link href="carrousell.css" rel="stylesheet">
   <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
	<script src="https://unpkg.com/@petfinder/petfinder-js/dist/petfinder.min.js"></script>  
```
2. También debe incluir los dos siguientes js
```
 	<script src="js/apiPetFinder.js"></script>
  	<script src="js/carrousell.js"></script>
```
3. El html incluye una sección para el carrousel con una clase "slider"
```
    <h2>! Hay mascotas esperando que las adoptes !</h2>
  <section>
    <div class="slider">
   <!-- Aquí el contenido lo inserta js -->
    </div>
  </section>
  ```