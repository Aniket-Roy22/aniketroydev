import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useScroll, useTransform, motion} from "motion/react";
import {useRef, useEffect, useState} from "react";
import MainImage from "./MainImage";
import TestBox from "./testbox";
import "../styles/hero.css";

const BREAKPOINT = 600; // md breakpoint

function Hero() {
	const parallaxRef = useRef(null);
	const [container, setContainer] = useState(null);
	const [isLargeScreen, setIsLargeScreen] = useState(
		window.innerWidth >= BREAKPOINT,
	);
	const layerConfig = isLargeScreen ? [
		{offset: 1, speed: 1},
		{offset: 1.2, speed: 3},
		{offset: 1.4, speed: 2},
	] : [
		{offset: 1, speed: 0.5},
		{offset: 1.3, speed: 1},
		{offset: 1.6, speed: 0.8},
	];

	useEffect(() => {
		if (parallaxRef.current) {
			setContainer(parallaxRef.current.container);
		}
	}, []);

	useEffect(() => {
		const handleResize = () => setIsLargeScreen(window.innerWidth >= BREAKPOINT);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const {scrollYProgress} = useScroll({container});
	const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);
	const scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

	return (
		<div className="main-hero">
			<Parallax
				className="parallax-container"
				ref={parallaxRef}
				pages={2}
			>
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
						<motion.div
							className="hero-card"
							style={{opacity, scale}}
						>
							<TestBox />
						</motion.div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={layerConfig[1].offset}
					speed={layerConfig[1].speed}
				>
					<div className="hero-card-container container-pos2">
						<motion.div
							className="hero-card"
							style={{opacity, scale}}
						>
							<TestBox />
						</motion.div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={layerConfig[2].offset}
					speed={layerConfig[2].speed}
				>
					<div className="hero-card-container container-pos3">
						<motion.div
							className="hero-card"
							style={{opacity, scale}}
						>
							<TestBox />
						</motion.div>
					</div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default Hero;