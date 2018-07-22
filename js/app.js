// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.sprite = 'images/enemy-bug.png'; // enemy sprite image
    this.x = x; // x pos
    this.y = y + 40; // y pos
    this.horizontal = 101; // distance moved each step right
    this.speed = speed;
    this.startPos = -101; // enemy start position
    this.endPos = this.horizontal * 5; // enemy end position
};

// Enemy Movement
/*
Parameter: dt, a time delta between ticks
Movement is multiplied by dt para to ensure the game runs at the same speed for all computers
*/
Enemy.prototype.update = function(dt) {
    if (this.x < this.endPos) { // if enemny has not passed edge of game canvas
        this.x += this.speed * dt; // move forward - incriment x by speed * dt
    } else {
        this.x = this.startPos; // reset enemy pos to start
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Player character constructor
class Character {
    constructor() {
        this.sprite = 'images/char-boy.png'; // sprite image
        this.vertical = 83; // distance moved each step up / down
        this.horizontal = 101; // distance moved each step left / right
        this.startY = (this.vertical * 4) + 40;
        this.startX = this.horizontal * 2;
        this.x = this.startX; // x pos
        this.y = this.startY; // y pos
    }
    // draw player sprite on current x & y positions
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    //update sprites x & y according to keyboard input
    handleInput(input) {
        switch (input) {
            case 'left':
                if (this.x > 0) { // if character isn't at left edge
                    this.x -= this.horizontal; // move character to the left
                }
                break;
            case 'right':
                if (this.x < this.horizontal * 4) { // if character isn't at right edge
                    this.x += this.horizontal; // move character to the right
                }
                break;
            case 'up':
                if (this.y > 0) { // if character isn't at top edge
                    this.y -= this.vertical; // move character up
                }
                break;
            case 'down':
                if (this.y < this.vertical * 4) { // if character isn't at edge
                    this.y += this.vertical; // move character down
                }
                break;
        }
    }
    // check for collision or end game
    update() {
        console.log(this.y);
        for (let enemy of allEnemies) { // enemy array
            if (this.y === enemy.y && (enemy.x + enemy.horizontal / 2 > this.x && enemy.x < this.x + this.horizontal / 2)) { // enemy & character in same postion
                this.restart(); // restart character
            }
        }
        if (this.y === -43) { // check if character reached the top / end game
            alert('You Won!'); // win alert
            this.restart(); // restart character
        }
    }
    // restart character code
    restart() {
        this.x = this.startX;
        this.y = this.startY;
    }
}


// Iinitiate objects.
const player = new Character(); // Player character object
const enemy1 = new Enemy(-101, 0, 150); // Enemy character object 1
const enemy2 = new Enemy(-101, 83, 200); // Enemy character object 2
const enemy3 = new Enemy((-101 * 1.5), 166, 300); // Enemy character object 3

// Enemy object array
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3); // push new enemy object into enemy array

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
