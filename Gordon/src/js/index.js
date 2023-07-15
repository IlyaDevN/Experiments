const car = document.querySelector(".car_container");
const wheelContainers = document.querySelectorAll(".wheel_container_1, .wheel_container_2");
const roadContainer = document.querySelector(".road_container");
const carWindow = document.querySelector(".car_window");
const girl = document.querySelector(".girl");
const hand = document.querySelector(".hand");
const CAR_WIDTH = 700;
const pageWidth = document.documentElement.clientWidth;
const shift = -(CAR_WIDTH + (pageWidth - CAR_WIDTH)/2);
const animationsArray = [];

async function xxx() {
	
	roadAnimate("-50%", "0");
	wheelsAnimate();
	await carAnimate(0, shift);
	await windowAnimate("0", "75%");
	await girlAnimate("-60deg", "0deg");
	await handAnimate("-20deg", "40deg");
	girlAnimate("0deg", "-60deg");
	await handAnimate("40deg", "-20deg");
	await windowAnimate("75%", "0");
	await carAnimate(shift, shift*2);

	function roadAnimate(first, second) {
		const animation = roadContainer.animate(
			[
				{transform: `translateX(${first})`},
				{transform: `translateX(${second})`}
			],
			{
				duration: 5000,
				iterations: Infinity,
			}
		)
		animationsArray.push(animation);
		return animation.finished;
	}

	function carAnimate(first, second) {
		const animation = car.animate(
			[
				{transform: `translateX(${first}px)`},
				{transform: `translateX(${second}px)`}
			],
			{
				duration: 2000,
				iterations: 1,
				fill: "forwards",
			}
		);
		animationsArray.push(animation);
		return animation.finished;
		
	}

	function wheelsAnimate() {
		let animations = [];

		wheelContainers.forEach((wheel) => {

			const animation = wheel.animate(
			[
				{ transform: "rotate(0deg)" },
				{ transform: "rotate(-360deg)" },
			],
				{
					duration: 1000,
					iterations: Infinity,
				}
			)
			animationsArray.push(animation);
			animations.push(animation.finished);
		});
		
		return Promise.all(animations);
	}

	function windowAnimate(first, second) {
		const animation = carWindow.animate(
			[
				{transform: `translateY(${first})`},
				{transform: `translateY(${second})`}
			],
			{
				duration: 1000,
				iterations: 1,
				fill: "forwards"
			}
		)
		animationsArray.push(animation);
		return animation.finished;
	}

	function girlAnimate(first, second) {
		const animation = girl.animate(
			[
				{transform: `rotate(${first})`},
				{transform: `rotate(${second})`},
			],
			{
				duration: 1000,
				iterations: 1,
				fill: "forwards"
			}
		)
		animationsArray.push(animation);
		return animation.finished;
	}

	function handAnimate(first, second) {
		const animation = hand.animate(
			[
				{transform: `rotate(${first})`},
				{transform: `rotate(${second})`},
			],
			{	
				duration: 1000,
				iterations: 1,
				fill: "forwards"
			}
		)
		animationsArray.push(animation);
		return animation.finished;
	}

	animationsArray.forEach((anim) => {
		anim.cancel();
	});
}

xxx();

// window.addEventListener("keydown", (e) => {
// 	if(e.code == "Space") {
// 		xxx();
// 	}

// 	if(e.code == "ControlLeft") {
// 		for(let anim of animationsArray) {
// 			anim.cancel();
// 		}
// 	}
// })