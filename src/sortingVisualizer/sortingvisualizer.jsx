import React, { useEffect, useState } from "react";
import OptionsPanel from "../components/optionsPanel.js";
import { getMergeSortAnimations } from "../sortingAlgorithms/sortingAlgorithms.js";
import { getBubbleSortAnimation } from "../sortingAlgorithms/sortingAlgorithms.js";
import { getQuickSortAnimation } from "../sortingAlgorithms/sortingAlgorithms.js";
import st from "./sortingvisualizer.module.css";

const ANIMATION_SPEED_MS = 100;
const NUMBER_OF_ARRAY_BARS = 10;
const PRIMARY_COLOR = "turquoise";
const SECONDARY_COLOR = "red";

function SortingVisualizer() {
	const [speed, setSpeed] = useState(ANIMATION_SPEED_MS);
	const [size, setSize] = useState(NUMBER_OF_ARRAY_BARS);
	const [disabled, setDisabled] = useState(true);
	const [array, setArray] = useState([]);

	const mergeSort = async () => {
		await setDisabled(!disabled);
		const animations = getMergeSortAnimations(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(st.array_bar);
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * speed);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight] = animations[i];
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
				}, i * speed);
			}
		}
	};

	const quickSort = async () => {
		await setDisabled(!disabled);
		const animations = getQuickSortAnimation(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(st.array_bar);
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * speed);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
					barTwoStyle.height = `${newHeight2}px`;
				}, i * speed);
			}
		}
	};

	const bubbleSort = async () => {
		await setDisabled(!disabled);

		const animations = getBubbleSortAnimation(array);
		for (let i = 0; i < animations.length; i++) {
			const arrayBars = document.getElementsByClassName(st.array_bar);
			const isColorChange = i % 3 !== 2;
			if (isColorChange) {
				const [barOneIdx, barTwoIdx] = animations[i];
				const barOneStyle = arrayBars[barOneIdx].style;
				const barTwoStyle = arrayBars[barTwoIdx].style;
				const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
				setTimeout(() => {
					barOneStyle.backgroundColor = color;
					barTwoStyle.backgroundColor = color;
				}, i * ANIMATION_SPEED_MS);
			} else {
				setTimeout(() => {
					const [barOneIdx, newHeight, barTwoIdx, newHeight2] = animations[i];
					const barTwoStyle = arrayBars[barTwoIdx].style;
					const barOneStyle = arrayBars[barOneIdx].style;
					barOneStyle.height = `${newHeight}px`;
					barTwoStyle.height = `${newHeight2}px`;
				}, i * ANIMATION_SPEED_MS);
			}
		}
	};

	return (
		<div className={st.array_container}>
			<OptionsPanel
				speed={speed}
				setSpeed={setSpeed}
				size={size}
				setSize={setSize}
				array={array}
				setArray={setArray}
				disabled={disabled}
				setDisabled={setDisabled}
			/>
			<div className={st.array_blocks}>
				{array.map((value, idx) => (
					<div
						className={st.array_bar}
						key={idx}
						style={{
							backgroundColor: PRIMARY_COLOR,
							height: `${value}px`,
						}}
					></div>
				))}
			</div>
			<div className={st.controls}>
				<button
					disabled={disabled}
					className={disabled ? st.deactiveButton : st.activeButton}
					onClick={() => mergeSort()}
				>
					Merge Sort
				</button>
				<button
					disabled={disabled}
					className={disabled ? st.deactiveButton : st.activeButton}
					onClick={() => quickSort()}
				>
					Quick Sort
				</button>
				<button
					className={disabled ? st.deactiveButton : st.activeButton}
					disabled={disabled ? true : false}
					onClick={() => bubbleSort()}
				>
					Bubble Sort
				</button>
			</div>
		</div>
	);
}

export default SortingVisualizer;
