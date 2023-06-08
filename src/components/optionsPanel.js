import React from "react";
import st from "./optionsPanel.module.css"
function OptionsPanel({size, speed, setSize, setSpeed, array, setArray, disabled, setDisabled}) {
 
   
  function randomIntFromInterval(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
 
  const resetArray = () => {
    setDisabled(false);
		const arr = [];
		for (let i = 0; i < size ; i++)                                                                                                                                                                                                                                                                                                                                                  
			arr.push(randomIntFromInterval(5, 500));
		setArray(arr);
	};


	return (
		<>
			<div className={st.optionpanel}>
				<div>SET ARRAY AND SPEED</div>
				<div className={st.controls}>
          <div>
					<label for="arraySize">Array Size: </label>
					<input type="range" min="1" max="35" value ={size} onChange={(e) => {setSize(e.target.value)}} id="arraySize"></input>
          </div>
          <div>
					<label for="arraySize">Speed :</label>
					<input type="range" min="1" max="100" value={speed} onChange={(e) => {setSpeed(e.target.value)}} id="arraySize"></input>
          </div>
				</div>
        <button 
        className={st.activeButton}
        onClick={() => {resetArray()}}>Generate New Array</button>
			</div>
		</>
	);
}

export default OptionsPanel;
