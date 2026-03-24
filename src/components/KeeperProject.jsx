import "../styles/project.css";

const KeeperApp = () => {
	return (
		<div className="project-modal-container">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/keeper.png"
				alt="Keeper App"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">Keeper</h1>

				{/* Tech Stack */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">React.js</span>
						<span className="display-desc">Node.js</span>
						<span className="display-desc">Express.js</span>
						<span className="display-desc">Prisma ORM</span>
						<span className="display-desc">PostgreSQL</span>
						<span className="display-desc">Axios</span>
						<span className="display-desc">REST API</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					Keeper App is a full stack note-taking application built
					around a client-server architecture. The React frontend
					communicates with a Node and Express REST API through Axios,
					supporting full CRUD operations with a clean and responsive
					interface. Notes are persisted in a PostgreSQL database
					managed through Prisma ORM, which handles schema migrations
					and type-safe queries. The API is structured around REST
					conventions with dedicated endpoints for each operation,
					keeping the codebase organized and easy to extend.
				</p>

				{/* Usage */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Usage</h2>

					<p className="project-text">Clone the repository</p>
					<pre className="project-code">
						<code>
							git clone https://github.com/Aniket-Roy22/Keeper.git
						</code>
					</pre>

					<p className="project-text">Install dependencies</p>
					<pre className="project-code">
						<code>cd Keeper && npm install</code>
					</pre>

					<p className="project-text">
						Set up your environment variables. Create a{" "}
						<code className="project-code-inline">.env</code> file
						in the root directory
					</p>
					<pre className="project-code">
						<code>
							DATABASE_URL="postgresql://user:password@localhost:5432/keeperdb"
						</code>
					</pre>

					<p className="project-text">Run Prisma migrations</p>
					<pre className="project-code">
						<code>npx prisma migrate dev</code>
					</pre>

					<p className="project-text">Start the server</p>
					<pre className="project-code">
						<code>cd server && npm run server</code>
					</pre>

					<p className="project-text">Start the client</p>
					<pre className="project-code">
						<code>cd src && npm run dev</code>
					</pre>
				</section>
			</section>
		</div>
	);
};

export default KeeperApp;