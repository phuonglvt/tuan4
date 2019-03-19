class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
        this.distance = 100;

        this.getHeroElement = function () {
            return '<img width="' + this.size + '"' +
                ' height="' + this.size + '"' +
                ' src="' + this.image + '"' +
                ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
        };

        this.moveRight = function () {
            this.left += this.distance;

        };
        this.moveBelow = function () {
            this.top += this.distance;

        };
        this.moveLeft = function () {
            this.left -= this.distance;

        };
        this.moveTop = function () {
            this.top -= this.distance;

        };
    }
}

var hero = new Hero('pikachu.png', 0, 0, 200);
const limitWidth = window.innerWidth - hero.size;
const limitHeight = window.innerHeight - hero.size;

function start() {

    //console.log(hero.top + "<" + (screenWidth - hero.size));

    if (hero.left < limitWidth && hero.top === 0) {
        hero.moveRight();
    }

    if (hero.left >= limitWidth && hero.top < limitHeight) {
        hero.moveBelow();
    }

    if (hero.left > 0 && hero.top >= limitHeight) {
        hero.moveLeft();
    }

    if (hero.left <= 0 && hero.top >= 0) {
        hero.moveTop();
    }


        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start, 70);

}

start();