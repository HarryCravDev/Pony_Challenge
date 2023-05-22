import GameControls from "../../GameControls/GameControls";
import "./SideNavBar.css";

const SideNavBar = () => {
	return (
		<>
			<div className="dropdown block md:hidden">
				<label tabIndex={0} className="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</label>
				<ul
					tabIndex={0}
					className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box py-3 px-2"
				>
					<GameControls sideNav={true} />
				</ul>
			</div>
			<h1 className="md:hidden">Pony Maze</h1>
			<span className="md:hidden p-5"></span>
		</>
	);
};

export default SideNavBar;
