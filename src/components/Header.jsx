import { useState } from "react";
import "../styles/header.css"
import {GiHamburgerMenu} from "react-icons/gi";

function Header() {

	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive(!isActive);
	};

	return (
		<div className="wrapper">
			<div className="home">
				<div>Icon</div>
			</div>

			<div className="burger">
				<button onClick={handleClick}>
					<GiHamburgerMenu />
				</button>
			</div>

			<div
				className={["menu", isActive ? "mobile-view" : "web-view"]
					.filter(Boolean)
					.join(" ")}
			>
				<span>About</span>
				<span>Skills</span>
				<span>Projects</span>
				<span>Contact Me</span>
				<button>Download CV</button>
			</div>
		</div>
	);
}

export default Header;
