const colorBtn = document.getElementById("color");
const detailsBtn = document.getElementById("details");

const allDetails = [
	"Vedanth",
	"Jayanth",
	"Prithvi",
	"Varun",
	"Hari",
	"Nithish",
	"Harshitha",
	"Shravani",
	"Apoorva",
];

const colors = ["orange", "red", "blue", "green", "yellow", "black", "pink"];

colorBtn.addEventListener("click", () => {
	const i = Math.floor(Math.random() * colors.length);
	const background = colors[i];
	document.body.style.backgroundColor = background;
});

detailsBtn.addEventListener("click", () => {
	const j = Math.floor(Math.random() * allDetails.length);
	const name = allDetails[j];
	alert(name);
});
