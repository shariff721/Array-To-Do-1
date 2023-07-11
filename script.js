// PUSH TO FRONT

var item = 7, i, arr = [9, 9];
PushFront(arr);
function PushFront(arr) {
    for (i = arr.length - 1; i >= 0; --i) {
        arr[i + 1] = arr[i];
    }
    arr[0] = item;
};
console.log(arr);



// POP FRONT

function popFront(arr) {
    let temp = arr[0]
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = arr.length - 1
    console.log(arr)
    return temp
}
console.log(popFront([3, 5, 6, 9]))
console.log(popFront([0, 5, 10, 15]))



//  INSERT AT

function InsertAt(arr, i, x) {
    const newArray = newArray(arr.length + 1);
    for (i = 0; i < arr.length - 1; i++) {
        newArray[i] = arr[i]
        newArray[i] = x;
    }
    for (let i = i + 1; i < newArray.length; i++) {
        newArray[i] = arr[i - 1]
    }
    return newArray
}

console.log(InsertAt([1, 2], 22, 1))


