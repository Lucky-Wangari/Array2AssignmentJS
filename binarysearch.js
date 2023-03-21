//Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null


function find(array,target){
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    console.log("lefta", leftIndex);
    console.log("righta", rightIndex)

    while(leftIndex <= rightIndex){
        console.log("leftb", leftIndex);
        console.log("rightb", rightIndex);

        let middle = Math.floor((leftIndex +rightIndex)/2);
        if(array[middle] === target){
               return middle;
        }
        else if(array[middle] > target){
           rightIndex  = middle -1;
        }else{
            leftIndex = middle +1;
        }

    }
    return null;
}
function mergeSort(array) {
    if (array.length <= 1) {
      return array;
     }
     let middle = Math.floor(array.length / 2);
     let leftIndex = array.slice(0, middle);
     let rightIndex = array.slice(middle);
     return merge(mergeSort(leftIndex), mergeSort(rightIndex));
   }
   function merge(leftIndex, rightIndex) {
    let result = [];
    while (leftIndex.length && rightIndex.length) {
      if (leftIndex[0] < rightIndex[0]) {
        result.push(leftIndex.shift());
      } else {
        result.push(rightIndex.shift());
      }
    }
    return [...result, ...leftIndex, ...rightIndex];
  }
  

let num = [45,12,6,89,2,5]
let target = 6
console.log(find(num, target))

//merge sort in descending order
function mergeSort(array2) {
    if (array2.length <= 1) {
      return array2;
    }
    let middle = Math.floor(array2.length / 2);
    let left = array2.slice(0, middle);
    let right = array2.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  function merge(left, right) {
    let result = [];
    while (left.length && right.length) {
      if (left[0] >= right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return [...result, ...left, ...right];
  }
  let array2 = [123, 89, 5, 23, 9, 56];
  array2 = mergeSort(array2);
  console.log(array2)

  
  //Find the target
  function findTheTarget(array3, target) {
    array3 = mergeSort(array3);
    let leftSide = 0;
    let rightSide = array3.length - 1;
    while (leftSide <= rightSide) {
      let middle = Math.floor((leftSide + rightSide) / 2);
      if (array3[middle] === target) {
        return middle;
      } else if (array3[middle] < target) {
        leftSide = middle + 1;
      } else {
        rightSide = middle - 1;
      }
    }
    return null;
  }
  function mergeSort(array3) {
    if (array3.length <= 1) {
      return array3;
    }
    let middle = Math.floor(array3.length / 2);
    let leftSide = array3.slice(0, middle);
    let rightSide = array3.slice(middle);
    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
  function merge(leftSide, rightSide) {
    let result = [];
    while (leftSide.length && rightSide.length) {
      if (leftSide[0] < rightSide[0]) {
        result.push(leftSide.shift());
      } else {
        result.push(rightSide.shift());
      }
    }
    return [...result, ...leftSide, ...rightSide];
  }
  let target2 = 34;
  let arr3 = [1, 4, 78, 2, 67, 3];
  let found = findTheTarget(arr3, target2);
  console.log(found); 
  

  
   