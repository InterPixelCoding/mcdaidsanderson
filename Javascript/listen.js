const audioItems = [
    'American Reels',
    'Glasgow Girl',
    'Lancashire Hills',
    "There's a welcome",
    'Until next summer'
];

function create_audio_track(track) {
    const trackFormatted = track.toLowerCase().replace(/\s+/g, '-');
    console.log(track, trackFormatted);
    const newTrackWidget = document.createElement('div');
    newTrackWidget.classList.add('track-container');
    newTrackWidget.classList.add('instant-show');

    const trackTitle = document.createElement("h3");
    trackTitle.textContent = track;

    const trackButton = document.createElement("button");
    trackButton.innerHTML = `<img src="./Icons/Play.png" alt="Play">`;
    trackButton.classList.add('play')

    const trackTimeline = document.createElement("div");

    const trackAudio = document.createElement("audio");
    trackAudio.src = `./Audio-Files/${trackFormatted}.mp3`

    trackAudio.onloadedmetadata = () => {
        const blendAmount = 0;
        setInterval(function getTimePercentage() {
            trackTimeline.style.background = 
            `linear-gradient(90deg, var(--primary-colour) 0%, var(--primary-colour) ${(trackAudio.currentTime / trackAudio.duration) * 100}%, var(--to-play) ${((trackAudio.currentTime / trackAudio.duration) * 100) + blendAmount}%)`
            }, 500);
    
    trackButton.addEventListener("click", () => {
            if(trackButton.innerHTML === `<img src="./Icons/Play.png" alt="Play">`) {
                trackAudio.play()
                trackButton.innerHTML = `<img src="./Icons/Pause.png" alt="Pause">`;
                trackButton.classList.add('pause');
                trackButton.classList.remove('play');
            }
            else {
                trackAudio.pause();
                trackButton.innerHTML = `<img src="./Icons/Play.png" alt="Play">`;
                trackButton.classList.remove('pause');
                trackButton.classList.add('play');
            }
        })
    }

    newTrackWidget.appendChild(trackAudio);
    newTrackWidget.appendChild(trackTitle);
    newTrackWidget.appendChild(trackButton);
    newTrackWidget.appendChild(trackTimeline);

    return newTrackWidget;
}
    
const listenContainer = document.querySelector('.audio-widget-container');

audioItems.forEach( function(track, index) {
    const newTrackWidget = create_audio_track(track);
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
    iconImage.classList.add('instant-show');

    newIcon.appendChild(iconImage);

    IconContainer.appendChild(newIcon)
});

IconContainer.classList.add('track-container');
IconContainer.classList.add('icon-container');
IconContainer.classList.add('instant-show');

listenContainer.appendChild(IconContainer);

// 09/11/2025 Updated Code Below, Added Folk'n'Trouble Container
const audio_sample = document.querySelector(".audio-sample");
const sample_track = create_audio_track("I Wish That I Was Home");
audio_sample.appendChild(sample_track);
setTimeout(() => {
    document.querySelector(".album-sample").classList.remove("hidden");
}, 1000);
