// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png';   // sprite image
    this.x = x;   // x pos
    this.y = y + 50;   // y pos
    this.horizontal = 101;    // distance moved each step right
    this.speed = speed;
    this.startPos = -101;   // enemy start position
    this.endPos = this.horizontal * 5;    // enemy end position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x < this.endPos){   // if enemny has not passed edge of game canvas
      this.x += this.speed * dt;   // move forward - incriment x by speed * dt
    }
    else {
      this.x = this.startPos;   // reset pos to start
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// PLAYER SPRITE

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player character constructor
class Character {
  constructor(){
    this.sprite = 'images/char-boy.png';    // sprite image
    this.vertical = 83;   // distance moved each step up / down
    this.horizontal = 101;    // distance moved each step left / right
    this.startY = (this.vertical * 5) - 40;
    this.startX = this.horizontal * 2;
    this.x = this.startX;   // x pos
    this.y = this.startY;   // y pos
  }
  // draw player sprite on current x & y positions
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  //update sprites x & y according to input
  handleInput(input) {
    switch(input){
      case 'left':
        if (this.x > 0) {
           this.x -= this.horizontal;
        }
        break;
      case 'right':
        if (this.x < this.horizontal * 4) {
           this.x += this.horizontal;
        }
        break;
      case 'up':
        if (this.y > 0) {
          this.y -= this.vertical;
        }
        break;
      case 'down':
      if (this.y < this.vertical * 4) {
        this.y += this.vertical;
      }
        break;
    }
  }
}

    // methods
      // update postion
        // check check collision
          // did sprite x & y collide with enemy?
        // reach the end of game
            // did sprite x & y reach final tile

      //handle keyboard input
        //update sprites x & y according to input
      // reset player sprite
        // set x & y to starting x & y



// Now instantiate your objects.
const player = new Character();   // Player character object
const enemy1 = new Enemy(-101, 0, 150);   // Enemy character object
const enemy2 = new Enemy(-101, 83, 200);   // Enemy character object
const enemy3 = new Enemy((-101*1.5), 166, 300);   // Enemy character object
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3);

    // init allEnemies array
    // for each enemy create and push new enemy object into above array



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
