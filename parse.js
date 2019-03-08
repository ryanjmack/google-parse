const srcs = {
	reputable: ["npr"],
	satire: ["cnn"],
	fake: ["fox"]
}


const red = "rgba(255,0,0,0.3)";
const orange = "rgba(255,165,0,0.35)";
const green = "rgba(0,255,0,0.3)";


// creates an img element just to see how an icon may look for the filter
const createImg = () => {
	const img = document.createElement("img");
	img.setAttribute('src', 'https://placebear.com/64/64');
	img.setAttribute('height', '16px');
	img.setAttribute('width', '16px');
	img.style.marginLeft = '8px';
	img.style.marginTop = '4px';
	return img;
};


const linkContainers = [...document.querySelectorAll("div.r")]


linkContainers.forEach(container => {
	const link = container.firstElementChild;

	// text only highlighting
	if (srcs.reputable.some(src => link.href.includes(src))) {
		console.log(`Reputable: ${link.href}`);
		link.style.backgroundColor = green;
	}
	
	// div highlighting + icon
	else if (srcs.satire.some(src => link.href.includes(src))) {
		console.log(`Satire: ${link.href}`);
		container.style.backgroundColor = orange;
		container.appendChild(createImg());
		container.style.display = 'flex';
	}
	
	// div highlighting only
	else if (srcs.fake.some(src => link.href.includes(src))) {
		console.log(`Fake: ${link.href}`);
		container.style.backgroundColor = red;
	}
});
