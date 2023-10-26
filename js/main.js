class Player {
    constructor(){
        this.positionX = 50// we want to place our player in an x/y axis
        this.positionY = 0 //our player is in the bottom left corner
        this.height = 15 //the height of our player
        this.width = 20 //the width of our player

        this.playerElem = document.getElementById("player")
        this.playerElem.style.width = this.width + "vw"
        this.playerElem.style.height = this.height + "vh"
        this.playerElem.style.left = this.positionX + "vw"
        this.playerElem.style.bottom = this.positionY + "vh"
        
    } 
    moveLeft(){
        this.positionX--
        this.playerElem.style.left = this.positionX + "vw"

    }
    moveRight(){
        this.positionX++
        this.playerElem.style.left = this.positionX + "vw"
    }

}

const player = new Player()

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft()
            break;
        case "ArrowRight":
            player.moveRight()
            break;
    }
})