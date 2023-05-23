import React from "react";
import InputRange from "../InputRange/InputRange";
import CreateMazeButton from "../Buttons/CreateMazeButton/CreateMazeButton";
import ShowInstructionsButton from "../Buttons/ShowInstructionsButton/ShowInstructionsButton";

const GameControls: React.FC<{ sideNav: boolean }> = ({ sideNav }) => {
	if (!sideNav) {
		return (
			<>
				<InputRange
					title="Difficulty"
					maxValue={10}
					minValue={0}
					inputColor="success"
					actionType="SET_DIFFICULTY"
					sideNav={sideNav}
				/>
				<InputRange
					title="Grid Width"
					maxValue={25}
					minValue={15}
					inputColor="warning"
					actionType="UPDATE_MAZE_PARAM_WIDTH"
					sideNav={sideNav}
				/>
				<InputRange
					title="Grid Height"
					maxValue={25}
					minValue={15}
					inputColor="warning"
					actionType="UPDATE_MAZE_PARAM_HEIGHT"
					sideNav={sideNav}
				/>
				<CreateMazeButton title="Create Maze" color="success" />
				<ShowInstructionsButton title="Instructions" color="success" />
			</>
		);
	} else {
		return (
			<>
				<li className="w-full">
					<h1>Controls</h1>
				</li>
				<li className="w-full">
					<InputRange
						title="Difficulty"
						maxValue={10}
						minValue={0}
						inputColor="success"
						actionType="SET_DIFFICULTY"
						sideNav={sideNav}
					/>
				</li>
				<li className="w-full">
					<InputRange
						title="Grid Width"
						maxValue={25}
						minValue={15}
						inputColor="warning"
						actionType="UPDATE_MAZE_PARAM_WIDTH"
						sideNav={sideNav}
					/>
				</li>
				<li className="w-full">
					<InputRange
						title="Grid Height"
						maxValue={25}
						minValue={15}
						inputColor="warning"
						actionType="UPDATE_MAZE_PARAM_HEIGHT"
						sideNav={sideNav}
					/>
				</li>
				<li className="text-black	">
					<CreateMazeButton title="Create Maze" color="success" />
					<div></div>
					<ShowInstructionsButton title="Instructions" color="success" />
				</li>
			</>
		);
	}
};

export default GameControls;
