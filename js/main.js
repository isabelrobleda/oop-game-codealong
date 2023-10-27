const player = new Player(); //create a new player
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

        //// remove obstacles if outside
        if(obstacleInstance.positionY < 0 - obstacleInstance.height){
            ///remove dom element
            obstacleInstance.obstacleElm.remove()

            ///remove from array
            obstaclesArr.shift()
        }

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
