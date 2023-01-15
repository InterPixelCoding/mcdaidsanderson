const image = document.querySelector('.enlarge')

        image.addEventListener("click", () => {
            image.classList.toggle('enlarged')
        })

function openMenu() {
    document.querySelector('.hamburger').style.transform = 'translateY(0%)'
}

function closeMenu() {
    document.querySelector('.hamburger').style.transform = 'translateY(-110%)'
}

document.addEventListener('play', function(e){  
    var audios = document.getElementsByTagName('audio');  
    for(var i = 0, len = audios.length; i < len;i++){  
        if(audios[i] != e.target){  
            audios[i].pause();  
        }  
    }  
}, true);