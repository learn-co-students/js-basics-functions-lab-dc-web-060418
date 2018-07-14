// Code your solution in this file!
function distanceFromHqInBlocks(num){
    return Math.abs(42 - num)
}

function distanceFromHqInFeet(num){
    return distanceFromHqInBlocks(num) * 264
}

function distanceTravelledInFeet(block1, block2) {
    return Math.abs(block2 - block1) * 264
}

function calculatesFarePrice(start, destination) {
    totalFeet = distanceTravelledInFeet(start, destination)
    if (totalFeet <= 400) {
        return 0;
    } else if (totalFeet > 400 && totalFeet <= 2000) {
        minus400 = totalFeet - 400;
        return minus400 * .02
    } else if (totalFeet > 2000 && totalFeet <2500) {
        return 25
    } else {
        return 'cannot travel that far'
    }
}