import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoBox from "./components/BentoBox";
import ProjectCarousel from "./components/ProjectCarousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	useEffect(() => {
		const root = document.getElementById("root");
		const instance = OverlayScrollbars(root, {
			scrollbars: {
				theme: "os-theme-custom",
				autoHide: "scroll",
			},
		});

		return () => {
			instance.destroy();
		};
	}, []);

	return (
		<>
			<Header />
			<Hero />
			<BentoBox />
			<ProjectCarousel />
			<ContactForm />
			<Footer />
		</>
	);
}

export default App;