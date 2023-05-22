import axios from "axios";
import MazeResponse from "../types/MazeResponse";

class PonyAPIService {
	private apiUrl = "https://ponychallenge.trustpilot.com";

	public async getMazeID(
		mazeHeight: number,
		mazeWidth: number,
		difficulty: number
	): Promise<string> {
		const { data } = await axios.post(`${this.apiUrl}/pony-challenge/maze`, {
			"maze-width": mazeWidth,
			"maze-height": mazeHeight,
			"maze-player-name": "Applejack",
			difficulty: difficulty,
		});

		const { maze_id } = data;

		return maze_id;
	}

	public async getMazeData(mazeId: string): Promise<MazeResponse> {
		const { data } = await axios.get(
			`${this.apiUrl}/pony-challenge/maze/${mazeId}`
		);

		return data;
	}

	public async movePony(
		direction: "north" | "south" | "west" | "east",
		mazeId: string
	): Promise<"active" | "won" | "over"> {
		const { data } = await axios.post(
			`${this.apiUrl}/pony-challenge/maze/${mazeId}`,
			{
				direction: direction,
			}
		);

		return data.state;
	}
}

export default new PonyAPIService();
