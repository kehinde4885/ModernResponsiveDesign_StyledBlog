// Any Javascript here is to Further the Responsiveness of the Website

const header = document.getElementById("header")

const hero = document.getElementById('hero')

const html = document.querySelector('html')


//Event Handler is a function that runs when this event is
// Fired, alternative to addEventListener()
window.onresize = () => {
    setHeroHeight()
}


function setHeroHeight() {
    hero.style.height = `${html.clientHeight - header.clientHeight}px`
}

setHeroHeight()

