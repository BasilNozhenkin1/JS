var Hero = function(name, enemy, strength) {
  this.name = name || " ";
  this.enemy = enemy || " ";
  this.strength = strength || 0;
}

Hero.prototype = function() {
    var sayGreetings = function() {
      console.log("Hello, I m "+this.name);
    };
    var sayOpponent = function() {
      console.log("Hello, my opponent is "+this.enemy);
    };
    return {
      hello: sayGreetings,
      opponent: sayOpponent
    }
}();
var Batman = new Hero('Bat','Superman', 100);
    Batman.hello();
    Batman.opponent();
