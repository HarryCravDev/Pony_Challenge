import MazeElement from "../MazeElement/MazeElement";
import IMazeElement from "../../../types/IMazeElement";

const MazeRow: React.FC<{ walls: IMazeElement[]; mazeElementSize: number }> = ({
	walls,
	mazeElementSize,
}) => {
	return (
		<section className="flex justify-center items-center">
			{walls.map((walls: IMazeElement, index: number) => (
				<MazeElement
					key={index}
					mazeElement={walls}
					mazeElementSize={mazeElementSize}
				/>
			))}
		</section>
	);
};

export default MazeRow;
