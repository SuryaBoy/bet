
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

	var horseResult = document.getElementsByClassName('horseResult');

	// postion of horses respectively
	var position = [0,0,0,0];
	// speed of respectives horses
	var speed = [0,0,0,0];
	// constant speed the horses will run no matter what
	var const_speed=0.08;
	// maximum and minimum values for assinging random speed to horses
	var max=0.017;
	var min=0;

	var max1 , max2 , max3 , max4 ;

	var gameLooper;

	const frameRight = document.querySelector('.window').getBoundingClientRect().right;
	var trackRight = document.querySelector('.track').getBoundingClientRect().right;
	var initialTrackPosition = scroller.scrollLeft;
	const distanceInterval = (trackRight - scroller.scrollLeft)/7;
	assignNewSpeed();
	var cash = 100;
	var betOption = document.getElementById('amount');
	var betHorse = document.getElementById('bethorse');
	displayCash();
// variables for game

function resetGame() {
	// postion of horses respectively
	position = [0,0,0,0];
	// speed of respectives horses
	speed = [0,0,0,0];
	// constant speed the horses will run no matter what

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
		positionTracker();
	}
}

function assignNewSpeed() {
	for(i=0;i<speed.length;i++) {
		speed[i] = getRandomArbitrary(min, max);
	}
}

function positionTracker() {
	var result = position.slice();

    for (i = 0; i < result.length; ++i) 
    {
        for (j = i + 1; j < result.length; ++j) 
        {
            if (result[i] < result[j]) 
            {
                a = result[i];
                result[i] = result[j];
                result[j] = a;
            }
        }
    }
 	for (i=0; i< horseResult.length; ++i) {
 		horseResult[i].className = 'horseResult';
 		horseResult[i].classList.add('horse'+(position.indexOf(result[i])+1));
 	}
}

function displayCash() {
	document.getElementById('funds').innerHTML = cash;
}

function bet() {
	betAmount = betOption.option[betOption.selectedIndex].value;
	if(betAmount > cash) {
		alert('You cannot bet more then you have');
		return false;
	}
	cash = cash - betAmount;
}
// document.addEventListener('DOMContentLoaded', horseRun);