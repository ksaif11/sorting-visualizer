export const selectionSort = async (array, updateArray, speed) => {
  let arr = [...array];
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    arr[minIndex].color = "#FFA500";
    updateArray([...arr]);
    await sleep(speed);

    for (let j = i + 1; j < n; j++) {
      arr[j].color = "#FF0000";
      updateArray([...arr]);
      await sleep(speed);

      if (arr[j].value < arr[minIndex].value) {
        arr[minIndex].color = "#4CAF50";
        minIndex = j;
        arr[minIndex].color = "#FFA500";
      } else {
        arr[j].color = "#4CAF50";
      }

      updateArray([...arr]);
      await sleep(speed);
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    arr[i].color = "yellow";
    updateArray([...arr]);
    await sleep(speed);
  }

  arr[n - 1].color = "yellow";
  updateArray([...arr]);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 3 * ms));
