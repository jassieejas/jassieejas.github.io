const closeButton = document.querySelector('.lightbox-close');

const lightBox = document.querySelector('.lightbox');

const galleryItems = document.querySelectorAll('.gallery-item');

const prevButton = document.querySelector('.prev');

const nextButton = document.querySelector('.next');

const lightboxImage = document.querySelector('.lightbox-content');

const closeeButton = document.querySelector('.close');

const navigationOverlay = document.querySelector('.hidden');

const navigationButton = document.querySelector('.menu');


closeeButton.onclick = function(event){
	event.preventDefault();
	navigationOverlay.style.display = "none";
}

navigationButton.onclick = function(event){
	navigationOverlay.style.display = "initial";
}



closeButton.onclick = function(event){
	event.preventDefault();
	lightBox.classList.add('hidden');
}


for(let i = 0; i < galleryItems.length; i++){
	let item = galleryItems[i];
	item.onclick = function(event){

		// show lightbox
		lightBox.classList.remove('hidden');

		// get current galleryItem
		const elementClickedOn = event.target;
		const galleryItemParent = elementClickedOn.parentElement;

		// replace lightbox image with current image
		lightboxImage.innerHTML = galleryItemParent.innerHTML;
	}
}
