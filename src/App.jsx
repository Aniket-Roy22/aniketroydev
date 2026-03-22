import {useEffect} from "react";
import {OverlayScrollbars} from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BentoBox from "./components/BentoBox";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectModal from "./components/ProjectModal";
import KeeperApp from "./components/KeeperProject";
import JarvisClone from "./components/JarvisProject";
import QRCodeGenerator from "./components/QRCodeProject";
import FamilyTravelTracker from "./components/TravelTrackerProject";
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
			<ProjectCarousel>
				<ProjectModal
					title="Keeper"
					imgSrc="./images/test.jpg"
					t1="Full Stack"
					t2="REST API"
					t3="React"
					gitLink="https://github.com/Aniket-Roy22/Keeper"
				>
					<KeeperApp />
				</ProjectModal>

				<ProjectModal
					title="Travel Tracker"
					imgSrc="./images/test.jpg"
					t1="Full Stack"
					t2="REST API"
					t3="RDBMS"
					gitLink="https://github.com/Aniket-Roy22/Family_Travel_Tracker"
				>
					<FamilyTravelTracker />
				</ProjectModal>

				<ProjectModal
					title="Jarvis"
					imgSrc="./images/test.jpg"
					t1="AI"
					t2="Voice Assistant"
					t3="Voice Recognition"
					gitLink="https://github.com/Aniket-Roy22/Jarvis-Clone"
				>
					<JarvisClone />
				</ProjectModal>

				<ProjectModal
					title="QR Generator"
					imgSrc="./images/test.jpg"
					t1="QR Code"
					t2="Backend"
					gitLink="https://github.com/Aniket-Roy22/QR-Code-Generator"
				>
					<QRCodeGenerator />
				</ProjectModal>
			</ProjectCarousel>
			<ContactForm />
			<Footer />
		</>
	);
}

export default App;