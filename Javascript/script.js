function fix_height(container) {
	container.style.height = `${container.offsetHeight}px`
	return container.offsetHeight;
}

function menu_logic() {
	const header = document.querySelector('header');
	const original_height = fix_height(header);
	const menuButton = document.querySelector('.menu-button');
	const menu = document.querySelector('header > nav')
	menuButton.addEventListener("click", () => {
		menu.classList.toggle('menu-active');
		if(menu.classList.contains('menu-active')) {
			header.style.height = `100vh`
		} else {
			header.style.height = `${original_height}px`
		}
	});
}

setTimeout(menu_logic, 1000)


// Animation Delay
document.addEventListener("DOMContentLoaded", () => {
	const instantShow = document.querySelectorAll('.instant-show');
	instantShow.forEach(function(element, index) {
		element.style.setProperty("--load-delay", `${index * 50}ms`);
	});
});
