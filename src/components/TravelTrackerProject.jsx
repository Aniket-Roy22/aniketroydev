import "../styles/project.css";

const FamilyTravelTracker = () => {
	return (
		<div className="keeper-project">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/test.jpg"
				alt="Family Travel Tracker"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">Family Travel Tracker</h1>

				{/* Tech Stack */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">Node.js</span>
						<span className="display-desc">Express.js</span>
						<span className="display-desc">EJS</span>
						<span className="display-desc">PostgreSQL</span>
						<span className="display-desc">CSS</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					Family Travel Tracker is a web application that lets
					multiple family members track the countries they have
					visited. Each member has their own profile with a unique
					color, and their visited countries are highlighted on a
					world map. Built with Node.js and Express, EJS for
					server-side templating, and PostgreSQL accessed directly
					through the pg client for storing user and travel data.
				</p>

				{/* Installation */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Usage</h2>

					<p className="project-text">Clone the repository</p>
					<pre className="project-code">
						<code>
							git clone
							https://github.com/Aniket-Roy22/Family_Travel_Tracker.git
						</code>
					</pre>

					<p className="project-text">
						Navigate into the project directory and install
						dependencies
					</p>
					<pre className="project-code">
						<code>cd Family_Travel_Tracker && npm install</code>
					</pre>

					<p className="project-text">
						Create a{" "}
						<code className="project-code-inline">.env</code> file
						in the root directory and add your PostgreSQL
						credentials
					</p>
					<pre className="project-code">
						<code>{`DB_USER=your_postgres_user
DB_HOST=localhost
DB_NAME=travel_tracker
DB_PASSWORD=your_password
DB_PORT=5432`}</code>
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

					<h2 className="project-section-title">Schema</h2>
					<p className="project-text">
						The database is built around two tables with a
						one-to-many relationship. The{" "}
						<code className="project-code-inline">users</code> table
						is the parent — each row represents a family member and
						stores their{" "}
						<code className="project-code-inline">name</code> and a{" "}
						<code className="project-code-inline">color</code> used
						to distinguish them on the map. The{" "}
						<code className="project-code-inline">
							visited_countries
						</code>{" "}
						table is the child — each row stores a{" "}
						<code className="project-code-inline">
							country_code
						</code>{" "}
						and a{" "}
						<code className="project-code-inline">user_id</code>{" "}
						foreign key that ties it back to a specific member in{" "}
						<code className="project-code-inline">users</code>. One
						user can have many visited countries, but each country
						entry belongs to exactly one user.
					</p>
				</section>
			</section>
		</div>
	);
};

export default FamilyTravelTracker;