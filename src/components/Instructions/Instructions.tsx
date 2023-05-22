const Instructions = () => {
	return (
		<>
			<div
				className="card w-full md:w-8/12 bg-base-100 shadow-xl"
				data-theme="valentine"
			>
				<div className="card-body">
					<h2 className="card-title">Create Maze Instructions</h2>
					<h1>
						Choose a difficulty and dimensions for your maze and click CREATE
						MAZE to start the game.
					</h1>
					<h2 className="card-title">Game Play Instructions</h2>
					<h1>
						Your pony, Rarity, is stuck in a maze. Use the arrow keys to direct
						Rarity to the portal so she can escape, but watch out for Domokun!
					</h1>
					<br />
				</div>
			</div>
		</>
	);
};

export default Instructions;
