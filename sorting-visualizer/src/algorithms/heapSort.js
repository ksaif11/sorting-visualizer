export const heapSort = async (array, updateArray, speed) => {
  let arr = [...array];
  let n = arr.length;

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 3 * ms));

  const heapify = async (arr, n, i) => {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    arr[i].color = "#FFA500";
    if (left < n) arr[left].color = "#FF0000";
    if (right < n) arr[right].color = "#FF0000";
    updateArray([...arr]);
    await sleep(speed);

    if (left < n && arr[left].value > arr[largest].value) {
      largest = left;
    }

    if (right < n && arr[right].value > arr[largest].value) {
      largest = right;
    }

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      updateArray([...arr]);
      await sleep(speed);

      if (left < n) arr[left].color = "#4CAF50";
      if (right < n) arr[right].color = "#4CAF50";
      arr[i].color = "#4CAF50";
      arr[largest].color = "#4CAF50";

      updateArray([...arr]);
      await sleep(speed);

      await heapify(arr, n, largest);
    } else {
      if (left < n) arr[left].color = "#4CAF50";
      if (right < n) arr[right].color = "#4CAF50";
      arr[i].color = "#4CAF50";
      updateArray([...arr]);
      await sleep(speed);
    }
  };

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    arr[i].color = "yellow";
    updateArray([...arr]);
    await sleep(speed);

    await heapify(arr, i, 0);
  }

  arr[0].color = "yellow";
  updateArray([...arr]);
};
