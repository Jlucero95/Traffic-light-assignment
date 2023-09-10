import { useState } from "react";
import { lightState } from "./LightStates";

export const FunctionalTrafficLight = () => {
	const [lightColor, setLightColor] = useState(0);
	const currentLightColor = lightState[lightColor];

	const changeLightColor = () => {
		if (lightColor < lightState.length - 1) {
			setLightColor(lightColor + 1);
		} else if (lightColor === lightState.length - 1) {
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
