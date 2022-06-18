var img, img2, img3, song, song2, song3; // variável para poder iniciar o processo de utilizar imagem.
var tela = 0 //variável para as telas
var largura = 200; // largura responsável pela dimensão do retangulo dentro do (Iniciar) e do (Informações)
var altura = 40;
var xMenu = 235; //Localização x do menu
var yMenu1 = 90; //Localização y do menu
var yMenu2 = 130;
var nota = 0; //variavel para pontuação de acertos
var xMenu2 = 502;
var soma = 0;
var erro = 0;
var timing;



function preload() {
  img = loadImage('duvida.png');
  img2 = loadImage('aline.jpg');
  img3 = loadImage('game-over-escape-rooms.jpg');
  song = loadSound('Escape.mp3');
  song2 = loadSound('Aplausos.mp3');
  song3 = loadSound('Game_Over.mp4');
}

function setup() {
  createCanvas(650, 410);
  img.loadPixels();
  c = img.get(img.width, img.height);
//  img2.loadPixels();
 // c = img2.get(img2.width, img2.height);
  radio = createRadio();
  radio2 = createRadio();
  radio3 = createRadio();
  radio4 = createRadio();
  radio5 = createRadio();
  radio6 = createRadio();
  radio7 = createRadio();
  radio8 = createRadio();
  radio9 = createRadio();
  radio10 = createRadio();
  textStyle(NORMAL);
  //song.loop();
 // song2.loop();
 // song3.loop();
  //song4.loop();
}

function draw() {
  if (tela == 0) {
    menu()
  } else if (tela == 1) { //tela de informações;
    fase1()
  } else if (tela == 2) {
    fase2()
  } else if (tela == 3) {
    fase3()
  } else if (tela == 4) {
    fase4()
  } else if (tela == 5) {
    fase5()
  } else if (tela == 6) {
    fase6()
  } else if (tela == 7) {
    fase7()
  } else if (tela == 8) {
    fase8()
  } else if (tela == 9) {
    fase9()
  } else if (tela == 10) {
    fase10()
  } else if (tela == 11) {
    GamerOver()
  } else if (tela == 12) {
    Information()
  } else if (tela == 13) {
    Créditos()
  } else if (tela == 14) {
    Parabéns()
  }

}

function menu() {
  timing = 120;
  background(255);
  image(img, -3, -160, 650, 700);
  textAlign(CENTER);
  textSize(26);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 150 && mouseY < 150 + altura) {
    stroke(0);
    noFill();
    rect(xMenu, 140, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 1;
      song.loop();
    }
  }
  fill(0);
  noStroke();
  text("Iniciar", 335, 170);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 190 && mouseY < 190 + altura) {
    stroke(0);
    noFill();
    rect(xMenu, 180, largura, altura, 15);
    if (mouseIsPressed) {
      tela = 12;
    }
  }
  fill(0);
  noStroke();
  text("Informações", 335, 210);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 230 && mouseY < 230 + altura) {
    stroke(0);
    noFill();
    rect(xMenu, 220, largura, 40, 15);
    if (mouseIsPressed) {
      tela = 13;
    }
  }
  fill(0);
  noStroke();
  text("Créditos", 335, 250);
}

function fase1() {
  radio.show();
  background(255);
  image(img, -3, -10, 660, 380);
  //informações sobre o jogo
  text("1. Bia foi ao hospital e ficou aguardando ser chamada, quando chegou sua vez ela  direcionou-se à porta do consultório e ____  antes de entrar.", 30, 30, 600);
  textSize(17);
  fill(20);
  stroke(250);

  // 4 botões de radio para multipla escolha.

  radio.option('pediu licença.', 'pediu licença.');
  radio.option('chutou a porta.', 'chutou a porta.');
  radio.option('empurrou  porta.', 'empurrou  porta.');
  radio.option('gritou.', 'gritou.');
  radio.style('width', '125px');
  radio.position(20, 290);
  radio.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val = radio.value();
  if (val === 'pediu licença.') {
    radio.hide();
    tela = 2;
    
    timing = 120; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val === 'chutou a porta.' || val === 'empurrou  porta.' || val === 'gritou.') { //se o timing chegar a 0
      tela = 11;
      radio.hide();
      song.pause();
      song3.play();
      radio.remove(val);
    }
  }
  text(timing, 600, 340);

}
function fase2() {
  //song.play();
  radio2.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("2. Complete a frase de Abraham Lincoln que diz: O auto-_______, é a raiz da _______, a noção de dignidade cresce com a habilidade de dizer não a si ________.", 30, 30, 600);
  textSize(17); //tamanho da letra 

  radio2.option('direção, amargura, mesmo', 'direção, amargura, mesmo');
  radio2.option('próprio, direção, respeitar', 'próprio, direção, respeitar');
  radio2.option('amargura, piedade, próprio', 'amargura, piedade, próprio');
  radio2.option('respeito, disciplina, mesmo', 'respeito, disciplina, mesmo');
  radio2.style('width', '200px');
  radio2.position(20, 290);
  radio2.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val2 = radio2.value();
  if (val2 === 'respeito, disciplina, mesmo') {
    radio2.hide();
    tela = 3;
    timing = 157; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val2 === 'amargura, piedade, próprio' || val2 === 'próprio, direção, respeitar' || val2 === 'direção, amargura, mesmo') { //se o timing chegar a 0
      tela = 11;
      radio2.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);

}

function fase3() {
  radio3.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("3. Quais palavras completam melhor a frase : _________,já vou dormir,_________meu pai e minha mãe.", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio.hide(); // função utilizada para esconder os valores da tela 1, para não haver sobreposição dos valores da tela 2 com a tela 3.
  radio3.option('Cansei, bom dia', 'Cansei, bom dia');
  radio3.option('Boa noite,bênção', 'Boa noite,bênção');
  radio3.option('Obrigado,cansei', 'Obrigado,cansei');
  radio3.option('Bom dia, licença', 'Bom dia, licença');
  radio3.style('width', '140px');
  radio3.position(30, 280);
  radio3.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val3 = radio3.value();
  if (val3 === 'Boa noite,bênção') {
    tela = 4;
    radio3.hide();
    timing = 154; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val3 === 'Cansei, bom dia' || val3 === 'Obrigado,cansei' || val3 === 'Bom dia, licença') { //se o timing chegar a 0
      tela = 11;
      radio3.hide();
      song.pause();
      song3.play();

    }
  }
  text(timing, 600, 340);
}

function fase4() {
  radio4.show();
  background(255);
  image(img, -3, -10, 660, 380);
  fill(10);
  stroke(0);
  text("4. Ao chegar em uma reunião às 07:00(pm) qual cumprimento devo usar?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio4.option('Bom dia', 'Bom dia');
  radio4.option('Boa noite', 'Boa noite');
  radio4.option('licença', 'licença');
  radio4.option('Olá', 'Olá');
  radio4.style('width', '87px');
  radio4.position(30, 290);
  radio4.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val4 = radio4.value();
  if (val4 === 'Boa noite') {
    tela = 5;
    radio4.hide();
    timing = 151; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val4 === 'licença' || val4 === 'Bom dia' || val4 === 'Olá') { //se o timing chegar a 0
      tela = 11;
      radio4.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);

}



function fase5() {
  radio5.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("5. Qual é a expressão de cortesia usada quando se quer pedir algo a alguém?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio5.option('Eu mereço, me dá', 'Eu mereço, me dá');
  radio5.option('Passa logo isso', 'Passa logo isso');
  radio5.option('Me dá logo isso', 'Me dá logo isso');
  radio5.option('Por favor', 'Por favor');
  radio5.style('width', '137px');
  radio5.position(30, 280);
  radio5.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val5 = radio5.value();
  if (val5 === 'Por favor') {
    tela = 6;
    radio5.hide();
    timing = 148; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val5 === 'Me dá logo isso' || val5 === 'Passa logo isso' || val5 === 'Eu mereço, me dá') { //se o timing chegar a 0
      tela = 11;
      radio5.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);
}


function fase6() {
  radio6.show();
  background(255);
  image(img, -3, -35, 660, 380);
  text("6. Com licença é uma expressão muito usada para pedir permissão, seja para passar, entrar, sair, falar, e é considerado também um?", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio6.option('Gesto de liberdade, que demonstra independência.', 'Gesto de liberdade, que demonstra independência.');
  radio6.option('Gesto obsceno, que demonstra falta de pudor.', 'Gesto obsceno, que demonstra falta de pudor.');
  radio6.option('Gesto cortês, que demonstra uma educação.', 'Gesto cortês, que demonstra uma educação.');
  radio6.option('Gesto grosseiro, que demonstra ignorância.', 'Gesto grosseiro, que demonstra ignorância.');
  radio6.style('width', '180px');
  radio6.position(30, 250);
  radio6.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val6 = radio6.value();
  if (val6 === 'Gesto cortês, que demonstra uma educação.') {
    tela = 7;
    radio6.hide();
    timing = 145; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val6 === 'Gesto de liberdade, que demonstra independência.' || val6 === 'Gesto obsceno, que demonstra falta de pudor.' || val6 === 'Gesto grosseiro, que demonstra ignorância.') { //se o timing chegar a 0
      tela = 11;
      radio6.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);

}


function fase7() {
  radio7.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("7. Quando fazemos algo que mágoa outra pessoa, qual expressão devemos usar para demonstrar arrependimento?", 30, 70, 600);
  textSize(17); //tamanho da letra 
  radio7.option('Deixe de frescura', 'Deixe de frescura');
  radio7.option('A culpa foi toda sua', 'A culpa foi toda sua');//
  radio7.option('Ei, me desculpe ai', 'Ei, me desculpe ai');
  radio7.option('Foi mal aí', 'Foi mal aí');
  radio7.style('width', '150px');
  radio7.position(30, 280);
  radio7.value();

  if (mouseX > xMenu2 && mouseX < xMenu2 + 105 && mouseY > 241 && mouseY < 241 + 35) { // detectar se o mouse passou pela região.
    stroke(40);
    fill(40);
  }
  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val7 = radio7.value();
  if (val7 === 'Ei, me desculpe ai') {
    tela = 8;
    radio7.hide();
    timing = 142; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val7 === 'A culpa foi toda sua' || val7 === 'Deixe de frescura' || val7 === 'Foi mal aí') { //se o timing chegar a 0
      tela = 11;
      radio7.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);
}


function fase8() {
  radio8.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("8. Qual o sinônimo de obséquio?", 30, 30, 500);
  fill('black')
  stroke(1)
  textSize(17); //tamanho da letra 
  radio8.option('Obsequio', 'Obsequio');
  radio8.option('Arrogância', 'Arrogância');
  radio8.option('Amargura', 'Amargura');
  radio8.option('Favor', 'Favor');
  radio8.style('width', '95px');
  radio8.position(30, 280);
  radio8.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val8 = radio8.value();
  if (val8 === 'Favor') {
    tela = 9;
    radio8.hide();
    timing = 139; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val8 === 'Arrogância' || val8 === 'Obsequio' || val8 === 'Amargura') { //se o timing chegar a 0
      tela = 11;
      radio8.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);
}


function fase9() {
  radio9.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("9. Se uma pessoa te agradece por algo, com que expressão você pode respondê-lo?", 30, 30, 600);
  fill(20);
  textSize(17); //tamanho da letra 
  radio9.option('Não há de que', 'Não há de que');
  radio9.option('Obrigado(a)', 'Obrigado(a)');
  radio9.option('Com licença', 'Com licença');
  radio9.option('Desculpe-me', 'Desculpe-me');
  radio9.style('width', '120px');
  radio9.position(30, 280);
  radio9.value();

  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val9 = radio9.value();
  if (val9 === 'Não há de que') {
    tela = 10;
    radio9.hide();
    timing = 136; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val9 === 'Obrigado(a)' || val9 === 'Com licença' || val9 === 'Desculpe-me') { //se o timing chegar a 0
      tela = 11;
      radio9.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);
}


function fase10() {
  radio10.show();
  background(255);
  image(img, -3, -10, 660, 380);
  text("10. Complete a frase: Pessoas gentis são mais _________.", 30, 30, 600);
  textSize(17); //tamanho da letra 
  radio10.option('Reservadas', 'Reservadas');
  radio10.option('Agressivas', 'Agressivas');
  radio10.option('Raivosas', 'Raivosas');
  radio10.option('Felizes', 'Felizes');
  radio10.style('width', '95px');
  radio10.position(30, 280);
  radio10.value();


  if (mouseX > 32 && mouseX < 32 + 77 && mouseY > 190 && mouseY < 190 + 90) {}
  var val10 = radio10.value();
  if (val10 === 'Felizes') {
    tela = 14;
    radio10.hide();
    song.pause();
    song2.play();
    timing = 33; // repreenchimento do timing;
  } else if (frameCount % 60 == 0 && timing > 0) {
    timing--;
    if (timing == 0 || val10 === 'Agressivas' || val10 === 'Reservadas' || val10 === 'Raivosas') { //se o timing chegar a 0
      tela = 11;
      radio10.hide();
      song.pause();
      song3.play();
    }
  }
  text(timing, 600, 340);
}

function GamerOver() {
  image(img3, -3, -10, 660, 370);
  textSize(20)
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > 270 && mouseY < 270 + altura) {
    stroke(250);
    noFill()
    rect(211, 270, 170, 32, 20);
    if (mouseIsPressed) {
      tela = 0;
      erro = 0;
      val = 0;
      song3.stop();
      song.play();
    }
  }
  fill('SlateBlue');
  noStroke();
  text("Retorno ao Menu ", 300, 293);
}

function Information() {
  background(255);
  //image(img3, -3, -10, 660, 370);
  text("Sobre o jogo:  ",190,40,300);
  text("Um jogo em formato de QUIZ tendo algumas palavras de respeito como resposta, nos levando a um costume hoje pouco usual.", 190, 70, 300);
  text("Como funciona o jogo:  ",190,170,300);
  text("A cada resposta correta ocorrerá o progresso do jogo, assim passando ne nivel, mas caso haja o esgotamento de tempo, o jogador será direcionado à página de GameOver, tendo que reiniciar novamente o jogo.", 190, 200, 300);
  textSize(15);
  textAlign(CENTER);
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  fill(4)
  stroke(4);
  text("Esc", 50, 45);
}

function Créditos() {
  background(250);
  image(img2, 0, 90, 250, 250);
  text("Projeto educacional da matéria Lógica de programação (LOP). Créditos ao criador do projeto, Aline Paiva Carvalho Lins.", 270, 150, 302);
  textSize(17);
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  fill(40)
  stroke(4);
  text("Esc", 50, 45);
  fill(10);
}

function Parabéns() {
  background(200);
  text("Parabéns pelo  termino do jogo!", 330, 100);
  text("Para recomeçar o jogo, basta pressionar o Botão Esc, e você será redirecionado para o menu", 200, 150, 250)
  textSize(15)
  if (mouseX > 10 && mouseX < 10 + 80 && mouseY > 20 && mouseY < 20 + 35) {
    stroke(10);
    noFill()
    rect(10, 20, 80, 35, 20);
    if (mouseIsPressed) {
      tela = 0;
    }
  }
  fill(4)
  stroke(4);
  text("Esc", 50, 45);
}