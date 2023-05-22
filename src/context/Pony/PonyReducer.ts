import { IPonyContext } from "./PonyContext";

const ponyReducer = (
	state: IPonyContext,
	action: {
		type: string;
		data?: any;
	}
) => {
	switch (action.type) {
		case "SET_MAZE_ID":
			return {
				...state,
				mazeId: action.data,
				loading: false,
				isError: false,
				errorMessage: "",
				showInstructions: false,
			};
		case "SET_MAZE":
			return {
				...state,
				mazeId: action.data.mazeId,
				maze: action.data.walls,
				difficulty: action.data.difficulty,
				pony: action.data.pony,
				domokun: action.data.domokun,
				endPoint: action.data.endPoint,
				size: action.data.size,
				gameState: action.data.gameState,
				loading: false,
				activeGame: true,
				isError: false,
				errorMessage: "",
				showInstructions: false,
			};
		case "GAME_OVER_WIN":
			return {
				...state,
				activeGame: false,
				isWinner: true,
				isLoser: false,
				mazeId: "",
				isError: false,
				errorMessage: "",
				pony: 0,
				domokun: 0,
				endPoint: 0,
				maze: [],
				size: [],
			};
		case "GAME_OVER_LOSS":
			return {
				...state,
				activeGame: false,
				isLoser: true,
				isWinner: false,
				mazeId: "",
				isError: false,
				errorMessage: "",
				pony: 0,
				domokun: 0,
				endPoint: 0,
				maze: [],
				size: [],
			};
		case "RESET_LOSER_AND_WINNER":
			return {
				...state,
				isLoser: false,
				isWinner: false,
			};
		case "TOGGLE_SHOW_INSTRUCTIONS":
			return {
				...state,
				isLoser: false,
				isWinner: false,
				showInstructions: action.data,
			};
		case "UPDATE_MAZE_PARAM_HEIGHT":
			return {
				...state,
				mazeHeight: action.data,
				loading: false,
			};
		case "UPDATE_MAZE_PARAM_WIDTH":
			return {
				...state,
				mazeWidth: action.data,
				loading: false,
			};
		case "SET_DIFFICULTY":
			return {
				...state,
				difficulty: action.data,
				loading: false,
			};
		case "SET_LOADING":
			return {
				...state,
				loading: true,
			};
		case "SET_ERROR":
			return {
				...state,
				loading: false,
				isError: true,
				errorMessage: action.data,
			};
		default:
			return state;
	}
};

export default ponyReducer;
