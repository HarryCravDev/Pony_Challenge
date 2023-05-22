import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { PonyProvider } from "./context/Pony/PonyContext";
import MazeGamePage from "./pages/MazeGamePage";

function App() {
	return (
		<>
			<PonyProvider>
				<Navbar />
				<MazeGamePage />
			</PonyProvider>
		</>
	);
}

export default App;
