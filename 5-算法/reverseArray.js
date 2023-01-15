const arr = [1,2,3,4,5];
const swap = function(arr, i,j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function reverseArr(arr) {
    if(Array.isArray(arr)) {
        let left = 0;
        let right = arr.length - 1;
        while(left<right) {
            swap(arr,left,right)
            left++
            right--
        }
    }
    return arr;
}
console.log(reverseArr(arr));