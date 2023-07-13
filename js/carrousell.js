function crearCarrousell(slides) {

	const nextSlide = document.querySelector(".btn-slider-next");

	nextSlide.addEventListener("click", function () {
	  for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + 1) % slides.length;
		}
	});

	const prevSlide = document.querySelector(".btn-slider-prev");

	prevSlide.addEventListener("click", function () {
		for (j of slides) {
			j.style.zIndex = (parseInt(j.style.zIndex) + slides.length - 1) % slides.length;
		}
	});
}