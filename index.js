// Code your solution in this file!
function distanceFromHqInBlocks(curloc) {
  max = Math.max(curloc, 42);
  min = Math.min(curloc, 42);
  return max - min;
}

function distanceFromHqInFeet(curloc) {
  return distanceFromHqInBlocks(curloc) * 264;
}

function distanceTravelledInFeet(start, end) {
  max = Math.max(start, end)
  min = Math.min(start, end)
  return (max - min) * 264;
}

function calculatesFarePrice(start, end) {
  feet = distanceTravelledInFeet(start, end);

  if (feet < 400) {
    return 0;
  } else if (feet <= 2000) {
    return (feet - 400) * 0.02;
  } else if (feet < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
