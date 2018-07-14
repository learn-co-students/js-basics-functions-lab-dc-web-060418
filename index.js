function distanceFromHqInBlocks (someValue) {
  //returns the number of blocks given a value
  if (someValue > 42) {
    return someValue - 42;
  } else {
    return 42 - someValue;
  }
}

function distanceFromHqInFeet (someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
  // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function, passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
  //the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet (start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else if (end > start) {
    return (end - start) * 264;
  }
}

function calculatesFarePrice (start, end) {

  if (distanceTravelledInFeet (start, end) < 400) {
    return 0;
  } else if (distanceTravelledInFeet (start, end) > 400 && distanceTravelledInFeet (start, end) < 2000) {
    return (distanceTravelledInFeet (start, end) - 400) * .02;
  } else if (distanceTravelledInFeet (start, end) > 2000 && distanceTravelledInFeet (start, end) < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
