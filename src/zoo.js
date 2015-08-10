var Animal = require("./animal");

function Zoo(name, location, status, animals){
  this.name = name;
  this.location = location;
  this.status = 'closed';
  this.animals = [];
}



module.exports = Zoo;
