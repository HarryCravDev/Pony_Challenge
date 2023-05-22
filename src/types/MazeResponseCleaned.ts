import IMazeElement from "./IMazeElement";

export default interface MazeResponseCleaned {
	data: ("north" | "south")[][];
	difficulty: number;
	domokun: number;
	endPoint: number;
	gameState: {
		state: string;
		"state-result": string;
	};
	mazeId: string;
	pony: number;
	size: number[];
	walls: IMazeElement[][];
}
