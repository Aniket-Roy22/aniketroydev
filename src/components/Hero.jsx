import MainImage from "./MainImage";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
// import {useSpring, animated} from "@react-spring/web";
import {useScroll, useTransform, motion} from "motion/react";
import {useRef, useEffect, useState} from "react";

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
	const opacity = useTransform(scrollYProgress, [0.3, 0.6], [0.5, 1]);
	const scale = useTransform(scrollYProgress, [0.3, 0.6], [0.8, 1]);

	return (
		<div className="main-hero">
			<Parallax ref={parallaxRef} pages={4}>
				<ParallaxLayer
					sticky={{start: 0, end: 3}}
					offset={0}
					speed={1}
					// factor={1}
				>
					<MainImage />
				</ParallaxLayer>

				<ParallaxLayer
					offset={1}
					speed={1}
					// factor={1}
				>
					<motion.div style={{opacity, scale}}>
						<h1>
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis	convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</h1>
					</motion.div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={2}
					// factor={1}
				>
					<motion.div style={{opacity, scale}}>
						<h1>
							Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis	convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</h1>
					</motion.div>
				</ParallaxLayer>

				<ParallaxLayer
					offset={3}
					speed={3}
					// factor={1}
				>
					<motion.div style={{opacity, scale}}>
						<h1>
						Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis	convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
						</h1>
					</motion.div>
				</ParallaxLayer>
			</Parallax>
		</div>
	);
}

export default Hero;