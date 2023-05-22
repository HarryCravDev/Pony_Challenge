import SideNavBar from "./SideNavBar/SideNavBar";
import GameControls from "../GameControls/GameControls";

const Navbar = () => {
	return (
		<div className="navbar bg-base-100 p-4">
			<div className="navbar-start w-full justify-between">
				<SideNavBar />
			</div>
			<div className="navbar-center w-full  hidden md:flex md:visible md:justify-center md:gap-6">
				<GameControls sideNav={false} />
			</div>
		</div>
	);
};

export default Navbar;
