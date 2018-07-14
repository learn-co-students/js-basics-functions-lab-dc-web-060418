// Code your solution in this file!


function distanceFromHqInBlocks(block){
  return Math.abs(block- 42);
}

function distanceFromHqInFeet(blocks){
  return( distanceFromHqInBlocks(blocks)* 264);
}

function distanceTravelledInFeet(block1, block2){
  return( Math.abs(block1-block2)*264)
}

function calculatesFarePrice(start, destination){
  let distance = distanceTravelledInFeet(start, destination);
  
  switch (true) {
    case distance <= 400: 
      return 0;
    case 400 < distance && distance < 2000:
      return (distance-400)*2/100; 
    case 2000 < distance && distance <= 2500: 
      return  25;
    case distance > 2500:
      return 'cannot travel that far';
  }
}