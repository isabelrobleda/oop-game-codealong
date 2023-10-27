class Player {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;

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
        this.width = 30;
        this.height = 10;
        this.positionX = 50;
        this.positionY = 100;
        this.obstacleElm = null;

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
}, 3000);

// update obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
       /// move obstacle
        obstacleInstance.moveDown()
        /// detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
          ) {
            // Collision detected!
            console.log("game over!")
            location.href = "./gameover.html"
          } 

    })
}, 30)



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
