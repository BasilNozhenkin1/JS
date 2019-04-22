var heroes = (function(){
  var _privateHeroes = ['Darkside', 'Superwoman'],
      publicHeroes = ['Batman', 'Superman'];
  var set = function(i, name) {
    publicHeroes[i] = name;
  };
  var get = function(i) {
    return publicHeroes[i];
  };
  return {
    setter: set,
    getter: get,
    list: publicHeroes
  };
})();
console.log(heroes.list);
console.log(heroes.getter(1));
heroes.setter(1, 'Catwoman');
console.log(heroes.list);
