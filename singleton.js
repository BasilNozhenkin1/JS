var hero = (function(){
  var instance;

  function init() {
    var _privateNickname = 'Hidden nickname';
    function _getPrivateData() {
      return 'Hidden nickname func';
    };
    return {
      revealData: _getPrivateData(),
      revealNickname: _privateNickname
    };
  };
  return {
    getIntsance: function() {
      if (!instance) {
        instance = init();
      }
      return instance;
    }
  };
})();

var heroInstance = hero.getIntsance();
console.log(heroInstance);
console.log(heroInstance.revealData);
console.log(heroInstance.revealNickname);
