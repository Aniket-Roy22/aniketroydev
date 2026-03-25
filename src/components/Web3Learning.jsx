import "../styles/project.css";

const CyfrinUpdraft = () => {
	return (
		<div className="project-modal-container learning-modal">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/web3.png"
				alt="Cyfrin Updraft"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">Web3</h1>

				{/* Tracks */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">Web3 Development</span>
						<span className="display-desc">Web3 Security</span>
						<span className="display-desc">Solidity</span>
						<span className="display-desc">Smart Contracts</span>
						<span className="display-desc">Blockchain</span>
						<span className="display-desc">DeFi</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					Working through two tracks on Cyfrin Updraft focused on
					smart contract development and security. The goal is to
					build a strong foundation in on-chain development and learn
					to think about blockchain security the way an auditor does.
				</p>

				{/* Tracks */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">
						Solidity Smart Contract Developer
					</h2>
					<p className="project-text">
						Covers blockchain fundamentals, writing and deploying
						contracts in Solidity, and connecting on-chain logic to
						real applications. The focus is on writing clean,
						well-tested contract code that behaves reliably in
						production.
					</p>
				</section>

				<section className="project-section usage-section">
					<h2 className="project-section-title">
						Smart Contract Security Auditor
					</h2>
					<p className="project-text">
						Covers reading contracts critically, understanding how
						vulnerabilities like reentrancy, integer overflow, and
						access control flaws get exploited, and writing Solidity
						that holds up under adversarial conditions.
					</p>
				</section>

				{/* Platform */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Platform</h2>
					<p className="project-text">
						Available for free at{" "}
						<a
							className="resource-link"
							href="https://updraft.cyfrin.io/"
						>
							<code className="project-code-inline">
								cyfrin.updraft.io
							</code>
						</a>
						.
					</p>
				</section>
			</section>
		</div>
	);
};

export default CyfrinUpdraft;