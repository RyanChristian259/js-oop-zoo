var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx", "NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });


  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("Denver");
      expect(zoo.location).toBe("Denver");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toBe('open');
    });
  });

  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      zoo.isOpen();
      expect(zoo.isOpen()).toBe('Open!');
    });
    it('should see if the zoo is closed', function(){
      zoo.close();
      expect(zoo.status).toBe('closed');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      // add spec
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      // add spec
    });
    it('should add an animal to the animals array', function(){
      // add spec
    });

    it('should only add instances of animals', function(){
      // add spec
    });

    it('should not add duplicates', function(){
      // add spec
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){
      // add spec
    });
  });
});


