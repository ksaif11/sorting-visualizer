import React, { useState, useEffect, useCallback } from "react";
import { bubbleSort, selectionSort, insertionSort, heapSort, mergeSort } from "../algorithms";
import "../styles.css";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [arraySize, setArraySize] = useState(30);
  const [sortingSpeed, setSortingSpeed] = useState(50);
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("selectionSort");
  const [isSorting, setIsSorting] = useState(false);

  const generateRandomArray = useCallback(() => {
    const newArray = Array.from({ length: arraySize }, () => ({
      value: Math.floor(Math.random() * 450) + 10,
      color: "#000000", // Default green
    }));
    setArray(newArray);
  }, [arraySize]);

  useEffect(() => {
    generateRandomArray();
  }, [arraySize, generateRandomArray]);

  const startSorting = async () => {
    setIsSorting(true);
    switch (selectedAlgorithm) {
      case "bubbleSort":
        await bubbleSort(array, setArray, sortingSpeed);
        break;
      case "selectionSort":
        await selectionSort(array, setArray, sortingSpeed);
        break;
      case "insertionSort":
        await insertionSort(array, setArray, sortingSpeed);
        break;
      case "heapSort":
        await heapSort(array, setArray, sortingSpeed);
        break; 
      case "mergeSort":
        await mergeSort(array, setArray, sortingSpeed);
        break; 
      default:
        break;
    }
    setIsSorting(false);
  };

  return (
    <div className="visualizer-container">
      <h1>Sorting Visualizer</h1>
      <div className="controls">
        <label>
          Array Size:
          <input
            type="range"
            min="10"
            max="70"
            value={arraySize}
            onChange={(e) => setArraySize(Number(e.target.value))}
            disabled={isSorting}
          />
        </label>
        <label>
          Speed:
          <input
            type="range"
            min="1"
            max="100"
            value={100-sortingSpeed}
            onChange={(e) => setSortingSpeed(Number(e.target.value))}
            disabled={isSorting}
          />
        </label>
        <label>
          Algorithm:
          <select
            value={selectedAlgorithm}
            onChange={(e) => setSelectedAlgorithm(e.target.value)}
            disabled={isSorting}
          >
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="heapSort">Heap Sort</option>
            <option value="mergeSort">Merge Sort</option>
          </select>
        </label>
        <button onClick={generateRandomArray} disabled={isSorting}>
          Generate New Array
        </button>
        <button onClick={startSorting} disabled={isSorting}>
          Start Sorting
        </button>
      </div>
      <div className="array-container">
        {array.map((item, idx) => (
          <div
            key={idx}
            className="array-bar"
            style={{
              height: `${item.value}px`,
              backgroundColor: item.color,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;