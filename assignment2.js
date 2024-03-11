function mergeUnsortedArrs(left, right) {
  const sortedItems = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedItems.push(left.shift());
    } else {
      sortedItems.push(right.shift());
    }
  }

  return [...sortedItems, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const right = [...arr];

  const middlePoint = arr.length / 2;
  const left = right.splice(0, middlePoint);

  return mergeUnsortedArrs(mergeSort(left), mergeSort(right));
}

const input1 = [3, 2, 1, 13, 8, 5, 0, 1];
const input2 = [105, 79, 100, 110];

console.log(mergeSort(input1)); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort(input2)); // [79, 100, 105, 110]
