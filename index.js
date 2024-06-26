// Code your solution in this file!
const distanceFromHqInBlocks = (pickupLocation) => {
    //if(pickupLocation > 42) {
        //return pickupLocation - 42;
    //} else {
        //return 42 - pickupLocation;
    //}
    return Math.abs(pickupLocation - 42);
}

const distanceFromHqInFeet = (pickupLocation) => {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
return (Math.abs(start-destination)) * 264
}

function calculatesFarePrice(start, destination) {
    let totalFeet = distanceTravelledInFeet(start, destination)
    //first 400 ft free
    if (totalFeet <= 400) {
        return 0
    } else if (totalFeet >= 400 && totalFeet <= 2000) {
        return (totalFeet - 400) * .02;
    } else if (totalFeet >= 2000 && totalFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far'
    }
}


