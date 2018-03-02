const closeButton = document.querySelector('.lightbox-close')
const lightbox = document.querySelector('.lightbox')
const galleryItems = document.querySelectorAll('.gallery-item')
const lightboxImage = document.querySelector('.lightbox-image')

function showImage(event) {
			// show lightbox
			lightbox.classList.remove('hidden')

			// get current galleryItem
			const elementClickedOn = event.target;
			const galleryItemParent = elementClickedOn.parentElement;
			
			// replace content of lightbox-image with current image and caption
			
			lightboxImage.innerHTML = galleryItemParent.innerHTML;

		}

function hideLightbox(event){
	event.preventDefault();
	lightbox.classList.add('hidden');
}

// hide lightbox when close button is clicked
closeButton.onclick = hideLightbox;
}

	//  for every gallery item, set onclick handler to show image
	for( let i = 0; i < galleryItems.length; i++){
		let item = galleryItems[i];
		item.onclick = showImage;
		}
	}
