import "../styles/project.css";

const JarvisClone = () => {
	return (
		<div className="keeper-project">
			{/* Hero Image */}
			<img
				className="project-hero-img"
				src="./images/test.jpg"
				alt="Jarvis Clone"
			/>

			<section className="project-body-area">
				{/* Heading */}
				<h1 className="project-heading">Jarvis Clone</h1>

				{/* Tech Stack */}
				<section className="project-section">
					<div className="project-tags">
						<span className="display-desc">Python</span>
						<span className="display-desc">
							DeepSeek R1 Distill Llama 70B
						</span>
						<span className="display-desc">Houndify</span>
						<span className="display-desc">Voice Recognition</span>
						<span className="display-desc">TTS</span>
					</div>
				</section>

				{/* Intro */}
				<p className="project-intro">
					Jarvis Clone is an AI-powered voice assistant inspired by
					the iconic Jarvis from Iron Man. Built entirely in Python,
					it listens for a custom wake word, processes voice commands,
					and responds intelligently using the DeepSeek R1 Distill
					Llama 70B model. It can open any link on command, answer
					questions conversationally, and is designed to be easily
					extended with new functionality.
				</p>

				{/* Usage */}
				<section className="project-section usage-section">
					<h2 className="project-section-title">Usage</h2>

					<p className="project-text">Clone the repository</p>
					<pre className="project-code">
						<code>
							git clone
							https://github.com/Aniket-Roy22/Jarvis-Clone.git
						</code>
					</pre>

					<p className="project-text">
						Install the required dependencies
					</p>
					<pre className="project-code">
						<code>pip install -r requirements.txt</code>
					</pre>

					<p className="project-text">
						Create a{" "}
						<code className="project-code-inline">.env</code> file
						in the root directory and declare the following
						variables
					</p>
					<pre className="project-code">
						<code>
							{`houndify-client-id=your_houndify_client_id
houndify-client-key=your_houndify_client_key
deepseek-client-key=your_deepseek_r1_distill_llama_70b_api_key
wake-word=your_wake-word
termination-phrase=your-termination_phrase`}
						</code>
					</pre>

					<p className="project-text">
						Edit{" "}
						<code className="project-code-inline">library.py</code>{" "}
						to customize your assistant's behavior and commands
					</p>

					<p className="project-text">Run the assistant</p>
					<pre className="project-code">
						<code>python main.py</code>
					</pre>
				</section>
			</section>
		</div>
	);
};

export default JarvisClone;