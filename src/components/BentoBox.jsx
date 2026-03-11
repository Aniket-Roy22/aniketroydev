import SkillMarquee from "./SkillMarquee";

import "../styles/bentobox.css"

function BentoBox() {
	return (
		<div className="container">
			<div style={{gridArea: "box1"}}>
				<SkillMarquee />
			</div>

			<div style={{gridArea: "box2"}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
				cupiditate placeat commodi voluptas quisquam dicta facere,
				officiis ullam iure voluptate rerum quidem distinctio nisi
				porro. Dolor tenetur illo dolorum dignissimos.
			</div>

			<div style={{gridArea: "box3"}}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
				quae aspernatur ad, inventore reprehenderit ex quis earum maxime
				amet omnis pariatur porro fuga facere modi atque! Cupiditate
				vero quasi ipsum.
			</div>

			<div className="music" style={{gridArea: "box4"}}>
				<span className="music-heading">Currently Listening to...</span>
				<iframe
					className="spotify-widget"
					data-testid="embed-iframe"
					src="https://open.spotify.com/embed/show/1Y9gTi9bBYEJya1Z8Wo2ME?utm_source=generator"
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe>
			</div>

			<div style={{gridArea: "box5"}}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Perferendis optio, voluptates repudiandae minus quaerat
				temporibus recusandae repellendus, eos ipsam accusamus sint
				dolores pariatur possimus ducimus neque tempore qui facere natus
				debitis iste, consequatur corporis! Rerum minus minima
				voluptatem corporis recusandae, odit suscipit ipsam fugiat quo
				quasi iusto, maiores facilis soluta.
			</div>
		</div>
	);
}

export default BentoBox;