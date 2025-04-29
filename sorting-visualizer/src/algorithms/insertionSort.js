export const insertionSort = async (array, updateArray, speed) => {
  let arr = [...array];
  let n = arr.length;

  for (let i = 1; i < n; i++) {
    let key = arr[i];
    key.color = "#FF0000";
    updateArray([...arr]);
    await sleep(speed);

    let j = i - 1;
    while (j >= 0 && arr[j].value > key.value) {
      arr[j].color = "#FF0000";
      updateArray([...arr]);
      await sleep(speed);

      arr[j + 1] = arr[j];
      arr[j].color = "#4CAF50";
      updateArray([...arr]);
      await sleep(speed);

      j--;
    }

    arr[j + 1] = key;
    key.color = "yellow";
    updateArray([...arr]);
    await sleep(speed);
  }

  updateArray([...arr]);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 3 * ms));
