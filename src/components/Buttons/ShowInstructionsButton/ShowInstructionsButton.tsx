import React from "react";
import ButtonProps from "../../../types/ButtonProps";
import { usePonyContext } from "../../../context/Pony/PonyContext";
import { getColorClass } from "../utils/getColorClass";

const ShowInstructions: React.FC<ButtonProps> = ({ color }) => {
	const { dispatch, showInstructions, mazeId } = usePonyContext();

	const buttonClassColor = getColorClass(color);

	const handleClick = () => {
		dispatch({ type: "TOGGLE_SHOW_INSTRUCTIONS", data: !showInstructions });
	};

	return (
		<button onClick={handleClick} className={`btn btn-nav ${buttonClassColor}`}>
			{showInstructions && mazeId ? "Hide Instructions" : "Show Instructions"}
		</button>
	);
};

export default ShowInstructions;
