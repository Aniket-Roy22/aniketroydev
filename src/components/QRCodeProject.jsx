import "../styles/project.css";

const QRCodeGenerator = () => {
	return (
		<div className="project-modal-container">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/qrcode.png"
				alt="QR Code Generator"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">QR Code Generator</h1>

				{/* Tech Stack */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">Node.js</span>
						<span className="display-desc">Express.js</span>
						<span className="display-desc">EJS</span>
						<span className="display-desc">CSS</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					QR Code Generator is a lightweight web application built with Node.js and Express, using EJS as the templating engine to render dynamic server-side views. Enter any URL or text and instantly generate a scannable QR code in the browser. The project is structured cleanly with separate public and views directories for static assets and templates.
				</p>

				{/* Installation */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Usage</h2>

					<p className="project-text">Clone the repository</p>
					<pre className="project-code">
						<code>
							git clone
							https://github.com/Aniket-Roy22/QR-Code-Generator.git
						</code>
					</pre>

					<p className="project-text">
						Navigate into the project directory and install
						dependencies
					</p>
					<pre className="project-code">
						<code>cd QR-Code-Generator && npm install</code>
					</pre>

					<p className="project-text">Start the server</p>
					<pre className="project-code">
						<code>node index.js</code>
					</pre>

					<p className="project-text">
						Open your browser and visit{" "}
						<code className="project-code-inline">
							http://localhost:3000
						</code>
					</p>
				</section>
			</section>
		</div>
	);
};

export default QRCodeGenerator;