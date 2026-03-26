import "../styles/socials.css";

function SocialIcon({link, svgPath, size})
{
	return (
		<a className="social-link" href={link}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={`${size}rem`}
				height={`${size}rem`}
				fill="var(--text-color1)"
				viewBox="0 0 256 256"
			>
				<path d={svgPath}></path>
			</svg>
		</a>
	);
}

export default SocialIcon;