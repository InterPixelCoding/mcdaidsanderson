const CDObjectArray = [
    {
        folder: 'my-folk-1',
        title: 'My Folk 1',
        info: 
`Although both Brian and Michael are members of the band 'Kinfolk' unfortunately the band members all live in different parts of the country.  As a result getting together has its challenges!
However Brian continues to write songs and took the opportunity, particularly during the Covid lockdown period, to work on some solo material. "I wanted to write songs that were more relevant to me personally" says Brian speaking about his debut solo album 'My Folk 1'. "They should relate to my life experiences"
The songs are undoubtedly folk and acoustic based but it is influenced by many genres of music and the use of vocal harmonies. The album covers a mix of subjects and topics that hopefully make you think and I'm sure that we can all relate to in some way at different periods in our lives. 
Michael also plays on the album and enhances each of the songs he appears on with his own distinct and exceptional fiddle playing.
As a result of the work they done together on the album and their ongoing work together since, Brian and Michael's musical relationship has really developed and continues to flourish! 
Both are excited by their new venture together, 'McDaid & Sanderson'!
`,
        tracks: [
            'Glasgow Girl', 
            'My Wee Angel', 
            'Winters Over', 
            'Old Buncrana Town', 
            'Eilean Mor', 
            'Life Changes', 
            'Things Are Just Not Looking Good', 
            "If You Don't Want Me", 
            "I'm Here For You",
            "I'm Still Missing You",  
        ],

        youtubeLink: '#',
        spotifyLink: '#',
        appleMusicLink: '#',
        accent: '#001b00',

        price: 10.00
    }
]


const shopSection = document.querySelector('.si-master')

// Add Class to multiple objects //
function addClass(className, objectArray) {
    if (typeof className !== 'string' || className.trim() === '') {
      console.error('Invalid class name');
      return;
    }
  
    if (!Array.isArray(objectArray)) {
      console.error('Second argument must be an array');
      return;
    }
    objectArray.forEach(function (element) {
      if (element instanceof Element) {
        element.classList.add(className);
      } else {
        console.error('Invalid element in the array:', element);
      }
    });
}

// Generate Shop Items
CDObjectArray.forEach(function(cd, index){
        const newShopItem = document.createElement("div");
            const cdCover = document.createElement("div");
                const mobilePrice = document.createElement("span")
                mobilePrice.style.setProperty("--accent-colour", cd.accent);
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
                    const checkout = document.querySelector('.checkout')
                        buyNowButton.addEventListener("click", () => {
                            const checkoutImage = document.querySelector('.checkout > .basket > .cd-cover');
                            const checkoutPrice = document.querySelector('.total-price')
                            const checkoutShopItem = document.querySelector('.name-of-product')
                            doPayment(cd.price)
                            checkoutShopItem.textContent = cd.title;
                            checkoutPrice.textContent = 'Total Price: £' + cd.price;
                            checkoutImage.style.backgroundImage = cdCover.style.backgroundImage;
                            popUp.classList.remove('disabled')
                            checkout.classList.remove('disabled')
                        })

                        const scrollContainer = document.querySelector('.scroll-container')
                        scrollContainer.addEventListener("click", () => {
                            console.log('Clicked!')
                        })

        newShopItem.classList.add('si-container');
        cdCover.classList.add('cd-cover');
        shopItemInfo.classList.add('si-info');
        title.classList.add('si-title');
        paragraph.classList.add('si-par');
        trackTitles.classList.add('track-titles');
        links.classList.add('links');
        buyNowContainer.classList.add('buy-now');
        price.classList.add('price', 'mobile-hide');

        cdCover.style.backgroundImage = `url('./Shop/${cd.folder}/cd-cover.png')`
        title.textContent = cd.title;
        paragraph.tabIndex = '1'
        paragraph.classList.add('custom-scroll-bar');
        paragraph.innerHTML = (cd.info).replace(/\n/g, "<br>");
        if(paragraph.innerHTML.length > 500) {paragraph.classList.add('read-more')}
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
        price.textContent = '£' + cd.price;
        mobilePrice.textContent = '£' + cd.price

        addClass('instant-show', [buyNowContainer, youtubeLink, spotifyLink, appleMusicLink, title, paragraph, trackTitles, links, cdCover])
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
                cdCover.appendChild(mobilePrice);
        newShopItem.appendChild(cdCover);
        newShopItem.appendChild(shopItemInfo);
    shopSection.appendChild(newShopItem);
})

// Show full Image
const cdCovers = document.querySelectorAll('.cd-cover:not(.no-hover)');
const popUp = document.querySelector('.pop-up')
const checkout = document.querySelector('.checkout')

cdCovers.forEach(cd => {
    cd.addEventListener("click", () => {
        popUp.classList.remove('disabled');
        popUp.classList.add('click-off')
        const newPopUp = document.createElement("img");
        backgroundImageFormatted = String(cd.style.backgroundImage);
        newPopUp.src = backgroundImageFormatted.substr(5, backgroundImageFormatted.length - 7);
        newPopUp.style.height = '80vh';
        newPopUp.style.zIndex = 200;
        newPopUp.style.aspectRatio = '1'
        popUp.appendChild(newPopUp)
        popUp.addEventListener("click", () => {
            if(popUp.classList.contains('click-off')) {
                newPopUp.remove();
                popUp.classList.add('disabled')
                popUp.classList.remove('click-off')
            }
        })
    })
})

// Exit button
const exit = document.querySelector('.exit')
exit.addEventListener("click", () => {
    addClass('disabled', [checkout, popUp])
    document.querySelectorAll('.scroll-container > *').forEach(item => {item.remove()})
})

function doPayment(price) {
   paypal.Buttons({
       createOrder: function(data, actions) {
           return actions.order.create({
               purchase_units: [
                   {
                       amount: {
                           value: price,
                       },
                   },
               ],
           })
       },
       onApprove: function (data, actions) {
           return actions.order.capture().then(function (details) {
               alert("Your transaction has been successfully completed, with a total cost of £" + price)
           })
       },
   }).render(".scroll-container")
}

