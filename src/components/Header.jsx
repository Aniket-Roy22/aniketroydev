import {useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Box, Button, Menu, MenuItem} from "@mui/material";

function Header() {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		<Box
			sx={{
				width: "65vw",
				position: "fixed",
				left: "0",
				right: "0",
				display: "flex",
				padding: "1rem 2rem",
				margin: "2rem auto",
				backgroundColor: "grey",
				borderRadius: "999px",
				zIndex: "999",
			}}
		>
			<Box
				sx={{
					textAlign: "center",
				}}
			>
				Icon
			</Box>

			<Box
				sx={{
					ml: "auto",
					display: "flex",
					alignItems: "center",
					gap: 3,
				}}
			>
				<Box
					sx={{
						display: {xs: "none", md: "flex"},
						gap: 3,
						alignItems: "center",
					}}
				>
					<a href="" className="navigation-link">
						About
					</a>
					<a href="" className="navigation-link">
						Projects
					</a>
					<a href="" className="navigation-link">
						Contact Me
					</a>
					<Button variant="contained">Download CV</Button>
				</Box>

				<Button
					onClick={handleOpen}
					sx={{
						display: {xs: "flex", md: "none"},
						minWidth: "auto",
						fontSize: "20px",
					}}
				>
					<GiHamburgerMenu />
				</Button>
			</Box>

			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>About</MenuItem>
				<MenuItem onClick={handleClose}>Projects</MenuItem>
				<MenuItem onClick={handleClose}>Contact Me</MenuItem>
				<MenuItem onClick={handleClose}>Download CV</MenuItem>
			</Menu>
		</Box>
	);
}

export default Header;
