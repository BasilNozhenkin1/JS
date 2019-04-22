var heroes = (function(){
  var publicHeroes = ['Batman', 'Superman'];
  var set = function(i, name) {
    publicHeroes[i] = name;
  };
  var get = function(i) {
    return publicHeroes[i];
  };
  var privateOpponents  = {
    'Darkside': 'Batman',
    'Superwoman': 'Superman',
    'Batman': 'Darkside',
    'Superman': 'Superwoman'
  };
  var getOpponent = function (name) {
    return privateOpponents[name];
  }
  return {
    setter: set,
    getter: get,
    getOpponent: getOpponent,
    listOfHeroes: publicHeroes
  };
})();
console.log(heroes.listOfHeroes);
console.log(heroes.getter(1));
heroes.setter(1, 'Catwoman');
console.log(heroes.listOfHeroes);
console.log(heroes.getOpponent('Batman'))
