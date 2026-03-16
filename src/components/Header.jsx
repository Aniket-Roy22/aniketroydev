import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Box, Button, Menu, MenuItem} from "@mui/material";

import "../styles/header.css";

const NAV_LINKS = [
	{label: "About", href: "#about"},
	{label: "Projects", href: "#projects"},
	{label: "Contact Me", href: "#contact"},
];

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<Box
			component="header"
			sx={{
				width: "65vw",
				position: "fixed",
				inset: "0",
				bottom: "auto",
				display: "flex",
				alignItems: "center",
				padding: "1rem 2rem",
				margin: "2rem auto",
				backgroundColor: "grey",
				borderRadius: "999px",
				zIndex: 999,
			}}
		>
			{/* Logo / Icon area */}
			<Box>Icon</Box>

			{/* Desktop navigation */}
			<Box
				sx={{
					ml: "auto",
					display: {xs: "none", md: "flex"},
					alignItems: "center",
					gap: 3,
				}}
			>
				{NAV_LINKS.map(({label, href}) => (
					<a key={label} href={href} className="navigation-link">
						{label}
					</a>
				))}
				<Button className="download-button" variant="contained">Download CV</Button>
			</Box>

			{/* Mobile hamburger button */}
			<Button
				onClick={handleOpen}
				sx={{
					ml: "auto",
					display: {xs: "flex", md: "none"},
					minWidth: "auto",
					fontSize: "20px",
				}}
				aria-label="Open navigation menu"
				className="burger"
			>
				<GiHamburgerMenu />
			</Button>

			{/* Mobile dropdown menu */}
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				{NAV_LINKS.map(({label}) => (
					<MenuItem key={label} onClick={handleClose}>
						{label}
					</MenuItem>
				))}
				<MenuItem onClick={handleClose}>Download CV</MenuItem>
			</Menu>
		</Box>
	);
}

export default Header;