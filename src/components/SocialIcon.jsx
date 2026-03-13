import "../styles/socials.css";

function SocialIcon({link, svgPath, size})
{
	return (
		<div className="social-link">
			<a href={link}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={`${size}rem`}
					height={`${size}rem`}
					fill="#000000"
					viewBox="0 0 256 256"
				>
					<path d={svgPath}></path>
				</svg>
			</a>
		</div>
	);
}

export default SocialIcon;