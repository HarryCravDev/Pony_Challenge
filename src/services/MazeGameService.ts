import IMazeElement from "../types/IMazeElement";
import MazeResponse from "../types/MazeResponse";
import MazeResponseCleaned from "../types/MazeResponseCleaned";
import PonyAPIService from "./PonyAPIService";

class MazeGameService {
	public async getNewMaze(
		mazeHeight: number,
		mazeWidth: number,
		difficulty: number
	): Promise<MazeResponseCleaned> {
		const mazeId = await PonyAPIService.getMazeID(
			mazeHeight,
			mazeWidth,
			difficulty
		);

		const mazeData = await PonyAPIService.getMazeData(mazeId);

		const mazeDataCleaned: MazeResponseCleaned =
			this.cleanMazeDataResponse(mazeData);

		mazeDataCleaned.walls = this.createMazeWalls(
			mazeDataCleaned,
			mazeHeight,
			mazeWidth
		);

		return mazeDataCleaned;
	}

	public async getRefreshedMaze(mazeId: string): Promise<MazeResponseCleaned> {
		const mazeData = await PonyAPIService.getMazeData(mazeId);

		const mazeDataCleaned: MazeResponseCleaned =
			this.cleanMazeDataResponse(mazeData);

		mazeDataCleaned.walls = this.createMazeWalls(
			mazeDataCleaned,
			mazeDataCleaned.size[1],
			mazeDataCleaned.size[0]
		);

		return mazeDataCleaned;
	}

	public async movePony(
		direction: "north" | "south" | "west" | "east",
		mazeId: string
	): Promise<"active" | "won" | "over"> {
		const result = await PonyAPIService.movePony(direction, mazeId);

		return result;
	}

	private createMazeWalls(
		mazeData: MazeResponseCleaned,
		mazeHeight: number,
		mazeWidth: number
	): IMazeElement[][] {
		const { data, pony, domokun, endPoint } = mazeData;

		const walls: any[][] = [];
		let indexCount = 0;

		for (let i = 0; i < mazeHeight; i++) {
			const row: IMazeElement[] = [];

			for (let j = 0; j < mazeWidth; j++) {
				const mazeElement: IMazeElement = {
					key: indexCount,
					walls: data[indexCount],
					isPony: indexCount === pony ? true : false,
					isDomokun: indexCount === domokun ? true : false,
					isEndPoint: indexCount === endPoint ? true : false,
					mazeHeight: mazeHeight,
					mazeWidth: mazeWidth,
				};

				if (i === mazeHeight - 1) {
					mazeElement["walls"].push("south");
				}

				if (j === mazeWidth - 1) {
					mazeElement["walls"].push("east");
				}

				row.push(mazeElement);
				indexCount++;
			}

			walls.push(row);
		}

		return walls;
	}

	private cleanMazeDataResponse(mazeData: MazeResponse): MazeResponseCleaned {
		const mazeDataCleaned: MazeResponseCleaned = {
			data: mazeData.data,
			difficulty: mazeData.difficulty,
			domokun: mazeData.domokun[0],
			endPoint: mazeData["end-point"][0],
			gameState: mazeData["game-state"],
			mazeId: mazeData["maze_id"],
			pony: mazeData.pony[0],
			size: mazeData.size,
			walls: mazeData.walls,
		};

		return mazeDataCleaned;
	}
}

export default new MazeGameService();
