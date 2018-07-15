// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    return Math.abs(42 - distance);
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(to - from) * 264;
}

function calculatesFarePrice(start, destination) {
  distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    return 'cannot travel that far';
  }else if (distance > 2000) {
    return 25;
  }else if (distance > 400) {
    return (distance - 400) * 0.02;
  }else {
    return 0;
  }
}
