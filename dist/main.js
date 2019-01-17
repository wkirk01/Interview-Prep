"use strict";
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const searchValue = 12;
let currentLength = arr.length;
let startingPosition = 0;
let foundLocation;
while (currentLength > 1 && !foundLocation) {
    let halfLength = Math.floor(currentLength / 2);
    let midpointPosition = startingPosition + halfLength;
    let midpointValue = arr[midpointPosition];
    if (midpointValue == searchValue) {
        foundLocation = midpointPosition;
    }
    else if (searchValue < midpointValue) {
        currentLength = halfLength;
    }
    else {
        startingPosition = startingPosition + halfLength;
        currentLength = currentLength - halfLength - 1;
    }
}
console.log(foundLocation);
//# sourceMappingURL=main.js.map