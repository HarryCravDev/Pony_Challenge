import React from "react";
import IMazeElement from "../../../types/IMazeElement";
import "./MazeElement.css";

const MazeElement: React.FC<{ mazeElement: IMazeElement }> = ({
	mazeElement,
}) => {
	const { walls, isDomokun, isPony, isEndPoint, height } = mazeElement;

	const elementClass = ["element"];

	for (const wall in walls) {
		elementClass.push(walls[wall]);
	}

	if (isPony) {
		elementClass.push("pony");
	}

	if (isDomokun) {
		elementClass.push("domokun");
	}

	if (isEndPoint) {
		elementClass.push("exit");
	}

	const elementStyle: Record<string, string | number> = {};

	const h = 70 / height;
	elementStyle["height"] = h + "vmin";
	elementStyle["width"] = h + "vmin";

	return (
		<div className={elementClass.join(" ")} style={elementStyle}>
			{isPony ? (
				<img src="./images/rarity.png" />
			) : isDomokun ? (
				<img src="./images/domokun-2.png" />
			) : isEndPoint ? (
				<img src="./images/portal.png" />
			) : (
				""
			)}
		</div>
	);
};

export default MazeElement;
