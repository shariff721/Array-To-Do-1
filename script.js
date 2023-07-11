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
    for (let j = arr.length; j >= i; j--) {
        arr[j] = arr[j - 1]
    }
    arr[i] = x
    return arr
}

console.log(InsertAt([100, 200, 5], 2, 311))
console.log(InsertAt([9, 33, 7], 1, 7))


