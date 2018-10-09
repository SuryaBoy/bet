
	console.log(window.scrollX + document.querySelector('.window').getBoundingClientRect().left);
	console.log(window.scrollX + document.querySelector('.track').getBoundingClientRect().right);
	var mywindow = {};
	// mywindow.left = window.scrollX + document.querySelector('.window').getBoundingClientRect().left;
	// mywindow.right = window.scrollX + document.querySelector('.window').getBoundingClientRect().right;
	// console.log(mywindow);
	const myframe = document.getElementById('scroll');
	mywindow.left = myframe.scrollLeft;
	mywindow.right = myframe.scrollLeft + myframe.offsetWidth;
	console.log(mywindow);
	const bushes = document.getElementsByClassName('bush');
	console.log(bushes.length);
	for (i=0; i<bushes.length; i++) {
		console.log(window.scrollX + bushes[i].getBoundingClientRect().left);
		console.log(bushes[i].offsetWidth);
	}
	const horses = document.getElementsByClassName('horse');
	for (i=0; i< horses.length; i++) {
		console.log(window.scrollX + horses[i].getBoundingClientRect().left)
	}

// variables for game
	var horse1 = document.getElementById('horse1');
	var horse2 = document.getElementById('horse2');
	var horse3 = document.getElementById('horse3');
	var horse4 = document.getElementById('horse4');

	var scroller = document.getElementById('scroll');

	var finishLine = document.getElementById('finishline');

	var position = [0,0,0,0,0];

	// postion of horses respectively
	var pos1=0;
	var pos2=0;
	var pos3=0;
	var pos4=0;
	// main positon of game area
	var pos=0;
	// speed of respectives horses
	var speed = [0,0,0,0];
	var speed1=0;
	var speed2=0;
	var speed3=0;
	var speed4=0;
	// constant speed the horses will run no matter what
	var const_speed=0.07;
	// maximum and minimum values for assinging random speed to horses
	var max=0.02;
	var min=0;

	var max1 , max2 , max3 , max4 ;

	var gameLooper;

	const frameRight = document.querySelector('.window').getBoundingClientRect().right;
	var trackRight = document.querySelector('.track').getBoundingClientRect().right;
	var initialTrackPosition = scroller.scrollLeft;
	const distanceInterval = (trackRight - scroller.scrollLeft)/7;
	assignNewSpeed();
// variables for game

function resetGame() {
	// postion of horses respectively
	position = [0,0,0,0];
	pos1=0;
	pos2=0;
	pos3=0;
	pos4=0;
	// main positon of game area
	pos=0;
	// speed of respectives horses
	speed = [0,0,0,0];
	speed1=0;
	speed2=0;
	speed3=0;
	speed4=0;
	// constant speed the horses will run no matter what
	const_speed=0.08;
	// maximum and minimum values for assinging random speed to horses
	max=0.02;
	min=0;

	for (i=0; i< horses.length; i++) {
		horses[i].classList.remove('runRight');
		horses[i].style.left = 2+'vw';
	}
	clearInterval(gameLooper);
	scroller.scrollLeft = 0;
	initialTrackPosition = scroller.scrollLeft;
	assignNewSpeed();
}


function gameStart(){

	// give the running effect when game starts by adding class runRight
	horse1.classList.add('runRight');
	horse2.classList.add('runRight');
	horse3.classList.add('runRight');
	horse4.classList.add('runRight');

	// for animatin
	gameLooper = setInterval(frame, 8);

	function frame(){

		// if pos is less then 70 then asign random values and asign speed of horses
		// else if(pos<=75){
		// 	max1=getRandomArbitrary(0,max);
		// 	max2=getRandomArbitrary(0,max);
		// 	max3=getRandomArbitrary(0,max);
		// 	max4=getRandomArbitrary(0,max);

		// 	speed1=getRandomArbitrary(min, max1);
		// 	speed2=getRandomArbitrary(min, max2);
		// 	speed3=getRandomArbitrary(min, max3);
		// 	speed4=getRandomArbitrary(min, max4);
		// 	pos=pos+const_speed;
		// 	pos1=pos1+speed1+const_speed;
		// 	pos2=pos2+speed2+const_speed;
		// 	pos3=pos3+speed3+const_speed;
		// 	pos4=pos4+speed4+const_speed;
			
		// 	if((pos1>47 && pos1<53)||(pos1>77 && pos1<83)||(pos1>117 && pos1<123))
		// 	{
		// 		// horse1.classList.add('jump');
		// 		horseJump(horse1);
		// 	}

		// 	else if ( horse1.classList.contains('jump') ){
		// 		horse1.classList.remove('jump');
		// 	}

		// 	if((pos2>47 && pos2<53)||(pos2>77 && pos2<83)||(pos2>117 && pos2<123))
		// 	{
		// 		horseJump(horse2);
		// 	}

		// 	else if ( horse2.classList.contains('jump') ){
		// 		horse2.classList.remove('jump');
		// 	}

		// 	if((pos3>47 && pos3<53)||(pos3>77 && pos3<83)||(pos3>117 && pos3<123))
		// 	{
		// 		horseJump(horse3);
		// 	}

		// 	else if ( horse3.classList.contains('jump') ){
		// 		horse3.classList.remove('jump');
		// 	}

		// 	if((pos4>47 && pos4<53)||(pos4>77 && pos4<83)||(pos4>117 && pos4<123))
		// 	{
		// 		horseJump(horse4);
		// 	}

		// 	else if ( horse4.classList.contains('jump') ){
		// 		horse4.classList.remove('jump');
		// 	}


		// 	horse1.style.left = pos1 + 'vw';
		// 	horse2.style.left = pos2 + 'vw';
		// 	horse3.style.left = pos3 + 'vw';
		// 	horse4.style.left = pos4 + 'vw';
		// }

		// else if(pos>=230){
		// 	max1=getRandomArbitrary(0,max);
		// 	max2=getRandomArbitrary(0,max);
		// 	max3=getRandomArbitrary(0,max);
		// 	max4=getRandomArbitrary(0,max);
		// 	speed1=getRandomArbitrary(min, max1);
		// 	speed2=getRandomArbitrary(min, max2);
		// 	speed3=getRandomArbitrary(min, max3);
		// 	speed4=getRandomArbitrary(min, max4);
		// 	pos=pos+const_speed;
		// 	pos1=pos1+speed1+const_speed;
		// 	pos2=pos2+speed2+const_speed;
		// 	pos3=pos3+speed3+const_speed;
		// 	pos4=pos4+speed4+const_speed;

		// 	horse1.style.left = pos1 + 'vw';
		// 	horse2.style.left = pos2 + 'vw';
		// 	horse3.style.left = pos3 + 'vw';
		// 	horse4.style.left = pos4 + 'vw';
		// }

		// at the middle of the game horser run with constant speed

		// else{
			pos=pos+const_speed;
			pos1=pos1+const_speed;
			pos2=pos2+const_speed;
			pos3=pos3+const_speed;
			pos4=pos4+const_speed;
			checkTrackScroll();
			for(i=0; i<position.length; i++) {
				position[i] = position[i] + const_speed + speed[i];
			}

			for (j=0; j<horses.length; j++) {
				var collision = false;
				for (i=0; i< bushes.length; i++) {
					x1 = window.scrollX + bushes[i].getBoundingClientRect().left;
					w1 = bushes[i].offsetWidth;
					x2 = window.scrollX + horses[j].getBoundingClientRect().left;
					w2 = horses[j].offsetWidth;
					if (collisionDetector(x1,w1,x2,w2)) {
						horseJump(horses[j]);
						collision = true;
					}
				}
				if (!collision) {
					horses[j].classList.remove('jump');
				}

				if (horses[j].getBoundingClientRect().left > finishLine.getBoundingClientRect().right) {
					horses[j].classList.remove('runRight');
					horses[j].classList.add('finish');
				} else {
					horses[j].style.left = position[j] + 'vw' ; 
				}

			}

			// if((pos1>247 && pos1<253)||(pos1>177 && pos1<183)||(pos1>197 && pos1<203))
			// {
			// 	// horse1.classList.add('jump');
			// 	horseJump(horse1);
			// }

			// else if ( horse1.classList.contains('jump') ){
			// 	horse1.classList.remove('jump');
			// }

			// if((pos2>247 && pos2<253)||(pos2>177 && pos2<183)||(pos2>197 && pos2<203))
			// {
			// 	horseJump(horse2);
			// }

			// else if ( horse2.classList.contains('jump') ){
			// 	horse2.classList.remove('jump');
			// }

			// if((pos3>247 && pos3<253)||(pos3>177 && pos3<183)||(pos3>197 && pos3<203))
			// {
			// 	horseJump(horse3);
			// }

			// else if ( horse3.classList.contains('jump') ){
			// 	horse3.classList.remove('jump');
			// }

			// if((pos4>247 && pos4<253)||(pos4>177 && pos4<183)||(pos4>197 && pos4<203))
			// {
			// 	horseJump(horse4);
			// }

			// else if ( horse4.classList.contains('jump') ){
			// 	horse4.classList.remove('jump');
			// }

			// horse1.style.left = pos1 + 'vw';
			// horse2.style.left = pos2 + 'vw';
			// horse3.style.left = pos3 + 'vw';
			// horse4.style.left = pos4 + 'vw';
		// }

		// for scrolling the background
		trackScroller();

		if(gameFinish()) {
			clearInterval(gameLooper);
		}

	}

	function horseJump(jumper){
		jumper.classList.add('jump');
	}

}

// function to generate arpitrary random number
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function collisionDetector(x1,w1,x2,w2) {
	if(x1 < x2+w2 && x1+w1 > x2) {
		return true;
	}
	return false;
}

function gameFinish() {
	finishCount = 0;
	for(i=0;i<horses.lenght;i++) {
		if(horses[i].classList.contains('finish')) {
			finishCount++;
		}
	}
	if(finishCount > 3) {
		return true;
	}
	else {
		return false;
	}
}

function trackScroller() {
	// if the track right position is not inside the frame then keep scrolling the track because the track is finished
	trackRight = document.querySelector('.track').getBoundingClientRect().right;
	if(frameRight < trackRight)
	{
		// for scrolling the background
		scroller.scrollLeft = scroller.scrollLeft + 1;
	}
}

function checkTrackScroll() {
	var partialDist = scroller.scrollLeft - initialTrackPosition;
	if(partialDist >= distanceInterval) {
		assignNewSpeed();
		initialTrackPosition = scroller.scrollLeft;
	}
}

function assignNewSpeed() {
	for(i=0;i<speed.length;i++) {
		speed[i] = getRandomArbitrary(min, max);
	}
	console.log(speed);
}

// document.addEventListener('DOMContentLoaded', horseRun);