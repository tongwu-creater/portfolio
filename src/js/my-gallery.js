
const wrapper = document.querySelector('#wrapper')
const carousel = document.querySelector('#image-carousel')
const images = document.querySelectorAll('.painting img')
const btn = document.querySelectorAll('button')
const previous = document.querySelector('#prev')
const nxt = document.querySelector('#next')
const modal = document.getElementById('myModal');
const modalImg = document.getElementById('modalImage');
const captionText = document.getElementById('caption');
const span = document.querySelector('.close');


images.forEach((slide, index) => {
	slide.style.left = `${index * 100}%`
})
let counter = 0;

const slideImage = () => {
	images.forEach(
		(e) => {
			e.style.transform = `translateX(-${counter * 100}%)`
		}
	)
}

const next = () => {
	if (counter < images.length - 1) {
		counter++;
	} else {
		counter = 0;
	}
	slideImage();
	console.log(counter);
};

const prev = () => {
	if (counter > 0) {
		counter--;
	} else {
		counter = images.length - 1;
	}
	slideImage();
	console.log(counter);
};


document.addEventListener('DOMContentLoaded', (event) => {

	images.forEach((img) => {
		img.addEventListener('click', () => {
			modal.style.display = 'block';
			modalImg.src = img.src;
			captionText.innerHTML = img.alt;
		});
	});

	span.addEventListener('click', () => {
		modal.style.display = 'none';
	});

});

const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

function toggle() {
	body.classList.toggle("overflow");
	overlay.classList.toggle("overlay--active");
	menuBtn.classList.toggle("open");
	menuItems.classList.toggle("open");
}

menuBtn.addEventListener("click", e => {
	e.stopPropagation();
	toggle();
})

window.onkeydown = function (event) {
	const key = event.key;
	const active = menuItems.classList.contains('open');
	if (key === "Escape" && active) {
		toggle();
	}
};

document.addEventListener('click', e => {
	let target = e.target,
		its_menu = target === menuItems || menuItems.contains(target),
		its_hamburger = target === menuBtn,
		menu_is_active = menuItems.classList.contains('open');
	if (!its_menu && !its_hamburger && menu_is_active) {
		toggle();
	}
});

expandBtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.classList.toggle("open");
	});
});



