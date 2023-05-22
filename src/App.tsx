import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DNF from "./components/dutches-national-flag/DNF";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="w-full h-screen flex items-center justify-center bg-[#262624]">
			<DNF />
		</div>
	);
}

export default App;
