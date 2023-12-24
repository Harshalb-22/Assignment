function mergeCars(car1, car2) {
  var mergedCar = {};

  for (var key in car1) {
    if (car1.hasOwnProperty(key)) {
      mergedCar[key] = car1[key];
    }
  }

  for (var key in car2) {
    if (car2.hasOwnProperty(key)) {
      mergedCar[key] = car2[key];
    }
  }

  return mergedCar;
}

var car1 = { brand: 'Toyota', model: 'Camry', year: 2020 };
var car2 = { color: 'Blue', year: 2021 };
var mergedCar = mergeCars(car1, car2);
console.log(mergedCar);
