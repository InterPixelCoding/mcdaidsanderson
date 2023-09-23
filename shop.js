const CDObjectArray = [
    {
        folder: 'my-folk-1',
        title: 'My Folk 1',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ex possimus reprehenderit? Iure ea incidunt facilis doloribus illo qui rerum laboriosam libero ratione ullam! Animi distinctio tempora minima dicta voluptas harum inventore atque, quod similique neque ex? Nesciunt at excepturi id saepe amet iste. ',
        tracks: [
            'Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6', 'Track 7', 'Track 8', 'Track 9', 'Track 10',  
        ],

        youtubeLink: '#',
        spotifyLink: '#',
        appleMusicLink: '#',

        price: 19.99
    }
]


const shopSection = document.querySelector('.si-master')

// Generate Shop Items
CDObjectArray.forEach(function(cd, index){
        const newShopItem = document.createElement("div");
            const cdCover = document.createElement("img");
            const shopItemInfo = document.createElement("div");
                const title = document.createElement("h2");
                const paragraph = document.createElement("p");
                const trackTitles = document.createElement("div");
                const links = document.createElement("div");
                    const youtubeLink = document.createElement("a");
                    const spotifyLink = document.createElement("a");
                    const appleMusicLink = document.createElement("a");
                    const buyNowContainer = document.createElement("div");
                        const buyNowButton = document.createElement("button");
                            const buyNowButtonIcon = document.createElement("img");
                        const price = document.createElement("span");

        newShopItem.classList.add('si-container');
        cdCover.classList.add('cd-cover');
        shopItemInfo.classList.add('si-info');
        title.classList.add('si-title');
        paragraph.classList.add('si-par');
        trackTitles.classList.add('track-titles');
        links.classList.add('links');
        buyNowContainer.classList.add('buy-now');
        price.classList.add('price');

        cdCover.src = `./Shop/${cd.folder}/cd-cover.png`
        title.textContent = cd.title;
        paragraph.textContent = cd.info;
        cd.tracks.forEach( function(track, index) {
            newTrackSpan = document.createElement("span");
            newTrackSpan.textContent = cd.tracks[index];
            trackTitles.appendChild(newTrackSpan)
        })
        youtubeLink.href = cd.youtubeLink;
        youtubeLink.innerHTML = '<img src="./Icons/youtube.svg" alt="Youtube">'
        spotifyLink.href = cd.youtubeLink;
        spotifyLink.innerHTML = '<img src="./Icons/spotify.svg" alt="Youtube">'
        appleMusicLink.href = cd.youtubeLink;
        appleMusicLink.innerHTML = '<img src="./Icons/apple-music.svg" alt="Youtube">'

        buyNowButton.textContent = 'Buy Now'
        buyNowButtonIcon.src = './Icons/buy-now.svg'
        price.textContent = cd.price;

                        buyNowButton.appendChild(buyNowButtonIcon)
                    buyNowContainer.appendChild(buyNowButton);
                    buyNowContainer.appendChild(price);
                links.appendChild(youtubeLink);
                links.appendChild(spotifyLink);
                links.appendChild(appleMusicLink);
                links.appendChild(buyNowContainer);
            shopItemInfo.appendChild(title);
            shopItemInfo.appendChild(paragraph);
            shopItemInfo.appendChild(trackTitles);
            shopItemInfo.appendChild(links);
        newShopItem.appendChild(cdCover);
        newShopItem.appendChild(shopItemInfo);
    shopSection.appendChild(newShopItem);
})

// Show full Image
const cdCovers = document.querySelectorAll('.cd-cover');
const popUp = document.querySelector('.pop-up')
cdCovers.forEach(cd => {
    cd.addEventListener("click", () => {
        popUp.classList.remove('disabled');
        const newPopUp = document.createElement("img");
        newPopUp.src = cd.src;
        newPopUp.style.height = '80vh';
        newPopUp.style.zIndex = 200;
        newPopUp.style.aspectRatio = '1'
        popUp.appendChild(newPopUp)
        popUp.addEventListener("click", () => {
            newPopUp.remove();
            popUp.classList.add('disabled')
        })
    })
})