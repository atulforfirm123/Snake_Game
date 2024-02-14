const board=document.querySelector('.board');

let gameOver=false;
let foodX, foodY;
let snakeX=5,snakeY=10;
let snakeBody=[];
let veloX=0,veloY=0;
let setIntervalId;

const changeFoodPosition=()=>{
  foodX=Math.floor(Math.random()*30)+1;
  foodY=Math.floor(Math.random()*30)+1;
}

const handleGameOver=()=>{
  clearInterval(setIntervalId);
  alert('Game Over!!!!');
  location.reload();
}
const changeDirection=(e)=>{
  if(e.key==='ArrowUp' && veloY!=1){
    veloX=0;
    veloY=-1;
  }else if(e.key==='ArrowDown' && veloY!=-1){
    veloX=0;
    veloY=1;
  }else if(e.key==='ArrowLeft' && veloX!=1){
    veloX=-1;
    veloY=0;
  }else if(e.key==='ArrowRight' && veloX!=-1){
    veloX=1;
    veloY=0;
  }
  
}
const startGame=()=>{
  if(gameOver) return handleGameOver();

  let htmlMarkup=`<div class='food' style="grid-area:${foodY}/${foodX}"></div>`;
  if(snakeX===foodX && snakeY===foodY){
    changeFoodPosition();
    snakeBody.push([foodX,foodY]);
  }

  for(let i=snakeBody.length-1;i>0;i--){
    snakeBody[i]=snakeBody[i-1];
  }

  snakeBody[0]=[snakeX,snakeY];

  snakeX+=veloX;
  snakeY+=veloY;

  if(snakeX<=0 || snakeX>30 || snakeY<=0 || snakeY>30){
    gameOver=true;
  }

  for(let i=0;i<snakeBody.length;i++){
    htmlMarkup+=`<div class='snakeHead' style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]}"></div>`;
    if(i!==0 && snakeBody[0][1]===snakeBody[i][1] && snakeBody[0][0]===snakeBody[i][0]){
      gameOver=true;
    }
  }

  
  board.innerHTML=htmlMarkup;
}
changeFoodPosition();
setIntervalId=setInterval(startGame,200);
document.addEventListener('keydown',changeDirection);