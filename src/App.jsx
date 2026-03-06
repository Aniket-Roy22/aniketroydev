import Header from "./components/Header";
import Hero  from "./components/Hero";
import BentoBox from "./components/BentoBox";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectPopover from "./components/ProjectPopover";

import "./App.css";

function App()
{
    return (
		<>
			<Header />
			<Hero />
			<BentoBox />
			<ProjectCarousel />
			<ProjectPopover />
		</>
	);
}

export default App;
