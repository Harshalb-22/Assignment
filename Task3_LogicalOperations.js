function commonElements(array1, array2) {
  var resultArray = [];

  for (var i = 0; i < array1.length; i++) {
    var currentElement = array1[i];


    if (array2.indexOf(currentElement) !== -1) {
      resultArray.push(currentElement);
    }
  }

  return resultArray;
}


var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
var commonElementsArray = commonElements(array1, array2);
console.log(commonElementsArray);
