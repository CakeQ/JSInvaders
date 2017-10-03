//Declaring all the base functions for defender, invader, and bullet
function floor(){
  this.x = 0;
  this.y = 740;
  this.height = 5;
  this.width = 900;
}

function Defender(speed, x, y) {
  this.speed = speed;
  this.xspeed = 0;
  this.x = x;
  this.y = y;
  this.canshoot = 1;
  this.width = 80;
  this.height = 20;
}

function Bullet(x,y,speed){
  this.speed = speed;
  this.yspeed = this.speed;
  this.x = x;
  this.y = y;
  this.width = 4;
  this.height = 30;
}

function Invader(type,speed,x,y,w,h,front){
  this.type = type;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.invaderframe;
  this.width = w;
  this.height = h;
  this.isfront = front;
}

function Shield(type,x,y){
  this.type = type;
  this.x = x;
  this.y = y;
  this.width = 30;
  this.height = 30;
  this.health = 3;
  this.color = "#00FF00";
}

function explosion(x,y,type){
  this.x = x;
  this.y = y;
  this.type = type;
}

function floormark(x,y){
  this.x = x;
  this.y = y;
}

//invisible marker that fires backwards when an invader dies, to allow the invader behind to fire once hit
function AllowFiringBullet(x,y){
  this.x = x;
  this.y = y;
  this.height = 5;
  this.width = 5;
}


//collision detection
function Detect_Collision(obj1,obj2){
if (obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y)
    return true
    else return false
}

function Random_Generator(num1, num2) {
  return Math.floor(Math.random()*(num2 - num1 + 1)+num1);
}


//Main controller of the game
function Controller(){
  //declaring arrays for holding objects
  this.invaders = [];
  this.bullets = [];
  this.enemybullets = [];
  this.bunkers =[];
  this.defenders =[];
  this.lives = [];
  this.floor = new floor();
  this.explosions = [];
  this.floormarks = [];
  this.AllowFiringBullets = [];
  //different counters used
  this.time;
  this.counter;
  //invader variables
  this.invaderframe;
  this.invaderx;
  this.invadery;
  this.invframe;
  this.invmove;
  this.invadershooter;
  this.direction;

  this.score;
  this.isGameOver;
}

//Game Controller Prototype Functions
Controller.prototype.start = function(){
  this.time = 0;
  this.counter = 0;
  this.invaderframe = 1;
  this.invaderx = 125;
  this.invadery = 50;
  this.invframe = 1;
  this.invmove = 1;
  this.invadershooter;
  this.direction = 1;
  this.score = 3400;
  this.defenders.push(new Defender(5,410,690));
  this.lives.push(new Defender(0,200,755));
  this.lives.push(new Defender(0,100,755));

  for (var i = 1; i<6; i++){
    if (i == 1){
      this.invaderx = 75;
      this.invadery = 50;
      for (var c = 1; c<12; c++){
      this.invaders.push(new Invader(1,0.01,this.invaderx,this.invadery,40,50,0));
      this.invaderx = this.invaderx + 70;
    }
    }
    else if (i == 2 || i == 3){
      this.invaderx = 72.5;
      if (i == 2) this.invadery = 110;
      if (i == 3) this.invadery = 170;
      for (var c = 1; c<12; c++){
      this.invaders.push(new Invader(2,0.01,this.invaderx,this.invadery,50,50,0));
      this.invaderx = this.invaderx + 70;
    }
    }
    else if (i == 4){
      this.invaderx = 70;
      if (i == 4) this.invadery = 230;
      if (i == 5) this.invadery = 290;
      for (var c = 1; c<12; c++){
      this.invaders.push(new Invader(3,0.01,this.invaderx,this.invadery,60,50,0));
      this.invaderx = this.invaderx + 70;
    }
    }
    else if (i == 5){
      this.invaderx = 70;
      if (i == 4) this.invadery = 230;
      if (i == 5) this.invadery = 290;
      for (var c = 1; c<12; c++){
      this.invaders.push(new Invader(3,0.01,this.invaderx,this.invadery,60,50,1));
      this.invaderx = this.invaderx + 70;
    }
    }
    this.fl
  }

this.invadery = 600;
this.invaderx = 100;
  for (var i = 1; i<5; i++){
      this.bunkers.push(new Shield(2,this.invaderx,this.invadery));
      this.bunkers.push(new Shield(1,this.invaderx+30,this.invadery));
      this.bunkers.push(new Shield(3,this.invaderx+60,this.invadery));
      this.bunkers.push(new Shield(5,this.invaderx,this.invadery+30));
      this.bunkers.push(new Shield(4,this.invaderx+30,this.invadery+30));
      this.bunkers.push(new Shield(5,this.invaderx+60,this.invadery+30));
      this.invaderx = this.invaderx + 200;
  }
}

Controller.prototype.draw = function(context){
   this.strokeStyle = "#FFFFFF";
   this.fillStyle = "#000000";
   this.lineWidth = 3;
   //drawing invaders
   if (this.invaderframe == 1) {
      this.invaders.forEach(function(Invader){
      Invader.draw(context, 2);
      });
    }
   else if (this.invaderframe == 2) {
      this.invaders.forEach(function(Invader){
      Invader.draw(context, 1);
      });
    }
    //drawing bullets
    GameController.enemybullets.forEach(function(bullet){
      bullet.draw(context);
    });
    //drawing bunkers
    this.bunkers.forEach(function(Shield){
    Shield.draw(context);
    });
    //drawing defender
    GameController.defenders.forEach(function(Defender){
      Defender.draw(context);
    });
    //drawing lives
    GameController.lives.forEach(function(Defender){
      Defender.draw(context);
    });

    GameController.explosions.forEach(function(explosion){
            explosion.draw(context);
          });

      this.draw_victory(context);
      this.draw_GameOver(context);
}

Controller.prototype.update = function(c, elapsed){
  //invader updating
    this.invaders.forEach(function(Invader,i){
      if(Invader.x >= 845){
        GameController.direction = 0;

        this.invaders.forEach(function(Invader){
        Invader.move_down();
        },this);
      }
      if(Invader.x < 0){
        GameController.direction = 1;

        this.invaders.forEach(function(Invader){
        Invader.move_down();
        },this);
      }

  //invader bullet collision
    GameController.bullets.forEach(function(Bullet,j){
    if (Detect_Collision(Invader,Bullet)){
      if(Invader.type == 3) GameController.score = GameController.score + 100;
      else if(Invader.type == 2) GameController.score = GameController.score + 300;
      else if(Invader.type == 1) GameController.score = GameController.score + 500;
      this.explosions.push(new explosion(Invader.x,Invader.y,1));
      setTimeout(function(){ GameController.explosions.splice(0,1); }, 1000);
      if (this.invaders[i].isfront) this.AllowFiringBullets.push(new AllowFiringBullet(Invader.x+10,Invader.y-10));
      this.invaders.splice(i,1);
      this.bullets.splice(j,1);
      explosion_noise.play();
    }
  },this);
  GameController.AllowFiringBullets.forEach(function(AllowFiringBullet,j){
    if (Detect_Collision(Invader,AllowFiringBullet)){
      GameController.AllowFiringBullets.splice(j,1);
      GameController.invaders[i].isfront = 1;
    }
    if (AllowFiringBullet.y < 0){
      GameController.AllowFiringBullets.splice(j,1);
    }
  },this);

//Destroy bunkers
  GameController.bunkers.forEach(function(Shield,j){
  if (Detect_Collision(Invader,Shield)){
    this.bunkers.splice(j,1);
    GameController.score = GameController.score - 100;
  }
  },this);
  //Destroy defender
    GameController.defenders.forEach(function(Defender,j){
    if (Detect_Collision(Invader,Defender)){
      this.defenders.splice(j,1);
      GameController.game_over(c);
    }
    },this);

//invader movement
  if(GameController.direction == 1){
    this.invaders.forEach(function(Invader){
    Invader.move_right();
    },this);
  }

  if(GameController.direction == 0){
    this.invaders.forEach(function(Invader){
    Invader.move_left();
    },this);
  }
  },this);

//bunker updating
  this.bunkers.forEach(function(Shield,i){
    GameController.bullets.forEach(function(Bullet,j){
    if (Detect_Collision(Shield,Bullet)){
      if (GameController.bunkers[i].health == 1){
      this.bunkers.splice(i,1);
      GameController.score = GameController.score - 100;
      GameController.explosions.push(new explosion(Shield.x-15,Shield.y,1));
      explosion_noise.play();
      setTimeout(function(){ GameController.explosions.splice(0,1); }, 1000);
     }
      else GameController.bunkers[i].take_damage();
      this.bullets.splice(j,1);

    }
  },this);
  GameController.enemybullets.forEach(function(Bullet,j){
  if (Detect_Collision(Shield,Bullet)){
    if (GameController.bunkers[i].health == 1){
    this.bunkers.splice(i,1);
    GameController.score = GameController.score - 100;
    GameController.explosions.push(new explosion(Shield.x-15,Shield.y,1));
    explosion_noise.play();
    setTimeout(function(){ GameController.explosions.splice(0,1); }, 1000);
    }
    else GameController.bunkers[i].take_damage();
    this.enemybullets.splice(j,1);
  }
},this);
Shield.draw(c);
  },this);

  //invader shooting
  this.counter = this.counter + elapsed;

  if (this.counter >= 1){
          this.invaders.forEach(function(Invader,i){

            if (Random_Generator(0,8) == 1 && Invader.isfront){
             Invader.shoot();
            }
          },this);
          this.counter = 0;
        }
  //defender updating
  GameController.defenders.forEach(function(Defender,i){
    GameController.enemybullets.forEach(function(Bullet,j){
      if (Detect_Collision(Defender,Bullet)){
        Defender.die(c);
        this.explosions.push(new explosion(Defender.x+10,Defender.y,1));
        explosion_noise.play();
        setTimeout(function(){ GameController.explosions.splice(0,1); }, 1000);
        this.defenders.splice(i,1);
        this.enemybullets.splice(j,1);
      }
    },this);
    Defender.update();
  },this);
//bullet collision with floor
GameController.enemybullets.forEach(function(Bullet,j){
  if (Detect_Collision(GameController.floor,Bullet)){
    this.enemybullets.splice(j,1);
  }
},this);

if(this.invaders.length == 0 && this.lives.length > 0){
  GameController.victory();
}
}

Controller.prototype.updateinvader = function(){
  //invader frame managing
  if (this.invaderframe == 1) this.invaderframe = 2;
  else if (this.invaderframe == 2) this.invaderframe = 1;
}

Controller.prototype.game_over = function(c){
  this.invaders.forEach(function(Invader,i){
      this.invaders.splice(i,55);
  },this);
  this.bullets.forEach(function(bullet,i){
      this.bullets.splice(i,55);
  },this);
  this.enemybullets.forEach(function(bullet,i){
      this.enemybullets.splice(i,55);
  },this);
  this.bunkers.forEach(function(Shield,i){
      this.bunkers.splice(i,24);
  },this);
  this.isGameOver = 1;
}

Controller.prototype.draw_GameOver = function(c){
    context.fillStyle = "#FFFFFF";
    context.fillStyle = "00FF00";
    context.font="50px Arial";
    if (this.isGameOver == 1){
      context.fillText("GAME OVER!", (canvas.width / 2) - 170, canvas.height / 2);
      context.font="30px Arial";
      context.fillText("press space to try again", (canvas.width / 2) - 170, canvas.height / 2 + 25);
    }
}

Controller.prototype.victory = function(){
  this.bullets.forEach(function(bullet,i){
      this.bullets.splice(i,55);
  },this);
  this.enemybullets.forEach(function(bullet,i){
      this.enemybullets.splice(i,55);
  },this);
  this.defenders.forEach(function(Defender,i){
      this.defenders.splice(i,1);
  },this);
  this.bunkers.forEach(function(Shield,i){
      this.bunkers.splice(i,24);
  },this);
  this.isGameOver = 2;
}

Controller.prototype.draw_victory = function(c){
  context.fillStyle = "#FFFFFF";
  context.fillStyle = "00FF00";
  context.font="60px Arial";
  if (this.isGameOver == 2){
    context.fillText("VICTORY!", (canvas.width / 2) - 140, canvas.height / 2);
    context.font="30px Arial";
    context.fillText("press space to play again", (canvas.width / 2) - 160, canvas.height / 2 + 25);
  }
}
//Defender Prototype Functions

Defender.prototype.draw = function(c){
  draw_defender(context,this.x,this.y);
  GameController.bullets.forEach(function(bullet){
    bullet.draw(c);
  });
}
 Defender.prototype.move_left = function() {
  this.xspeed = -this.speed;
 }
 Defender.prototype.move_right = function() {
  this.xspeed = +this.speed;
 }
 Defender.prototype.move_stop = function() {
  this.xspeed = 0;
 }
 Defender.prototype.shoot = function(){
   if (this.canshoot){
  GameController.bullets.push(new Bullet(this.x + 38, this.y -35,-5,"#00FF00"));
  this.canshoot = false;
  player_shoot.play();
 }
 }
 Defender.prototype.update = function() {
  this.x += this.xspeed;
  GameController.bullets.forEach(function(bullet,i){
    if (bullet.y < 0){
    GameController.bullets.splice(i,1);}
  },this);
  if (GameController.bullets.length == 0){
    this.canshoot = true;}
    else this.canshoot = false;
 }

 Defender.prototype.die = function(c){
   if (GameController.lives.length == 0)
   GameController.game_over(c);
   else {
    setTimeout(function(){ GameController.lives.splice(0,1); }, 1000);
    setTimeout(function(){ GameController.defenders.push(new Defender(5,410,690)); }, 1000);
    GameController.score = GameController.score - 500;
   }
 }

//Bullet Prototype Function
 Bullet.prototype.draw = function(c){
   this.y += this.yspeed;
   draw_Bullet(context,this.x,this.y);
 }

//Invader Prototype Functions
 Invader.prototype.draw = function(context,state){
   context.save();
   if ((this.type == 1) && (state == 1)){
     draw_Invader11(context, this.x, this.y);
   }
   else if ((this.type == 1) && (state == 2)){
     draw_Invader12(context, this.x, this.y);
   }
   else if ((this.type == 2) && (state == 1)){
     draw_Invader21(context, this.x, this.y);
   }
   else if ((this.type == 2) && (state == 2)){
     draw_Invader22(context, this.x, this.y);
   }
   else if ((this.type == 3) && (state == 1)){
     draw_Invader31(context, this.x, this.y);
   }
   else if ((this.type == 3) && (state == 2)){
     draw_Invader32(context, this.x, this.y);
   }
   context.restore();
 }

  Invader.prototype.move_left = function() {
   this.x -= this.speed;
  }
  Invader.prototype.move_right = function() {
   this.x += this.speed;
  }
  Invader.prototype.move_stop = function() {
   this.xspeed = 0;
  }
  Invader.prototype.shoot = function(){
   GameController.enemybullets.push(new Bullet(this.x+27.5, this.y +40,3,"#FFFFFF"));
   enemy_shoot.play();
  }

//  Invader.prototype.update = function() {

// }
  Invader.prototype.move_down = function(){
   this.y = this.y +10;
  }

  Shield.prototype.draw = function(c){
  if (this.health == 3){
  if(this.type == 1)
  draw_shield3(c,this.x,this.y,this.color);
  else if(this.type == 2)
  draw_shieldL3(c,this.x,this.y,this.color);
  else if(this.type == 3)
  draw_shieldR3(c,this.x,this.y,this.color);
  else if(this.type == 4)
  draw_shieldU3(c,this.x,this.y,this.color);
  else if(this.type == 5)
  draw_shieldD3(c,this.x,this.y,this.color);
  }
  else if (this.health == 2){
  if(this.type == 1)
  draw_shield2(c,this.x,this.y,this.color);
  else if(this.type == 2)
  draw_shieldL2(c,this.x,this.y,this.color);
  else if(this.type == 3)
  draw_shieldR2(c,this.x,this.y,this.color);
  else if(this.type == 4)
  draw_shieldU2(c,this.x,this.y,this.color);
  else if(this.type == 5)
  draw_shieldD2(c,this.x,this.y,this.color);
  }
  else if (this.health == 1){
  if(this.type == 1)
  draw_shield1(c,this.x,this.y,this.color);
  else if(this.type == 2)
  draw_shieldL1(c,this.x,this.y,this.color);
  else if(this.type == 3)
  draw_shieldR1(c,this.x,this.y,this.color);
  else if(this.type == 4)
  draw_shieldU1(c,this.x,this.y,this.color);
  else if(this.type == 5)
  draw_shieldD1(c,this.x,this.y,this.color);
  }
  }

  Shield.prototype.take_damage = function(){
    this.health = this.health - 1;
  }

  explosion.prototype.draw = function(c){
  if (this.type == 1){
    draw_explosion1(c,this.x,this.y);
    this.type = 2
  }
  else if (this.type == 2){
    draw_explosion2(c,this.x,this.y);
    this.type = 3
  }
  else if (this.type == 3){
    draw_explosion3(c,this.x,this.y);
    this.type = 1
  }
  }

  AllowFiringBullet.prototype.update = function(){
    this.y += 10;
  }
