// Code your solution in this file!
const hq_street = 42;

function distanceFromHqInBlocks(block) {
    let distance = 0;
    (hq_street > block) ? distance = hq_street - block : distance =  block - hq_street
    return distance
}

function distanceFromHqInFeet(block) {
    return 264 * distanceFromHqInBlocks(block)
}

function distanceTravelledInFeet(start_block, end_block) {
    return Math.abs(start_block - end_block)*264
}

function calculatesFarePrice(start, destination) {
    const distance_travelled = distanceTravelledInFeet(start, destination)
    if (distance_travelled > 2500) {
        return 'cannot travel that far'
    } else if (distance_travelled <= 400) {
        return 0
    }
    else if (distance_travelled > 2000){
        return 25
    }
    else{
        return (distance_travelled-400)*.02
    }
}