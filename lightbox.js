const closeButton = document.querySelector('.lightbox-close');

const lightBox = document.querySelector('.lightbox');

const galleryItems = document.querySelectorAll('.gallery-item');

const prevButton = document.querySelector('.prev');

const nextButton = document.querySelector('.next');

const lightboxImage = document.querySelector('.lightbox-content');




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
