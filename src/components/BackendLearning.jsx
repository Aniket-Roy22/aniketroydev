import "../styles/project.css";

const BackendFromFirstPrinciples = () => {
	return (
		<div className="project-modal-container learning-modal">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/backend.png"
				alt="Backend from First Principles"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">Backend Principles</h1>

				{/* Tags */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">Request Lifecycle</span>
						<span className="display-desc">APIs</span>
						<span className="display-desc">Databases</span>
						<span className="display-desc">Reliability</span>
						<span className="display-desc">Scaling</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					A first-principles walkthrough of backend systems, focusing
					on how requests move through a system and how real-world
					services are structured.
				</p>

				{/* What it covers */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">What You Learn</h2>
					<p className="project-text">
						How HTTP requests are handled end-to-end, including
						routing, middleware, validation, and authentication.
						Core API design, data modeling, and working with
						databases. Practical system concerns like caching,
						background jobs, and observability, followed by
						fundamentals of scaling and performance.
					</p>
				</section>

				{/* Platform */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Platform</h2>
					<p className="project-text">
						Available as a free playlist on{" "}
						<a
							className="resource-link"
							href="https://youtube.com/playlist?list=PLui3EUkuMTPgZcV0QhQrOcwMPcBCcd_Q1&si=K-oPMKZA1qZeR0Lh"
						>
							<code className="project-code-inline">YouTube</code>
						</a>
						.
					</p>
				</section>
			</section>
		</div>
	);
};

export default BackendFromFirstPrinciples;