import "../styles/hero.css";

// import
// { 
// 	motion, 
// 	useScroll, 
// 	useTransform,
// 	useMotionTemplate 
// } from "motion/react";

// let SECTION_HEIGHT = 1500;

function MainImage()
{
	// const { scrollY } = useScroll();

	// const opacity = useTransform(
	// 	scrollY,
	// 	[SECTION_HEIGHT, SECTION_HEIGHT + 500],
	// 	[1, 0]
	// );

	// const backgroundSize = useTransform(
	// 	scrollY,
	// 	[0, SECTION_HEIGHT + 500],
	// 	["80%", "100%"],
	// );

	// const clipArea = useTransform(
	// scrollY,
	// 	[0, SECTION_HEIGHT],
	// 	["25%", "100%"]
	// );
	// const clipPath = useMotionTemplate`circle(${clipArea} at 55% 45%)`;

	return (
		<div
			className="main-img-pos main-img-bg"
			// style={{
			// 	opacity,
			// 	backgroundSize,
			// 	clipPath
			// }}
		/>
	);
}

export default MainImage;