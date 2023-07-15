const car = document.querySelector(".car_container");
const wheelContainers = document.querySelectorAll(".front_wheel_container, .back_wheel_container");
const background = document.querySelector(".background_container");
const carWindow = document.querySelector(".car_window");
const girl = document.querySelector(".girl");
const hand = document.querySelector(".hand");
const buttonStart = document.querySelector(".button_start");
const buttonReset = document.querySelector(".button_reset");
const CAR_WIDTH = 700;
const pageWidth = document.documentElement.clientWidth;
const shift = -(CAR_WIDTH + (pageWidth - CAR_WIDTH) / 2);
const animationsArray = [];

async function animationStart() {

	backgroundAnimate("-50%", "0", 9000);
	wheelsAnimate(0, "-360deg", 3000);
	await carAnimate(0, shift, 2000);
	await windowAnimate("0", "75%", 1000);
	await girlAnimate("-60deg", "0deg", 1000);
	await handAnimate("-20deg", "40deg", 1000);
	girlAnimate("0deg", "-60deg", 1000);
	await handAnimate("40deg", "-20deg", 1000);
	await windowAnimate("75%", "0", 1000);
	await carAnimate(shift, shift * 2, 2000);
	buttonStart.disabled = false;
}


buttonStart.addEventListener("click", () => {
	buttonStart.disabled = true;
	buttonReset.disabled = false;
	animationStart();
})

buttonReset.addEventListener("click", () => {
	for (let anim of animationsArray) {
		anim.cancel();
		buttonStart.disabled = false;
		buttonReset.disabled = true;
	}
});

function backgroundAnimate(first, second, time) {
	const animation = background.animate(
		[
			{ transform: `translateX(${first})` },
			{ transform: `translateX(${second})` }
		],
		{
			duration: time,
			iterations: 1,
		}
	)
	animationsArray.push(animation);
	return animation.finished;
}

function carAnimate(first, second, time) {
	const animation = car.animate(
		[
			{ transform: `translateX(${first}px)` },
			{ transform: `translateX(${second}px)` }
		],
		{
			duration: time,
			iterations: 1,
			fill: "forwards",
		}
	);
	animationsArray.push(animation);
	return animation.finished;

}

function wheelsAnimate(first, second, time) {
	let animations = [];

	wheelContainers.forEach((wheel) => {

		const animation = wheel.animate(
			[
				{ transform: `rotate(${first})` },
				{ transform: `rotate(${second})` },
			],
			{
				duration: time,
				iterations: 3,
			}
		)
		animationsArray.push(animation);
		animations.push(animation.finished);
	});
	return Promise.all(animations);
}

function windowAnimate(first, second, time) {
	const animation = carWindow.animate(
		[
			{ transform: `translateY(${first})` },
			{ transform: `translateY(${second})` }
		],
		{
			duration: time,
			iterations: 1,
			fill: "forwards"
		}
	)
	animationsArray.push(animation);
	return animation.finished;
}

function girlAnimate(first, second, time) {
	const animation = girl.animate(
		[
			{ transform: `rotate(${first})` },
			{ transform: `rotate(${second})` },
		],
		{
			duration: time,
			iterations: 1,
			fill: "forwards"
		}
	)
	animationsArray.push(animation);
	return animation.finished;
}

function handAnimate(first, second, time) {
	const animation = hand.animate(
		[
			{ transform: `rotate(${first})` },
			{ transform: `rotate(${second})` },
		],
		{
			duration: time,
			iterations: 1,
			fill: "forwards"
		}
	)
	animationsArray.push(animation);
	return animation.finished;
}