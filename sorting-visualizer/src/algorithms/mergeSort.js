export const mergeSort = async (array, updateArray, speed) => {
  let arr = [...array];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 3 * ms));

  const merge = async (arr, left, mid, right) => {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      leftArr[i].color = "#FF0000";
      rightArr[j].color = "#FF0000";
      updateArray([...arr]);
      await sleep(speed);

      if (leftArr[i].value <= rightArr[j].value) {
        arr[k] = leftArr[i];
        i++;
      } else {
        arr[k] = rightArr[j];
        j++;
      }

      arr[k].color = "#FFA500";
      updateArray([...arr]);
      await sleep(speed);
      k++;
    }

    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      arr[k].color = "#FFA500";
      updateArray([...arr]);
      await sleep(speed);
      i++;
      k++;
    }

    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      arr[k].color = "#FFA500";
      updateArray([...arr]);
      await sleep(speed);
      j++;
      k++;
    }

    for (let i = left; i <= right; i++) {
      arr[i].color = "#4CAF50";
    }
    updateArray([...arr]);
    await sleep(speed);
  };

  const mergeSortRecursive = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await mergeSortRecursive(arr, left, mid);
      await mergeSortRecursive(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
  };

  await mergeSortRecursive(arr, 0, arr.length - 1);

  for (let i = 0; i < arr.length; i++) {
    arr[i].color = "yellow";
  }
  updateArray([...arr]);
};
