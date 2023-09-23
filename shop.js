// Show full Image
const cdCovers = document.querySelectorAll('.cd-cover');
const popUp = document.querySelector('.pop-up')
cdCovers.forEach(cd => {
    cd.addEventListener("click", () => {
        popUp.classList.remove('disabled');
        console.log('showing pop up')
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