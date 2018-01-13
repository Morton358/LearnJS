require(['ancestry'], function (ancestry) {
  var data = JSON.parse(ANCESTRY_FILE);

  function average(array) {
    function plus(a, b) { return a + b; }
    return array.reduce(plus) / array.length;
  }

  var sortCentury = {};
  function century(person) {
    var temporary = Math.ceil(person.died / 100);
    if (!(temporary in sortCentury)) {
      sortCentury[temporary] = [person];
    }
    else {
      sortCentury[temporary].push(person);
    }
  }

  function centuryAvarages() {
    data.forEach(function(person) {
      century(person);
    });
    //console.log(sortCentury);
    var res = {};
    for (var cent in sortCentury) {
      var ages = sortCentury[cent].map(function(person) {
        return person.died - person.born;
      });
      console.log(cent + ": " + average(ages));
    }
  }

  centuryAvarages();
});
// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
