export const bubbleSort = async (array, updateArray, speed) => {
  let arr = [...array];
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      arr[j].color = "#FF0000";
      arr[j + 1].color = "#FF0000";
      updateArray([...arr]);
      await sleep(speed);

      if (arr[j].value > arr[j + 1].value) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        arr[j].color = "#FFA500";
        arr[j + 1].color = "#FFA500";
        updateArray([...arr]);
        await sleep(speed);
      }

      if (arr[j].color !== "#FFA500") {
        arr[j].color = "#4CAF50";
      }
      if (arr[j + 1].color !== "#FFA500") {
        arr[j + 1].color = "#4CAF50";
      }
      updateArray([...arr]);
    }
  }

  for (let i = 0; i < n; i++) {
    arr[i].color = "yellow";
  }
  updateArray([...arr]);
};

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, 8 * ms));
