import Header from "./components/Header";
import Hero  from "./components/Hero";
import BentoBox from "./components/BentoBox";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectModal from "./components/ProjectModal";
import ContactForm from "./components/ContactForm";

import "./App.css";

function App()
{
    return (
		<>
			<Header />
			<Hero />
			<BentoBox />
			<ProjectCarousel>
				<ProjectModal />
				<ProjectModal />
				<ProjectModal />
			</ProjectCarousel>
			<ContactForm />
		</>
	);
}

export default App;
