var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
function dayName(number) {
    return names[number];
}
console.log(dayName(2));

var dayName = function() {
    var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    return function(number) {
        return names[number];
    };
}();
console.log(dayName(3));

(function() {
    function square(x) { return x * x; }
    var hundred = 100;
    console.log(square(hundred));
})();

var weekDay = function () {
    var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name: function(number) { return names[number];},
        number: function(name) { return names.indexOf(name);}
    };
}();
console.log(weekDay.name(weekDay.number("Sunday")));

(function(exports) {
    var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    exports.name = function(number) {
        return names[number];
    };
    exports.number = function(name) {
        return names.indexOf(name);
    };
}) (this.weekDay = {});
console.log(weekDay.name(weekDay.number("Saturday")));

// Require
function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
}
console.log(require("weekDay").name(1));

var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
exports.name = function(number) {
    return names[number];
};
exports.number = function(name) {
    return names.indexOf(name);
}
var weekDay = require("weekDay");
var today = require("today");
console.log(weekDay.name(today.dayName()));

function require(name) {
    if (name in require.cache)
      return require.cache[name];

    var code = new Function("export, module", readFile(name));
    var exports = {}, module = {exports: exports};
    code(exports, module);

    require.cache[name] = module.exports;
    return module.exports;
}
require.cache = Object.create(null);

define([], function() {
    var names = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
    return {
        name: function(number) { return names[number];},
        number: function(name) { return names.indexOf(name);}
    };
});
var defineCache = Object.create(null);
var currentMod = null;

function getModule(name) {
    if (name in defineCache)
      return defineCache[name];

    var module = {exports: null,
                  loaded: false,
                  onLoad: []};
    defineCache[name] = module;
    backgroundReadFile(name, function(code) {
        currentMod = module;
        new Function("", code)();
    });
    return module;
}

function define(depNames, moduleFunction) {
    var myMod = currentMod;
    var deps = depNames.map(getModule);

    deps.forEach(function(mod) {
        if (!mod.loaded)
          mod.onLoad.push(whenDepsLoaded);
    });
    function whenDepsLoaded() {
        if (!deps.every(function(m) { return m.loaded; }))
          return;
    var args = deps.map(function(m) { return m.exports; });
    var exports = moduleFunction.apply(null, args);
    if (myMod) {
        myMod.exports = exports;
        myMod.loaded = true;
        myMod.onLoad.forEach(function(f) { f(); });
    }
  } whenDepsLoaded();
}

// Month names
names = ["Jan", "Feb", "Mar"]
function monthNumber(number) {
    return names[number]
}

var monthNames = (function() {
    var names = ["January", "February", "March", "April", "May", "June", "July",
     "August", "September", "October", "November", "December"];

    return {
      getMonthName: function(number) {
        return names[number];
      },
      getMonthNumber: function(name) {
        return names.indexOf(name);
      }
    };
  })();

  console.log(monthNames.getMonthName(0)); // Output: January
  console.log(monthNames.getMonthNumber("June")); // Output: 5


