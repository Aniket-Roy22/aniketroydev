import {useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TestBox from "./testbox";

import "../styles/modal.css";

export default function BasicModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				variant="contained"
				color="secondary"
				onClick={handleOpen}
			>
				Open modal
			</Button>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className="modal-box">
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Text in a modal
					</Typography>
					<TestBox />
				</Box>
			</Modal>
		</div>
	);
}