import {useState} from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import "../styles/modal.css";

export default function BasicModal({title, imgSrc, t1, t2, t3, link, children, inDark}) {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="project-slide">
			<div className="project-display" onClick={handleOpen}>
				<h2 className="display-title section-heading">{title ?? "No Title"}</h2>

				<img
					className="display-pic"
					src={imgSrc}
					alt="project picture"
				/>

				<div className="display-desc-container">
					{t1 && <span className="display-desc">{t1}</span>}
					{t2 && <span className="display-desc">{t2}</span>}
					{t3 && <span className="display-desc">{t3}</span>}
				</div>

				<a
					className="display-link"
					onClick={(e) => e.stopPropagation()}
					href={link}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="#ffffff"
						viewBox="0 0 256 256"
					>
						<path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path>
					</svg>
				</a>
			</div>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box className={`modal-box ${inDark ? "learning-modal-box" : ""}`}>
					{children}
				</Box>
			</Modal>
		</div>
	);
}