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

Zoo.prototype.addAnimal = function(animal) {
  if (this.status === "open") {
    if (this.animals.indexOf(animal) === -1 && animal instanceof Animal) {
        this.animals.push(animal);
        return true;
    }
  }
  else {
    return false;
  }
};


Zoo.prototype.removeAnimal = function(animal){
  if(this.status === 'open' && this.animals.indexOf(animal) !== -1) {
    this.animals.splice(this.animals.indexOf(animal, 1));
    return true;
  }
  else {
    return false;
  }




//   }
//   if(this.status === 'open' && this.animals.indexOf(animal) !== -1) {
//     this.animals.splice(this.animals.indexOf(animal));
//     return true;
//   }
//   else {
//     return false;
//   }
//
//   To play with for later
// Zoo.prototype.removeAnimal = function(animal){
//   for(animal in this.animals){
//     if (animal === this.animals[0]);
//     this.animals.splice(this.animals.indexOf(animal));
//   }
// };
};


module.exports = Zoo;
