const array = [1, 1, 5, 124, 400, 599, 1004, 2879, 8653];

function binarySearch(array, fincValue) {
    let left = 0;
    let right = array.length -1;
    let mid = Math.floor((left + right) / 2);
    while (left < right){
        if(array[mid] === fincValue){
            return mid;
        }

        if(array[mid] < fincValue){
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        mid = Math.floor((left + right) / 2);
    }

    return -1;
}


console.log(binarySearch(array, 2879));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 500));
