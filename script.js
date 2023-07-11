// PUSH TO FRONT

// var item = 7, i, arr = [9,9];
// PushFront(arr);
// function PushFront(arr) {
//     for (i = arr.length-1; i >= 0; --i) {
//         arr[i + 1] = arr[i];
//     }
//     arr[0] = item;
// };
// console.log(arr);


// POP FRONT

// Array.prototype.removeItem = function (item) {
//     for (i = 0; i < this.length; i++) {
//         if (this[i] === item) {
//             for (var j = i; j < this.length - 1; j++) {
//                 this[j] = this[j + 1];
//             }
//             this.length = this.length - 1
//             return;
//         }
//     }
// }

// var items = ['a', 'b', 'c', 'd'];
// items.removeItem('d');
// console.log(items);



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


