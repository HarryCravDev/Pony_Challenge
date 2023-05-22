import { useState } from "react";
import "./KeyBoard.css";
import MazeGameService from "../../services/MazeGameService";
import { usePonyContext } from "../../context/Pony/PonyContext";

const KeyBoard = () => {
	const { mazeId, dispatch } = usePonyContext();
	const [activeKey, setActiveKey] = useState<string>("");

	async function handleKeyDown(direction: "north" | "south" | "west" | "east") {
		setActiveKey(direction);

		if (mazeId) {
			try {
				const result = await MazeGameService.movePony(direction, mazeId);

				if (result === "won") {
					dispatch({ type: "GAME_OVER_WIN" });
					return;
				}

				if (result === "over") {
					dispatch({ type: "GAME_OVER_LOSS" });
					return;
				}

				const refreshedMaze = await MazeGameService.getRefreshedMaze(mazeId);

				dispatch({
					type: "SET_MAZE",
					data: refreshedMaze,
				});
			} catch (error: any) {
				dispatch({
					type: "SET_ERROR",
					data: error.message,
				});
				console.error(error);
			}
		}
		setActiveKey("");
	}

	return (
		<>
			<div className="keys">
				<div
					className={`up arr ${activeKey === "north" ? "pressed" : ""}`}
					onClick={() => handleKeyDown("north")}
				>
					<i className="fa fa-arrow-up"></i>
				</div>
				<br />
				<div
					className={`left arr ${activeKey === "west" ? "pressed" : ""}`}
					onClick={() => handleKeyDown("west")}
				>
					<i className="fa fa-arrow-left"></i>
				</div>
				<div
					className={`down arr ${activeKey === "south" ? "pressed" : ""}`}
					onClick={() => handleKeyDown("south")}
				>
					<i className="fa fa-arrow-down"></i>
				</div>
				<div
					className={`right arr ${activeKey === "east" ? "pressed" : ""}`}
					onClick={() => handleKeyDown("east")}
				>
					<i className="fa fa-arrow-right"></i>
				</div>
			</div>
		</>
	);
};

export default KeyBoard;
