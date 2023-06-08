export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  



  export function getBubbleSortAnimation(array) {
      const animations = [];
      if(array.length <= 1)
      return array;
      bubbleSortHelper(array, animations);
      return animations;
  }

  function bubbleSortHelper(mainArray, animations) {
      var i = 0;
      var n = mainArray.length;
      while(i < n - 1)
      {
          var j = 0;
          while(j < n - i - 1)
          {
              animations.push([j, j + 1]);
              animations.push([j, j + 1]);
              if(mainArray[j] > mainArray[j + 1])
              {
              animations.push([j , mainArray[j + 1], j + 1, mainArray[j]]);
              var x = mainArray[j];
              mainArray[j] = mainArray[j + 1];
              mainArray[j + 1] = x;
              }
              else
                  animations.push([j, mainArray[j], j, mainArray[j]])
              j++;
          }
          i++;
      }
  }

  export function getQuickSortAnimation(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSortHelper(array, 0, array.length - 1, animations);
    console.log(array)
    return animations;
  }

    function partition(mainArray, start, end, animations) {
        const pivot = mainArray[end];
        let i = start - 1;
        for (let j = start; j < end; j++) {
            animations.push([j, end]);
            animations.push([j, end]);
            if (mainArray[j] <= pivot) {
                i++;
                animations.push([i, mainArray[j], j, mainArray[i]])
                const temp = mainArray[i];
                mainArray[i] = mainArray[j];
                mainArray[j] = temp;
            }
            else 
                animations.push([i + 1, mainArray[i + 1],  i + 1, mainArray[i+1]]);
        }
        animations.push([i+1, end])
        animations.push([i+1, end])
        animations.push([i+1, mainArray[end], end, mainArray[i+1]]);
        const temp = mainArray[i + 1];
        mainArray[i + 1] = mainArray[end];
        mainArray[end] = temp;
        return i + 1;
    }


    function quickSortHelper(array, startIdx, endIdx, animations) {
        if (startIdx >= endIdx) return;
        const pivotIdx = partition(array, startIdx, endIdx, animations);        
        quickSortHelper(array, startIdx, pivotIdx - 1, animations);
        quickSortHelper(array, pivotIdx + 1, endIdx, animations);   
    }

    /* 
100 36 60 366 359



    */