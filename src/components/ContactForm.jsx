import {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

import "../styles/contactform.css";

function ContactForm()
{
	const form = useRef();
	const [isExpanded, setExpanded] = useState(false);
	const [newMesssage, setNewMessage] = useState({
		user_name: "",
		user_email: "",
		message: ""
	});

	const handleChange = (e) => {
		const {name, value} = e.target;
		
		setNewMessage((prev) => ({
			...prev,
			[name]: value
		}));
	};
	
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				form.current,
				{publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY},
			)
			.then(
				() => {
					console.log("SUCCESS!");

					// reset form state
					setNewMessage({
						user_name: "",
						user_email: "",
						message: "",
					});

					// remove focus from input
					document.activeElement.blur();
				},
				(error) => {
					console.log("FAILED...", error.text);
				},
			);
	};

	const handleExpansionOnFocus = () => {setExpanded(true)};
	const handleExpansionOnBlur = () => {setExpanded(false)};

	return (
		<form ref={form} onSubmit={sendEmail} className="contact-form">
			<div
				className={`form-field ${newMesssage.user_name ? "filled" : ""}`}
			>
				<input
					type="text"
					name="user_name"
					value={newMesssage.user_name}
					onChange={handleChange}
					required
				/>
				<label>Name</label>
			</div>

			<div
				className={`form-field ${newMesssage.user_email ? "filled" : ""}`}
			>
				<input
					type="email"
					name="user_email"
					value={newMesssage.user_email}
					onChange={handleChange}
					required
				/>
				<label>Email</label>
			</div>

			<div
				className={`form-field ${newMesssage.message ? "filled" : ""}`}
			>
				<textarea
					name="message"
					value={newMesssage.message}
					onChange={handleChange}
					onFocus={handleExpansionOnFocus}
					onBlur={handleExpansionOnBlur}
					rows={isExpanded? "3" : "1"}
					required
				/>
				<label>Message</label>
			</div>

			<button type="submit">Send</button>
		</form>
	);
};

export default ContactForm;