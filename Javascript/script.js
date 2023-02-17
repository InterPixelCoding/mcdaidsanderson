window.addEventListener('DOMContentLoaded', (event) => { 
	console.log('Website fully loaded')
	// animate in on scroll
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry => {
			console.log(entry)
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
                entry.target.classList.remove('hidden')
			}
		}))
	})

	const hiddenElements = document.querySelectorAll('.hidden');
	hiddenElements.forEach((el) => observer.observe(el));

});
// height: auto hack with javascript
const header = document.querySelector('header')
var headerHeight = header.offsetHeight;
header.style.height =`${headerHeight}px`

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('header > nav')
menuButton.addEventListener("click", function () {
	menu.classList.toggle('menu-active');
	if(menuButton.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
		header.style.height = `100%`
		menuButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	} else {menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`; header.style.height = `${headerHeight}px`}
})
