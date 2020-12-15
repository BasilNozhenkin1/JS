var Hero = function(name, opponent, strength) {
  this.name = name || "";
  this.opponent = opponent || "";
  this.strength = strength || 0;
};
Hero.prototype = {
  getData: function() {
    return this.name+"/"+this.opponent+"/"+this.strength;
  },
  logData: function() {
    console.log(this.getData());
  }
};

var Batman = new Hero( "Batman", "Superman", 0 );
Batman.logData();
