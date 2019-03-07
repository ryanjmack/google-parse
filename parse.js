const srcs = {
	reputable: ["npr"],
	satire: ["cnn"],
	fake: ["fox"]
}


const red = "rgba(255,0,0,0.3)";
const orange = "rgba(255,165,0,0.35)";
const green = "rgba(0,255,0,0.3)";


const linkContainers = [...document.querySelectorAll("div.r")]


linkContainers.forEach(container => {
	const link = container.firstElementChild;

	if (srcs.reputable.some(src => link.href.includes(src))) {
		console.log(`Reputable: ${link.href}`);
		link.style.backgroundColor = green;
	}
	else if (srcs.satire.some(src => link.href.includes(src))) {
		console.log(`Satire: ${link.href}`);
		container.style.backgroundColor = orange;
	}
	else if (srcs.fake.some(src => link.href.includes(src))) {
		console.log(`Fake: ${link.href}`);
		container.style.backgroundColor = red;
	}
});
