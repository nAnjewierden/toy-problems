"use strict";

function flattenAndSort(array) {
  let toSort = []
  array.map((ele) => {
    ele.map((subele) => {
      toSort.push(subele)
      console.log(toSort)
    })
  })
 function numeric(a, b){ return a - b }
    console.log(typeof toSort.sort(numeric))
  return toSort
}

console.log(flattenAndSort([]) + 'this should be []')
console.log(flattenAndSort([[], [1]]) + 'this should be [1]')
console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) + 'this should be [1, 2, 3, 4, 5, 6, 7, 8, 9]')
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]) + 'this should be [1, 2, 3, 4, 5, 6, 100]')