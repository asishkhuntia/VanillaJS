(function(){
  var Living = function() {
    var livingCell = 'I am living !';
    this.isLiving = function() {
      return livingCell;
    }
  };
  Living.prototype.a = function() {
	return 'here !!';  
  };
  var objLiving = new Living();
	console.log(objLiving.isLiving());


  var Animal = function() {
    var data = 'I am animal !';
    this.express = function() {
      return data;
    };
  };
  Animal.prototype = new Living();
  Animal.prototype.constructor = Animal;
  var objAnimal = new Animal();
  console.log(objAnimal.express());
  console.log(objAnimal.a());
  console.log(objAnimal.isLiving());
  
  var Bird = function() {
	 var data = 'I am bird !';
    this.express = function() {
      return data;
    };
  };
  Bird.prototype = Object.create(Living.prototype);
  Bird.prototype.constructor = Bird;
  var objBird = new Bird();
  console.log(objBird.express());
  console.dir(objBird);
  console.log(objBird.a());
  //console.log(objBird.isLiving());
})();
