class Player {
    constructor(){
        this.positionX = 50// we want to place our player in an x/y axis
        this.positionY = 0 //our player is in the bottom left corner
        this.height = 15 //the height of our player
        this.width = 20 //the width of our player


        //dom manipulation to reflect initial values (size, position)
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

class Obstacle {
    constructor(){
        this.positionX = 50
        this.positionY = 100 
        this.height = 10
        this.width = 15
        this.newObstacle = undefined

        this.createDomElement()
    }

    createDomElement(){
        this.obstacleElm = document.createElement("div")
        this.obstacleElm.classList.add("obstacle")
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"

        const parentElem = document.getElementById("board")
        parentElem.appendChild(this.obstacleElm)
    }
    moveDown(){
    this.positionY--
    this.obstacleElm.style.bottom = this.positionY + "vh"
     }
}

const player = new Player();
const obstaclesArr = []; // will store instances of the class Obstacle

// to create obsacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
}, 2000);

//move obstacles (every 50 mms move all obstavles we have in the array)
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown()
    })
}, 50)



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
