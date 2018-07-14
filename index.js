// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    return Math.abs(42-block);
}

function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block1 - block2) * 264;
}

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet <= 400) {
        return 0;
    } else if (feet > 2500) {
        return "cannot travel that far";
    } else if (feet > 2000) {
        return 25;
    } else {
        return (feet-400) * 0.02;
    }
}

