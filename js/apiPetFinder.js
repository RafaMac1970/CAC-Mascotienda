const keyPetFinder = "7XHKnplqSySRoji29GpljAZLK3pJECAdPR24YiMxx15GsHnuYg";
const secretPetFinder = "f6agyZmIenbC00pA4d99v5zizvOwFbD89wPx7RaP";
var slides = [];

var pf = new petfinder.Client({apiKey: keyPetFinder, secret: secretPetFinder});

let promesa1 = pf.animal.search({limit: 100,})
	 .then(function (response) {
        return response.data.animals
    })
    .catch(function (error) {
        console.log("Error")
    });

promesa1.then((value) => {
	let maxDiapos = 4;
 	let i = 0;
 	let j = 0;
 	while ((i < maxDiapos) && (j < 100)) {
		const animalObject = value[j]
 		if (animalObject.photos[0] != undefined) {
  			const unaDiapo = document.createElement("div");
			unaDiapo.className = "slide";
			unaDiapo.style.zIndex = maxDiapos - i - 1;			
				const unLinkDeImg = document.createElement("a");
				unLinkDeImg.href = animalObject.url;			
					const unaFoto = document.createElement("img")		
					unaFoto.src = animalObject.photos[0].medium;
					unaFoto.alt = animalObject.description;
					unLinkDeImg.appendChild(unaFoto);			
				unaDiapo.appendChild(unLinkDeImg);			
				const unNombre = document.createElement("h3");
				unNombre.innerHTML = animalObject.name;
				unaDiapo.appendChild(unNombre);
				const unaEspecie = document.createElement("p");
				unaEspecie.innerHTML = animalObject.species;
				unaDiapo.appendChild(unaEspecie);
				const unSexo = document.createElement("p");
				unSexo.innerHTML = animalObject.gender;
				unaDiapo.appendChild(unSexo);
				const unContacto = document.createElement("a");
				const contactEmail = animalObject.contact.email
				unContacto.innerHTML = contactEmail;
				unContacto.href = "mailto:".concat(contactEmail);
				unaDiapo.appendChild(unContacto);
				const unaURL = document.createElement("a");
				unaURL.innerHTML = " - ver en PetFinder";
				unaURL.href = animalObject.url;
				unaDiapo.appendChild(unaURL);
			document.getElementsByClassName("slider")[0].appendChild(unaDiapo);
			slides.push(unaDiapo);
			i++;
		};
		j++
  };
	console.log(slides);
	const btnNext = document.createElement("button");
		btnNext.innerHTML = ">";
		btnNext.className = "btn-slider btn-slider-next";		
	document.getElementsByClassName("slider")[0].appendChild(btnNext);
	const btnPrev = document.createElement("button");
		btnPrev.innerHTML = "<";
		btnPrev.className = "btn-slider btn-slider-prev";		
	document.getElementsByClassName("slider")[0].appendChild(btnPrev);
	crearCarrousell(slides);
});



