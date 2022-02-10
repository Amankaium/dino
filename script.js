document.addEventListener("DOMContentLoaded", main)

function main () {
    document.addEventListener("keydown", go)    
}

function go (event) {
    let dino = document.querySelector(".gamer")
    let x = parseInt(dino.style.left)
    let y = parseInt(window.getComputedStyle(dino).top)
    
    x = !x ? 50 : x 

    if (event.code === "ArrowRight") {
        x += 20
    } else if (event.code === "ArrowLeft") {
        x -= 20
    } else if (event.code === "Space") {
        dino.style.top = `${y - 100}px`
        setTimeout(() => {dino.style.top = `${y}px`}, 700)
    }

    dino.style.left = `${x}px`
    
}