const LOCATIONS = [
	[55.733685, 37.588264],
	[41.020987, 28.973868],
	[41.324317, 69.257806],
	[53.906780, 27.555681],
	[60.203909, 29.707028]
];

const NEXT = document.getElementById("next");
NEXT.addEventListener("click", nextRound);
const LOC_NUM = document.getElementById("location-number");

let PLAYER;
let INDEX = 0;

ymaps.ready(() => {
	if (!ymaps.panorama.isSupported()) {
		console.log("Browser doesn't support Yandex Maps Panoramas");
		return;
	}
	ymaps.panorama.createPlayer("panorama", LOCATIONS[INDEX], {})
		.done((player) => {
			PLAYER = player;
		});
	LOC_NUM.innerText = (INDEX + 1);
});


function nextRound() {
	INDEX++;
	LOC_NUM.innerText = (INDEX + 1);
	if (INDEX < 5) {
		PLAYER.moveTo(LOCATIONS[INDEX]);
	}
	if (INDEX >= 4) {
		NEXT.style.display = "none";
	}
}