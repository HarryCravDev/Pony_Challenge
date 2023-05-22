export default interface IMazeElement {
	height: number;
	isDomokun: boolean;
	isEndPoint: boolean;
	isPony: boolean;
	key: number;
	walls: ("north" | "east" | "south" | "west")[];
}
