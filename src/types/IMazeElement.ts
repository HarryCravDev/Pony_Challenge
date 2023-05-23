export default interface IMazeElement {
	mazeHeight: number;
	mazeWidth: number;
	isDomokun: boolean;
	isEndPoint: boolean;
	isPony: boolean;
	key: number;
	walls: ("north" | "east" | "south" | "west")[];
}
