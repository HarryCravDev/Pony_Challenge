export const getMazeElementSquareHeight = (
	screenWidth: number,
	mazeHeight: number
): number => {
	switch (true) {
		case screenWidth < 421:
			return 100 / mazeHeight;
		case screenWidth <= 912:
			return 90 / mazeHeight;
		default:
			return 70 / mazeHeight;
	}
};
