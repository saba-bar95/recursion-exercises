function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midPoint = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midPoint);
  const rightArr = arr.slice(midPoint);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) sortedArr.push(leftArr.shift());
    else sortedArr.push(rightArr.shift());
  }

  return [...sortedArr, ...leftArr, ...rightArr];
}
