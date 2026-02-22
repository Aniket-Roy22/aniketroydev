import { motion } from "motion/react";

import "../styles/marquee.css";

const imgArray = [
	"./assets/java-logo.png",
	"./assets/c-logo.png",
	"./assets/js-logo.png",
	"./assets/postgresql-logo.png",
	"./assets/bootstrap-logo.png",
	"./assets/node-logo.png",
	"./assets/rest-logo.png",
	"./assets/react-logo.png"
];

function SkillMarquee()
{
	return (
		<div className="marquee-container">
			<motion.div
				className="group"
				animate={{x: [0, "-50%"]}}
				transition={{
					repeat: Infinity,
					repeatType: "loop",
					duration: 10,
					ease: "linear",
				}}
			>
				{[...imgArray, ...imgArray].map((src, i) => (
					<div key={i} className="slide">
						<img src={src} alt={`Slide${i}`} />
					</div>
				))}
			</motion.div>
		</div>
	);
}

export default SkillMarquee;