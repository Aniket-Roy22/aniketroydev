import { useState } from "react";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";

import "../styles/popover.css";

function ProjectPopover()
{
	const [anchorEl, setAnchorEl] = useState(null);
	const isOpen = Boolean(anchorEl);
	
	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);
	
	return (
		<div>
			<Button variant="contained" color="secondary" onClick={handleClick}>
				Click Me!
			</Button>

			<Popover
				className="popover-text"
				open={isOpen}
				onClose={handleClose}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: "centre",
					horizontal: "centre",
				}}
				transformOrigin={{
					vertical: "center",
					horizontal: "center",
				}}
			>
				Hello World
			</Popover>
		</div>
	);
};

export default ProjectPopover;