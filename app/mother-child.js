require(['ancestry'], function(ancestry) {
    var data = JSON.parse(ANCESTRY_FILE);

    function average(array) {
        function plus(a, b) {
            return a + b;
        }
        return array.reduce(plus) / array.length;
    }

    var byName = {};
    data.forEach(function(person) {
        byName[person.name] = person.born;
    });

    function bouncer(arr) {
        return arr.filter(Boolean);
    }

    //function withMam(person) { return byName[person.mother] != 'undefined'; }

    /*function hasKnownMother(p) {
    data.some(function(el) {
      return el["name"] === p["mother"];
    });
  }*/

    function motherChild() {
        var diff = [];
        data.forEach(function(person) {
            diff.push(person.born - byName[person.mother]);
        });
        res = bouncer(diff);
        return res;
    }

    console.log(average(motherChild()));
});

// → 31.2
