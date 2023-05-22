import React from "react";
import { usePonyContext } from "../../../context/Pony/PonyContext";
import ButtonProps from "../../../types/ButtonProps";
import MazeGameService from "../../../services/MazeGameService";
import { getColorClass } from "../utils/getColorClass";

const CreateMazeButton: React.FC<ButtonProps> = ({ title, color }) => {
	const { loading, dispatch, mazeHeight, mazeWidth, difficulty } =
		usePonyContext();

	const buttonClassColor = getColorClass(color);

	const handleClick = async () => {
		dispatch({
			type: "RESET_LOSER_AND_WINNER",
		});

		try {
			const data = await MazeGameService.getNewMaze(
				mazeHeight,
				mazeWidth,
				difficulty
			);

			dispatch({
				type: "SET_MAZE",
				data,
			});
		} catch (error: any) {
			dispatch({
				type: "SET_ERROR",
				data: error.message,
			});
			console.error(error);
		}
	};
	return (
		<button
			onClick={handleClick}
			className={`btn btn-nav ${buttonClassColor}`}
			disabled={loading}
		>
			{title}
		</button>
	);
};

export default CreateMazeButton;
