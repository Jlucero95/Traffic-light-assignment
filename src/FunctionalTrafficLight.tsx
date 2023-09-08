import { useState } from "react";

export const FunctionalTrafficLight = () => {
	const [redLightOn, setRedLightOn] = useState(true);
	const [yellowLightOn, setYellowLightOn] = useState(false);
	const [greenLightOn, setGreenLightOn] = useState(false);

	const toggleState = () => {
		if (redLightOn) {
			setRedLightOn(false);
			setYellowLightOn(true);
		} else if (yellowLightOn) {
			setYellowLightOn(false);
			setGreenLightOn(true);
		} else if (greenLightOn) {
			setGreenLightOn(false);
			setRedLightOn(true);
		}
	};

	return (
		<div className="traffic-light-box">
			<h2>Functional Traffic Light</h2>
			<div className="traffic-light">
				<div className={`circle ${redLightOn ? "red" : "black"}`}></div>
				<div className={`circle ${yellowLightOn ? "yellow" : "black"}`}></div>
				<div className={`circle ${greenLightOn ? "green" : "black"}`}></div>
			</div>
			<button
				className="next-state-button"
				onClick={toggleState}
			>
				Next State
			</button>
		</div>
	);
};
