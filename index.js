// Code your solution in this file!
function distanceFromHqInBlocks(destination) {
  if (42 >= destination) {
    return 42 - destination;
  } else {
    return destination - 42;
  }
}

function distanceFromHqInFeet(destination) {
  return distanceFromHqInBlocks(destination) * 264;
}

function distanceTravelledInFeet(d1, d2) {
  if (d1 >= d2) {
    return (d1*264) - (d2*264);
  } else {
    return (d2*264) - (d1*264);
  }
}

function calculatesFarePrice(start, destination) {
  let x = distanceTravelledInFeet(start, destination);
  let price
  if (x<=400) {
    price = 0;
  } else if (x > 400 && x <= 2000) {
    price = (x-400) * .02;
  } else if (x > 2000 && x < 2500) {
    price = 25;
  } else {
    price = 'cannot travel that far'
  }
  return price
}
