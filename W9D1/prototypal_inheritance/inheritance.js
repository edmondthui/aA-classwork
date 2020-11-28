Function.prototype.inherits = function(SuperClass) {
    let SubClass = this;
    // function Surrogate(){};
    // Surrogate.prototype = SuperClass.prototype;
    // SubClass.prototype = new Surrogate();
    // SubClass.prototype.constructor = SubClass;

    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
}

function MovingObject (name) {
    this.name = name;
}

MovingObject.prototype.action = function() {
    console.log(`${this.name} is moving!`);
}



function Ship (name, color) {
    MovingObject.call(this, name);
    this.color = color;
}

Ship.inherits(MovingObject);



function Asteroid (size, name) {
    this.size = size;
    this.name = name;

    this.fly = function() {
        console.log(`fly`);
    }
}
Asteroid.inherits(MovingObject);

Asteroid.prototype.destroy = function() {
    console.log(`You have destroyed ${this.name}`);
}

