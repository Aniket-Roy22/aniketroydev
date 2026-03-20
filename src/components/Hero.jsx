import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {motion} from "motion/react";
import {useEffect, useState} from "react";
import MainImage from "./MainImage";
import BackgroundAnimation from "./BackgroundAnimation";
import "../styles/hero.css";

const BREAKPOINT = 768;

function Hero() {
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= BREAKPOINT);
	const layerConfig = isLargeScreen ? [
		{offset: 1.1, speed: 1},
		{offset: 1.2, speed: 3},
		{offset: 1.4, speed: 2},
	] : [
		{offset: 1, speed: 0.5},
		{offset: 1.1, speed: 1},
		{offset: 1.3, speed: 0.8},
	];

	useEffect(() => {
		const handleResize = () => setIsLargeScreen(window.innerWidth >= BREAKPOINT);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<section id="home">
			<BackgroundAnimation className="bg-animation" />
			<div className="main-hero">
				<Parallax className="parallax-container" pages={2}>
					<ParallaxLayer
						sticky={isLargeScreen ? {start: 0, end: 1} : undefined}
					>
						<MainImage />
					</ParallaxLayer>

					<ParallaxLayer
						offset={layerConfig[0].offset}
						speed={layerConfig[0].speed}
					>
						<div className="hero-card-container container-pos1">
							<motion.div className="hero-card intro-greet">
								Hi, I'm
							</motion.div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={layerConfig[1].offset}
						speed={layerConfig[1].speed}
					>
						<div className="hero-card-container container-pos2">
							<motion.div className="hero-card intro-name">
								Aniket Roy
							</motion.div>
						</div>
					</ParallaxLayer>

					<ParallaxLayer
						offset={layerConfig[2].offset}
						speed={layerConfig[2].speed}
					>
						<div className="hero-card-container container-pos3">
							<motion.div className="hero-card intro-desc">
								Full stack developer with a strong focus on
								backend architecture. I design systems that are
								structured and built to last. Clean frontends,
								solid backends, and actively pushing into Web3
								to learn the decentralized stack from the ground
								up.
							</motion.div>
						</div>
					</ParallaxLayer>
				</Parallax>
			</div>
		</section>
	);
}

export default Hero;