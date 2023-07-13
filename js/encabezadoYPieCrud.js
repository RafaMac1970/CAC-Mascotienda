let hdr = `<h1>Mascotienda</h1>
        <div id="header-img">
        <img src="img/pet-shop.png" alt="logo-petshop">
        </div>
        <nav>
            <ul>
                <li><a href="crud.html">Productos</a></li>
                <li><a  href="crud_nuevo.html">Nuevo Producto</a></li>
                <li><a  href="index.html">Ir a vista de usuario</a></li>                
            </ul>                 
        </nav>

        `;
       
let ftr = `
<div class="container-footer">
    <div class="col-4 col-m-4 col-s-12">
      <h3>Contacto</h3>
      <ul id="info">
        <li><i class="fi fi-rs-marker" style="color: #000000; font-size: 1.5em"></i>Alguna dirección 1570, Algún lugar, Argentina</li>
        <li><i class="fi fi-brands-whatsapp" style="color: #000000; font-size: 1.5em"></i>555-444-333 </li>
        <li><i class="fi fi-rr-envelope" style="color: #000000; font-size: 1.5em"></i>info@mascotienda.com</li>
      </ul>
    </div>
    <div class="col-4 col-m-4 col-s-12">
      <h3>Síguenos</h3>
      <ul class="social-media">
      <li><a href="#"><i class="fi fi-brands-facebook" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fi fi-brands-twitter" style="color: #000000; font-size: 1.5em"></i></a></li>
        <li><a href="#"><i class="fi fi-brands-instagram" style="color: #000000; font-size: 1.5em"></i></a></li>
      </ul>
    </div>
    <div class="col-4 col-m-4 col-s-12">
      <h3>Newsletter</h3>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Ingresa tu email">
        </div>
        <button type="submit" class="btn btn-primary">Suscríbete</button>
      </form>
    </div>
  </div>
<div class="bottom-footer">
  <p>&copy; 2023 Mascotienda. Todos los derechos reservados.</p>
</div>
`;
        
document.getElementsByTagName("header").item(0).innerHTML=hdr;
document.getElementsByTagName("footer").item(0).innerHTML=ftr;