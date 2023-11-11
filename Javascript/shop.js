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
    },
    {
        folder: 'my-folk-1',
        title: 'My Folk 2',
        info: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet ex possimus reprehenderit? Iure ea incidunt facilis doloribus illo qui rerum laboriosam libero ratione ullam! Animi distinctio tempora minima dicta voluptas harum inventore atque, quod similique neque ex? Nesciunt at excepturi id saepe amet iste. ',
        tracks: [
            'Track 1', 'Track 2', 'Track 3', 'Track 4', 'Track 5', 'Track 6', 'Track 7', 'Track 8', 'Track 9', 'Track 10',  
        ],

        youtubeLink: '#',
        spotifyLink: '#',
        appleMusicLink: '#',

        price: 15.99
    },
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

                            checkoutShopItem.textContent = cd.title;
                            checkoutPrice.textContent = 'Total Price: £' + cd.price;
                            checkoutImage.style.backgroundImage = cdCover.style.backgroundImage;
                            popUp.classList.remove('disabled')
                            checkout.classList.remove('disabled')
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
})

// Render the button component
paypal
  .Buttons({
    // Styles
    style: {
        color:  'silver',
        shape:  'pill',
        label:  'paypal'
      },
    // Sets up the transaction when a payment button is clicked
    createOrder: function (data) {
      return fetch("myserver.com/api/orders", {
        method: "POST",
        // Use the "body" parameter to optionally pass additional order information
        // such as product ID or amount
        body: {
          paymentSource: data.paymentSource
        }
      })
        .then((response) => response.json())
        .then((order) => order.id);
    },
    // Finalize the transaction after payer approval
    onApprove: function (data) {
      return fetch(`myserver.com/api/orders/${data.orderID}/capture`, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((orderData) => {
          console.log("Capture result", orderData, JSON.stringify(orderData, null, 2));
          var transaction = orderData.purchase_units[0].payments.captures[0];
        });
    },
    onError: function (error) {
    }
  })
  .render("#paypal-button-container");

const cardField = paypal.CardFields({
    createOrder: function (data) {
        return fetch("myserver.com/api/orders", {
            method: "post",
            body: {
                paymentSource: data.paymentSource
            }
        })
        .then((res) => {
            return res.json();
        })
        .then((orderData) => {
            return orderData.id;
        });
    },
    onApprove: function (data) {
        const { orderID } = data;
        return fetch(`myserver.com/api/orders/${orderID}/capture`, {
            method: "post",
        })
        .then((res) => {
            return res.json();
        })
        .then((orderData) => {
            // Redirect to success page
        });
    },
    onError: function (error) {
        // Do something with the error from the SDK
    },
});

// Render each field after checking for eligibility
if (cardField.isEligible()) {
    const nameField = cardField.NameField();
    nameField.render('#card-name-field-container');

    const numberField = cardField.NumberField();
    numberField.render('#card-number-field-container');

    const cvvField = cardField.CVVField();
    cvvField.render('#card-cvv-field-container');

    const expiryField = cardField.ExpiryField();
    expiryField.render('#card-expiry-field-container');

    // Add click listener to submit button and call the submit function on the CardField component
    document.getElementById("card-field-submit-button").addEventListener("click", () => {
        cardField
        .submit()
        .then(() => {
            // submit successful
        });
    });
};