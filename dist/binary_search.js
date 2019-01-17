"use strict";
const arr = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const searchValue = 123;
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
if (!foundLocation) {
    console.log(`${searchValue} is not in the array.`);
}
else {
    console.log(`${searchValue} is at position ${foundLocation}`);
}
//# sourceMappingURL=binary_search.js.map