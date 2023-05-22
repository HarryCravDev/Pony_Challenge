import { useEffect } from "react";
import Maze from "../components/Maze/Maze";
import { usePonyContext } from "../context/Pony/PonyContext";
import MazeGameService from "../services/MazeGameService";
import "./MazeGamePage.css";
import Alert from "../components/Alert/Alert";
import KeyBoard from "../components/Keyboard/KeyBoard";
import Instructions from "../components/Instructions/Instructions";

const keyMap: Record<string, "north" | "south" | "west" | "east"> = {
	ArrowUp: "north",
	ArrowDown: "south",
	ArrowLeft: "west",
	ArrowRight: "east",
};

const MazeGamePage = () => {
	const {
		mazeId,
		dispatch,
		isWinner,
		isLoser,
		maze,
		isError,
		errorMessage,
		showInstructions,
	} = usePonyContext();

	useEffect(() => {
		document.addEventListener("keyup", handleKeyUp);
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keyup", handleKeyUp);
			window.addEventListener("keydown", handleKeyDown);
		};
	}, [mazeId]);

	const handleKeyDown = (e: KeyboardEvent) => {
		if (!keyMap[e.key]) {
			return;
		}
		e.preventDefault();
	};

	async function handleKeyUp(e: KeyboardEvent) {
		if (!keyMap[e.key]) {
			return;
		}

		e.preventDefault();

		if (mazeId) {
			try {
				const result = await MazeGameService.movePony(keyMap[e.key], mazeId);

				if (result === "won") {
					return dispatch({ type: "GAME_OVER_WIN" });
				}

				if (result === "over") {
					return dispatch({ type: "GAME_OVER_LOSS" });
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
	}

	if (isError) {
		return (
			<div className="text-center p-5 result-container flex flex-col m-auto">
				<Alert
					message="Oh no! Something went wrong!"
					type="error"
					addtionalMessage={`Error message: ${errorMessage}`}
				/>
				<div className="flex justify-center mt-3">
					<img src="/images/pony-loser.png" />
				</div>
			</div>
		);
	}

	if (isWinner) {
		return (
			<div className="text-center p-5 result-container flex flex-col m-auto">
				<Alert message="Well done! You escaped!" type="success" />
				<div className="flex justify-center mt-3">
					<img src="/images/pony-winner.jpeg" />
				</div>
			</div>
		);
	}

	if (isLoser) {
		return (
			<div className="text-center p-5 result-container flex flex-col m-auto">
				<Alert
					message="Oh no! Try again? Create another maze above ☝️"
					type="error"
				/>
				<div className="flex justify-center mt-3">
					<img src="/images/pony-loser.png" />
				</div>
			</div>
		);
	}

	if (maze.length === 0 || showInstructions) {
		return (
			<div className="p-5 flex justify-center">
				<Instructions />
			</div>
		);
	}

	return (
		<section className="h-screen">
			<span className="mb-8"></span>
			<Maze maze={maze} />
			<KeyBoard />
		</section>
	);
};

export default MazeGamePage;
