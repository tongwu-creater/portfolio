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
