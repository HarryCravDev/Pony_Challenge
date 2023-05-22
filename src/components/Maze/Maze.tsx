import React from "react";
import IMazeElement from "../../types/IMazeElement";
import MazeRow from "./MazeRow/MazeRow";
import IMazeProps from "../../types/IMazeProps";

const Maze: React.FC<IMazeProps> = ({ maze }) => {
	return (
		<section className="">
			{maze.map((walls: IMazeElement[], index: number) => {
				return <MazeRow walls={walls} key={index} />;
			})}
		</section>
	);
};

export default Maze;
