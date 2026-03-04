import { motion } from "motion/react";

import "../styles/marquee.css";

const imgArray = [
	"./images/java-logo.png",
	"./images/c-logo.png",
	"./images/js-logo.png",
	"./images/postgresql-logo.png",
	"./images/bootstrap-logo.png",
	"./images/node-logo.png",
	"./images/rest-logo.png",
	"./images/react-logo.png"
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
					duration: 20,
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