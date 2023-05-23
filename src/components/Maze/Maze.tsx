import React, { useState, useEffect } from "react";
import IMazeElement from "../../types/IMazeElement";
import MazeRow from "./MazeRow/MazeRow";
import IMazeProps from "../../types/IMazeProps";
import { getMazeElementSquareHeight } from "./utils/getMazeElementSquareHeight";

const Maze: React.FC<IMazeProps> = ({ maze }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Update the screenWidth state whenever the window is resized
		const handleResize = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		// Clean up the event listener when the component is unmounted
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const { mazeHeight } = maze[0][0];
	const mazeElementSize = getMazeElementSquareHeight(screenWidth, mazeHeight);

	return (
		<section>
			{maze.map((walls: IMazeElement[], index: number) => {
				return (
					<MazeRow
						walls={walls}
						key={index}
						mazeElementSize={mazeElementSize}
					/>
				);
			})}
		</section>
	);
};

export default Maze;
