import {useState, useRef, Children} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "../styles/carousel.css";

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

const swipeConfidenceThreshold = 200;
const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

export default function Carousel({children}) {
	const [[page, direction], setPage] = useState([0, 0]);
	const containerRef = useRef(null);
	const slides = Children.toArray(children);
	const index = ((page % slides.length) + slides.length) % slides.length;


	const paginate = (newDirection) => {
		setPage([page + newDirection, newDirection]);
	};

	return (
		<section id="projects">
			<div className="carousel-section">
				<h2 className="section-heading">Projects</h2>

				<div className="carousel" ref={containerRef}>
					<AnimatePresence initial={false} custom={direction}>
						<motion.div
							key={page}
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
							className="carousel-slide"
						>
							{slides[index]}
						</motion.div>
					</AnimatePresence>

					<button
						className="carousel-button left"
						onClick={() => paginate(-1)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 256 256"
						>
							<path d="M160 48 L96 128 L160 208" />
						</svg>
					</button>

					<button
						className="carousel-button right"
						onClick={() => paginate(1)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 256 256"
						>
							<path d="M96 48 L176 128 L96 208" />
						</svg>
					</button>

					<div className="carousel-dots">
						{slides.map((_, i) => (
							<button
								key={i}
								className={`carousel-dot ${i === index ? "active" : ""}`}
								onClick={() => setPage([i, i > index ? 1 : -1])}
								aria-label={`Go to slide ${i + 1}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}