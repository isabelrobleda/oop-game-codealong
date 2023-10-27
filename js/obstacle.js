class Obstacle {
    constructor(){
        this.width = 30;
        this.height = 10;
        this.positionX = Math.floor(Math.random() * (100 - this.width + 1)); //// generate random number between 0 and 100 - this.width. original formula Math.floor(Math.random() * (max - min + 1)) + min;
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
    moveDown() {    
        this.positionY--
        this.obstacleElm.style.bottom = this.positionY + "vh"
    }
}
