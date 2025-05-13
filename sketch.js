function setup() {
  createCanvas(700, 600);
}


 let xJogador = [600,600,600,600];
 let yJogador = [100,250,550,400];
 let jogador = ["🐟","🐠","🦈",'🧜🏻‍♂️'];
let teclas = ["a", "s", "d",'f','g'];
let quantidade = jogador.length;
 
function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  verificaVencedor();
}

function desenhaJogadores() {
  textSize(50)
  for(let i=0; i < quantidade; i++) {
    text(jogador[i], xJogador[i], yJogador[i]);
  }
  
  
}

function desenhaLinhaDeChegada() {
  fill("white");
  rect(100, 0, 15, 600);
  fill("black");
  for (let yAtual = 0; yAtual < 700; yAtual += 20) {
    rect(100, yAtual, 15, 10);
  }
}

function verificaVencedor() {
  for (let i = 0; i < quantidade; i++) {
    if (xJogador[i] < 50) {
      text(jogador[i] + " venceu!", 250, 200);
      noLoop();
    }
  }
}
 


function ativaJogo() {
  if (focused == true) {
    background("rgb(42,54,207)");
  } else {
    background("rgb(15,225,255)");
  }
}

function keyReleased() {
  for (let i = 0; i < quantidade; i++) {
    if (key == teclas[i]) {
      xJogador[i] += random(-20);
    }
  }
}