import SkillMarquee from "./SkillMarquee";

import "../styles/bentobox.css"

function BentoBox() {
	return (
		<div className="container">
			<div style={{gridArea: "box1"}}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Laboriosam voluptatum officia fuga reiciendis rerum voluptatem
				aspernatur nesciunt adipisci hic, eaque accusamus illo
				perferendis voluptates quod nobis fugiat quos nulla dolore
				obcaecati? Blanditiis dolores consequuntur architecto harum sit
				aspernatur aut eius doloribus, delectus cupiditate. A ipsam sed
				blanditiis molestiae, magnam provident.
			</div>

			<div style={{gridArea: "box2"}}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Perferendis optio, voluptates repudiandae minus quaerat
				temporibus recusandae repellendus, eos ipsam accusamus sint
				dolores pariatur possimus ducimus neque tempore qui facere natus
				debitis iste, consequatur corporis! Rerum minus minima
				voluptatem corporis recusandae, odit suscipit ipsam fugiat quo
				quasi iusto, maiores facilis soluta.
			</div>

			<div style={{gridArea: "box3"}}>
				<SkillMarquee />
			</div>

			<div style={{gridArea: "box4"}}>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				Perferendis optio, voluptates repudiandae minus quaerat
				temporibus recusandae repellendus, eos ipsam accusamus sint
				dolores pariatur possimus ducimus neque tempore qui facere natus
				debitis iste, consequatur corporis! Rerum minus minima
				voluptatem corporis recusandae, odit suscipit ipsam fugiat quo
				quasi iusto, maiores facilis soluta.
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