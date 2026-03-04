import {useState, useRef} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "../styles/carousel.css";

const images = [
	"https://picsum.photos/id/1015/800/500",
	"https://picsum.photos/id/1016/800/500",
	"https://picsum.photos/id/1018/800/500",
];

const variants = {
	enter: (direction) => ({
		x: direction > 0 ? 300 : -300,
		opacity: 0,
	}),
	mount: {
		x: 0,
		opacity: 1,
	},
	exit: (direction) => ({
		x: direction < 0 ? 300 : -300,
		opacity: 0,
	}),
};

const swipeConfidenceThreshold = 3000;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Carousel() {
	const [[page, direction], setPage] = useState([0, 0]);
	const containerRef = useRef(null);

	const imageIndex = ((page % images.length) + images.length) % images.length;

	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<div className="carousel">
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={images[imageIndex]}
					ref={containerRef}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="mount"
					exit="exit"
					transition={{duration: 0.45}}
					drag="x"
					dragConstraints={containerRef}
					dragElastic={1}
					onDragEnd={(e, {offset, velocity}) => {
						const swipe = swipePower(offset.x, velocity.x);

						if (swipe < -swipeConfidenceThreshold) {
							paginate(1);
						} else if (swipe > swipeConfidenceThreshold) {
							paginate(-1);
						}
					}}
					className="carousel-image"
					alt={`Slide ${imageIndex + 1}`}
				/>
			</AnimatePresence>

			<button
				className="carousel-button left"
				onClick={() => paginate(-1)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
				</svg>
			</button>

			<button
				className="carousel-button right"
				onClick={() => paginate(1)}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
				</svg>
			</button>

			<div className="carousel-dots">
				{images.map((_, i) => (
					<button
						key={i}
						className={`carousel-dot ${i === imageIndex ? "active" : ""}`}
						onClick={() => setPage([i, i > imageIndex ? 1 : -1])}
						aria-label={`Go to slide ${i + 1}`}
					/>
				))}
			</div>
		</div>
	);
}