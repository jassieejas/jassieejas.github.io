
let tags = ['Pizza', 'Puppy', 'Kitten', 'Fries', 'City', 'Cendol', 'Durian', 'Apple', 'Spongebob', 'Piano', 'Ice cream', 'Car'];

const list = document.getElementById('images');

const answerChoices = document.getElementById('choices');

let answer = ""



// random color
function randomColor(){
	const r = Math.floor(Math.random()*255);
	const g = Math.floor(Math.random()*255);
	const b = Math.floor(Math.random()*255);
	return 'rgb('+ r + ','+ g + ',' + b +')'
}



function gameSequence(){

		answerChoices.innerHTML = '';

		answer = tags[Math.floor(Math.random(tags.length)*tags.length)+1];
		getTaggedPhotos(answer);

		const choices = [];
		choices.push(answer);

		while(choices.length < 4){
			const random = tags[Math.floor(Math.random(tags.length)*tags.length)+1];
			if(choices.indexOf(random) == -1){
				choices.push(random);
			}
		}

		choices.sort(function(){
			return Math.random()* 2 - 1;
		});

		for(let i = 0; i < choices.length; i++){
			const li = document.createElement('li');
			const btn = document.createElement('button');
			li.appendChild(btn)
			btn.innerHTML = choices[i]
			btn.style.backgroundColor = randomColor();
			btn.onclick = function(){
				if(btn.innerHTML == answer){
					window.alert('You are right!')
				} else {
					window.alert('Oops! Wrong guess.. Try again!')
				}
			gameSequence();
			}
		answerChoices.appendChild(li);
	}
}





// fetch
function getTaggedPhotos(tag){

	fetch('https://api.tumblr.com/v2/tagged?tag=' + tag + '&api_key=KHOXqyQJhSX6VOUSJzyePfq3PHeUAU37GKn8hAZGCxtJRp3YnA')
	
	// get json
	.then(function (response){
		return response.json();
	})
	// use json object
	.then(function(result){

		// clear list
		list.innerHTML = '';

		const items = result.response;
		let masonry;

		for(let i = 0; i < items.length; i++){
			const item = items[i];


			if(item.photos != undefined){
				const altSizes = item.photos[0].alt_sizes
				const imgSrc = altSizes[altSizes.length-3].url;


				const img = document.createElement('img');
				img.src = imgSrc;
				img.onload = function(){
					masonry.layout();
				}

				const li = document.createElement('li');
				// li.innerHTML = imgSrc;
				li.appendChild(img);

				list.appendChild(li);

			}
		}

		// initialize masonry
		masonry = new Masonry(list, {
			itemSelector:'li',
		});

		// run layout
		masonry.layout();

	})
	// .catch(function(err){
	// 	window.alert('Oopsie! :( <br/> Seems like the Tumblr API is down, please try again later!')
	// 	console.log('message: ', err)
	// })

}


gameSequence();






		const closeButton = document.querySelector('.close');
		const navigationOverlay = document.querySelector('.hidden');
		const navigationButton = document.querySelector('.menu');

		closeButton.onclick = function(event){
			event.preventDefault();
			navigationOverlay.style.display = "none";
		}
		
		navigationButton.onclick = function(event){
			navigationOverlay.style.display = "initial";
		}

