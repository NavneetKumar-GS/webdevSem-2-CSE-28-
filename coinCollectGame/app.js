let hero = document.getElementById("hero");
let scoreBox = document.getElementById("score");
let coin = document.getElementById("coin");
let enemy = document.getElementById("enemy");
let score = 0;


let x = 100;
let y = 100;
let ex = 500;
let ey = 500;
let enemySpeed = 5;
let speed = 30;


document.body.addEventListener("keydown", (event) =>{

    console.log("Key Pressed:",event.key)

    if(event.key === "d" || event.key === "ArrowRight"){

        x = x + speed;

    }else if(event.key === "a" || event.key === "ArrowLeft"){
        x = x -speed;

    }else if(event.key === "s" || event.key === "ArrowDown"){
        y = y + speed;
        
    }else if(event.key === "w" || event.key === "ArrowUp"){
         y = y - speed;
        
    }

    if(x>window.innerWidth) x = 0;
    if(x<0) x = window.innerWidth;
    if(y>window.innerWidth) y = 0;
    if(y<0) y = window.innerWidth; 


    hero.style.left = x + "px";
    hero.style.top = y + "px";
    checkCollision();
    
});

const moveCoin = () => {

        let randX = Math.floor(Math.random()*(window.innerWidth-50));
        let randY = Math.floor(Math.random()*(window.innerHeight-50));

        coin.style.left = randX + "px"
        coin.style.top = randY + "px"

    }


    const checkCollision = () => {

        let heroRect = hero.getBoundingClientRect();
        let coinRect = coin.getBoundingClientRect();

        if(heroRect.left<coinRect.right && heroRect.right>coinRect.left && heroRect.top<coinRect.bottom && heroRect.bottom>coinRect.top ){

            score++;
            scoreBox.innerText = score;
            moveCoin();
            console.log("Coin collected")
        }

    }


    setInterval(() => {
    
    if (ex < x - 10) { 
        ex = ex + enemySpeed; 
    } 
    else if (ex > x + 10) { 
        ex = ex - enemySpeed; 
    }
    if (ey < y - 10) { 
        ey = ey + enemySpeed; 
    } 
    else if (ey > y + 10) { 
        ey = ey - enemySpeed; 
    }

    enemy.style.left = ex + "px";
    enemy.style.top = ey + "px"; 

    checkGameOver();

}, 100);


const checkGameOver = () => {

    let heroRect = hero.getBoundingClientRect();
    let enemyRect = enemy.getBoundingClientRect();

    if (
        heroRect.left < enemyRect.right &&
        heroRect.right > enemyRect.left &&
        heroRect.top < enemyRect.bottom &&
        heroRect.bottom > enemyRect.top
    ) {
        alert("GAME OVER! 💀 Your Score: " + score);
        location.reload(); 
    }

};
