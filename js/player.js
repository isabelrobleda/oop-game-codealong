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