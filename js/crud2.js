const { createApp } = Vue
  createApp({
    data() {
      return {
        productos:[],
        tags: [],
        //url:'http://localhost:5000/productos', 
   // si el backend esta corriendo local  usar localhost 5000(si no lo subieron a pythonanywhere)
        url:'https://rafamacdonough.pythonanywhere.com/productos',   // si ya lo subieron a pythonanywhere
        urlTags:'https://rafamacdonough.pythonanywhere.com/tags',
        error:false,
        cargando:true,
        /*atributos para el guardar los valores del formulario */
        id:0,
        nombre:"",
        descripcion:"",
        foto:"",
        precio:0,
        idTag:0,
        unTag:"",
        
    }  
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        fetchTags(urlTags) {
            fetch(urlTags)
                .then(response => response.json())
                .then(data => {
                    this.tags = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                })
        },
        eliminar(id) {
            const url = this.url+'/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        eliminarTag(idTag) {
            const urlTags = this.urlTags+'/' + idTag;
            var options = {
                method: 'DELETE',
            }
            fetch(urlTags, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
			 alert('Registro Eliminado')
                    location.reload(); // recarga el json luego de eliminado el registro
                })
        },
        grabar(){
            let producto = {
                nombre:this.nombre,
                descripcion:this.descripcion,
                foto:this.foto,
                precio: this.precio,
            }
            var options = {
                body:JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./crud.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        },
        grabarTag(idProducto){
            let tag = {
                id_producto:idProducto,
                tag:this.unTag
            }
            var options = {
                body:JSON.stringify(tag),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.urlTags, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "./crud.html";  // recarga productos.html
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")  // puedo mostrar el error tambien
                })      
        }
    },
    created() {
        this.fetchData(this.url)
		  this.fetchTags(this.urlTags)
    },
  }).mount('#app')