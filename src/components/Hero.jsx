import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {useScroll, useTransform, motion} from "motion/react";
import {useRef, useEffect, useState} from "react";

import MainImage from "./MainImage";
import TestBox from "./testbox";
import "../styles/hero.css";

function Hero()
{
	const parallaxRef = useRef(null);
	const [container, setContainer] = useState(null);

	useEffect(() => {
		if (parallaxRef.current) {
			setContainer(parallaxRef.current.container);
		}
	}, []);

	const {scrollYProgress} = useScroll({ container });
	const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0.5, 1]);
	const scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

	return (
		<div className="main-hero">
			<Parallax className="parallax-container" ref={parallaxRef} pages={2}>
				<ParallaxLayer sticky={{start: 0, end: 1}}>
					<MainImage />
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1}>
					<div className="hero-card-container container-pos1">
						<motion.div
							className="hero-card"
							style={{opacity, scale}}
						>
							<TestBox />
						</motion.div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1.2} speed={3}>
					<div className="hero-card-container container-pos2">
						<motion.div
							className="hero-card"
							style={{opacity, scale}}
						>
							<TestBox />
						</motion.div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1.4} speed={2}>
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