var myObject = {
  getSetGen: function() {
    for (var key in this) {
      if (typeof this[key] !== 'function') {
        (function(obj, key) {
          var value2 = obj[key]
          Object.defineProperty(obj, key, {
            get: function() {
              return value2;
            }
          });

          Object.defineProperty(obj, key, {
            set: function(value) {
              value2 = value;
            }
          });
        })(this, key);
      }
    }
  }
};

var user = { 
  name: "Ali", 
  age: 10 
};


myObject.getSetGen.call(user);


console.log(user);
user.age = 3;
console.log(user.age);

