import { useState } from "react";

const states = [
	{
		top: "red",
		middle: "black",
		bottom: "black",
	},
	{
		top: "black",
		middle: "yellow",
		bottom: "black",
	},
	{
		top: "black",
		middle: "black",
		bottom: "green",
	},
];
export const FunctionalTrafficLight = () => {
	const [lightColor, setLightColor] = useState(0);
	const currentLightColor = states[lightColor];

	const changeLightColor = () => {
		if (lightColor < states.length - 1) {
			setLightColor(lightColor + 1);
		} else if (lightColor === states.length - 1) {
			setLightColor(0);
		}
	};

	return (
		<div className="traffic-light-box">
			<h2>Functional Traffic Light</h2>
			<div className="traffic-light">
				<div className={`circle ${currentLightColor.top}`}></div>
				<div className={`circle ${currentLightColor.middle}`}></div>
				<div className={`circle ${currentLightColor.bottom}`}></div>
			</div>
			<button
				className="next-state-button"
				onClick={changeLightColor}
			>
				Next State
			</button>
		</div>
	);
};
