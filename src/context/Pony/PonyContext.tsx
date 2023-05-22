import { ReactNode, createContext, useContext, useReducer } from "react";
import ponyReducer from "./PonyReducer";
import IMazeElement from "../../types/IMazeElement";

export interface IPonyContext {
	loading: boolean;
	isError: boolean;
	errorMessage: string;
	activeGame: boolean;
	isLoser: boolean;
	isWinner: boolean;
	showInstructions: boolean;
	mazeId: string;
	difficulty: number;
	mazeWidth: number;
	mazeHeight: number;
	pony: number;
	domokun: number;
	endPoint: number;
	maze: IMazeElement[][];
	size: number[];
	dispatch: React.Dispatch<{
		type: string;
		data?: any;
	}>;
}
const initialState: IPonyContext = {
	loading: false,
	isError: false,
	activeGame: false,
	isLoser: false,
	isWinner: false,
	showInstructions: false,
	errorMessage: "",
	mazeId: "",
	difficulty: 0,
	mazeWidth: 15,
	mazeHeight: 15,
	pony: 0,
	domokun: 0,
	endPoint: 0,
	maze: [],
	size: [],
	dispatch: () => {},
};
export const PonyContext = createContext<IPonyContext>(initialState);

export const usePonyContext = () => {
	const context = useContext(PonyContext);

	if (context === null) {
		throw new Error("usePonyContext must be used within a PonyProvider");
	}

	return context;
};

export const PonyProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(ponyReducer, initialState);

	return (
		<PonyContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</PonyContext.Provider>
	);
};
