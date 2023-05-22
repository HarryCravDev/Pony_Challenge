export default interface MazeResponse {
	data: ("north" | "south")[][];
	difficulty: number;
	domokun: number[];
	"end-point": number[];
	"game-state": {
		state: string;
		"state-result": string;
	};
	maze_id: string;
	pony: number[];
	size: number[];
	walls: any[];
}
