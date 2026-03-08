import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TestBox from "./testbox";

import "../styles/modal.css";

export default function BasicModal() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="project-slide">
			<div
				className="project-display"
				onClick={handleOpen}
			>
				<h1 className="display-title">Project Title</h1>
				<img
					className="display-pic"
					src="./images/test.jpg"
					alt="project picture"
				/>
				<span className="display-desc">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nobis soluta nisi fugit! Recusandae commodi porro perferendis facilis voluptatem iure vero autem, doloribus odit nobis? Mollitia atque aut esse ipsam.
				</span>
				<a
					className="display-link"
					onClick={(e) => e.stopPropagation()}
					href="https://www.instagram.com"
				>
					<button>Click Me!</button>
				</a>
			</div>

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