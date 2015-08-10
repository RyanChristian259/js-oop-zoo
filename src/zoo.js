var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}

Zoo.prototype.changeLocation = function(location){
  this.location = location;
};

Zoo.prototype.open = function(){
  if(this.status === 'closed'){
    this.status = 'open';
  }
};

Zoo.prototype.close = function(){
  if(this.status ==='open')
    this.status = 'closed';
};

Zoo.prototype.isOpen = function(){
  if(this.status === 'open')
    return "Open!";
};

Zoo.prototype.addAnimal = function(){
  if(this.status === 'open'){}

};

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === "open") {
    if (this.animals.indexOf(animal) === -1 && animal instanceof Animal) {
        this.animals.push(animal);
        return true;
    }
  } else {
    return false;
  }
};

// addAnimal() - a method that adds an animal to the animals array ONLY if the zoo is open, the animal is an instance of the Animal class AND the animal is not already in the animals array.



module.exports = Zoo;
