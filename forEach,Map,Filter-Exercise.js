
// ====doubleValues=======

function doubleValue(arr){
    let newArr = [];
    arr.forEach(function(value){
      newArr.push (value * 2)
    });
    
    console.log(newArr)
    return newArr;
}

// doubleValue([2, 3, 4]) 
// newArr[4, 6, 8]


// =====onlyEvenValues=====

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }

// onlyEvenValues([1,2,3]) // [2]
// onlyEvenValues([5,1,2,3,10]) // [2,10]


// ====showFirstAndLast=====

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    console.log(newArr)
    return newArr;
  }

  showFirstAndLast(['car', 'bed', 'baby'])


//   ====addKeyAndValue====

  function addKeyAndValue(arr, key, val) {
    let newArr = [];
    arr.forEach(function(value) {
      value[key] = val
      newArr.push(value)
    })
    console.log (newArr);
    return newArr;

}
    

    addKeyAndValue([
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ],
      
      'title',
      'instructor'
    )
    
    /*
      [
        {name: 'Elie', title:'instructor'},
        {name: 'Tim', title:'instructor'},
        {name: 'Matt', title:'instructor'},
        {name: 'Colt', title:'instructor'}
      ]
    */

    //   =======vowelCount=====

      function vowelCount(str) {
        let splitArr = str.split("");
        let obj = {};
        const vowels = "aeiou";
      
        splitArr.forEach(function(letter) {
          let lowerCasedLetter = letter.toLowerCase()
          if (vowels.indexOf(lowerCasedLetter) !== -1) {
            if (obj[lowerCasedLetter]) {
              obj[lowerCasedLetter]++;
            } else {
              obj[lowerCasedLetter] = 1;
            }
          }
        });
        return obj;
      }


// ======valTimesIndex=====

function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }

// valTimesIndex([1,2,3]) // [0,2,6]

// =====extractKey======

function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }

let x = extractKey(
    [
      {name: 'Elie'},
      {name: 'Tim'},
      {name: 'Matt'},
      {name: 'Colt'}
    ], 'name'
    )

  console.log (x)
  
    // ['Elie', 'Tim', Matt', 'Colt']

    function extractFullName(arr) {
        return arr.map(function(val) {
            
            return val["first"] + " " + val.last;
        });
      }

     let output = extractFullName([
        {first: 'Elie', last:"Schoppik"},
        {first: 'Tim', last:"Garcia"},
        {first: 'Matt', last:"Lane"},
        {first: 'Colt', last:"Steele"}
      ])

      console.log (output)


    //   ====filterByValue====

    function filterByValue(arr, key) {
        return arr.filter(function(val) {
          return val[key] !== undefined;
        });
      }
      
    // =====find=========

      function find(arr, searchValue) {
        return arr.filter(function(val) {
          return val === searchValue;
        })[0];
      }
      
    //   ======findInObj=======

      function findInObj(arr, key, searchValue) {
        return arr.filter(function(val) {
          return val[key] === searchValue;
        })[0];
      }
      

    // ======removeVowels=======

      function removeVowels(str) {
        const vowels = "aeiou";
        return str
          .toLowerCase()
          .split("")
          .filter(function(val) {
            return vowels.indexOf(val) === -1;
          })
          .join("");
      }
      
    //   ======doubleoddnumbers====
    
      function doubleOddNumbers(arr) {
        return arr
          .filter(function(val) {
            return val % 2 !== 0;
          })
          .map(function(val) {
            return val * 2;
          });
        }