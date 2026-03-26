import Carousel from "./Carousel";
import ProjectModal from "./ProjectModal";
import KeeperApp from "./KeeperProject";
import JarvisClone from "./JarvisProject";
import QRCodeGenerator from "./QRCodeProject";
import FamilyTravelTracker from "./TravelTrackerProject";
import "../styles/carousel.css";

export default function ProjectCarousel() {
	return (
		<section id="projects">
			<div className="carousel-section">
				<h2 className="section-heading">Projects</h2>

				<Carousel>
					<ProjectModal
						title="Keeper"
						imgSrc="./images/keeper.png"
						t1="Full Stack"
						t2="REST API"
						t3="React"
						link="https://github.com/Aniket-Roy22/Keeper"
						inDark={false}
					>
						<KeeperApp />
					</ProjectModal>

					<ProjectModal
						title="Travel Tracker"
						imgSrc="./images/familytraveltracker.png"
						t1="Full Stack"
						t2="REST API"
						t3="RDBMS"
						link="https://github.com/Aniket-Roy22/Family_Travel_Tracker"
						inDark={false}
					>
						<FamilyTravelTracker />
					</ProjectModal>

					<ProjectModal
						title="Jarvis"
						imgSrc="./images/jarvisclone.png"
						t1="AI"
						t2="Voice Assistant"
						t3="Voice Recognition"
						link="https://github.com/Aniket-Roy22/Jarvis-Clone"
						inDark={false}
					>
						<JarvisClone />
					</ProjectModal>

					<ProjectModal
						title="QR Generator"
						imgSrc="./images/qrcode.png"
						t1="QR Code"
						t2="Backend"
						link="https://github.com/Aniket-Roy22/QR-Code-Generator"
						inDark={false}
					>
						<QRCodeGenerator />
					</ProjectModal>
				</Carousel>
			</div>
		</section>
	);
}