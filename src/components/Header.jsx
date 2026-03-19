import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Box, Button, Menu, MenuItem} from "@mui/material";

import "../styles/header.css";

const NAV_LINKS = [
	{label: "Home", href: "#home"},
	{label: "About", href: "#about"},
	{label: "Projects", href: "#projects"},
	{label: "Contact Me", href: "#contact"},
];

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleOpen = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	const handleNavClick = (e, href) => {
		e.preventDefault();
		const target = document.querySelector(href);
		if (target) target.scrollIntoView({behavior: "smooth"});
	};

	return (
		<Box className="navbar" component="header">
			<Box className="navbar-icon">Icon</Box>

			<Box className="navbar-desktop">
				{NAV_LINKS.map(({label, href}) => (
					<a
						key={label}
						href={href}
						className="navigation-link"
						onClick={(e) => handleNavClick(e, href)}
					>
						{label}
					</a>
				))}
				<Button className="download-button" variant="contained">
					Download CV
				</Button>
			</Box>

			<Button
				onClick={handleOpen}
				aria-label="Open navigation menu"
				className="burger"
			>
				<GiHamburgerMenu />
			</Button>

			{/* Mobile dropdown menu */}
			<Menu
				slotProps={{
					paper: {
						className: "mobile-menu",
					},
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{NAV_LINKS.map(({label, href}) => (
					<MenuItem
						key={label}
						onClick={(e) => {
							handleNavClick(e, href);
							handleClose();
						}}
					>
						<a href={href} className="navigation-link">
							{label}
						</a>
					</MenuItem>
				))}
				<a className="navigation-link" href="">
					<MenuItem
						className="mobile-menu-item mobile-cv"
						onClick={handleClose}
					>
						Download CV
					</MenuItem>
				</a>
			</Menu>
		</Box>
	);
}

export default Header;