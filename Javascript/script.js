window.addEventListener('DOMContentLoaded', (event) => { 
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
menuButton.addEventListener("click", () => {
	menu.classList.toggle('menu-active');
	if(menuButton.innerHTML === `<i class="fa-solid fa-bars"></i>`) {
		header.style.height = `100%`
		menuButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
	} else {menuButton.innerHTML = `<i class="fa-solid fa-bars"></i>`; header.style.height = `${headerHeight}px`}
})

// Listen Page
audioItems = [
'American Reels',
'Glasgow Girl',
'Lancashire Hills',
"There's a welcome",
'Until next summer'
]

const listenContainer = document.querySelector('.audio-widget-container');

audioItems.forEach(track => {
	const trackFormatted = (track.replace(` `, `-`).replace(` `, `-`)).toLowerCase();
	const newTrackWidget = document.createElement('div');
	newTrackWidget.classList.add('track-container')

	const trackTitle = document.createElement("h3");
	trackTitle.textContent = track;

	const trackButton = document.createElement("button");
	trackButton.innerHTML = `<img src="./Icons/Play.png" alt="Play">`;
	const trackTimeline = document.createElement("div");

	const trackAudio = document.createElement("audio");
	trackAudio.src = `./Audio-Files/${trackFormatted}.mp3`

	trackAudio.onloadedmetadata = () => {
		const blendAmount = 0;
		setInterval(function getTimePercentage() {
			trackTimeline.style.background = 
			`linear-gradient(90deg, var(--primary-colour) 0%, var(--primary-colour) ${(trackAudio.currentTime / trackAudio.duration) * 100}%, var(--to-play) ${((trackAudio.currentTime / trackAudio.duration) * 100) + blendAmount}%)`
			}, 250);
	
	trackButton.addEventListener("click", () => {
			if(trackButton.innerHTML === `<img src="./Icons/Play.png" alt="Play">`) {
				trackAudio.play()
				trackButton.innerHTML = `<img src="./Icons/Pause.png" alt="Play">`;
			}
			else {
				trackAudio.pause();
				trackButton.innerHTML = `<img src="./Icons/Play.png" alt="Play">`
			}
		})
	}

	newTrackWidget.appendChild(trackAudio);
	newTrackWidget.appendChild(trackTitle);
	newTrackWidget.appendChild(trackButton);
	newTrackWidget.appendChild(trackTimeline);

	listenContainer.appendChild(newTrackWidget);
});

const IconContainer = document.createElement("div");
const IconTitle = document.createElement("h3")
IconTitle.textContent = 'Continue Listening on:';

IconContainer.appendChild(IconTitle)

const icons = [
	{name: 'itunes', link: '#'},
	{name: 'spotify', link: '#'},
	{name: 'youtube', link: '#'},
];
icons.forEach(icon => {
	const newIcon = document.createElement("a");
	newIcon.href = icon.link;
	newIcon.target = `_blank`;

	const iconImage = document.createElement("img")
	iconImage.src = `./Icons/${icon.name}.png`;
	console.log(`${icon.name}.png`)

	newIcon.appendChild(iconImage);

	IconContainer.appendChild(newIcon)
});

IconContainer.classList.add('track-container');
IconContainer.classList.add('icon-container');

listenContainer.appendChild(IconContainer)