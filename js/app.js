// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x pos
    // y pos

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemny has not passed edge of game canvas
      // move forward
      // incriment x by speed * dt
    // else
      // reset pos to start

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
    this.x = 0;   // x pos
    this.y = 0;   // y pos
    this.sprite = 'images/char-boy.png';    // sprite image
  }
  // draw player sprite on current x & y positions
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
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
// Place all enemy objects in an array called allEnemies
const player = new Character();   // Player character object

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
