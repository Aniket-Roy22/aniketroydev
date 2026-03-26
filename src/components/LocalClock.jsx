import { useState, useEffect } from "react";

import "../styles/clock.css";

const CITY = "Kolkata";
const TIMEZONE = "Asia/Kolkata";
const UTC_OFFSET = "GMT+5:30";
const TZ_ABBR = "IST";

const WORK_START = 9;
const WORK_END = 23;

function LocalClock()
{
	const [now, setNow] = useState(new Date());
	useEffect(() => {
		const intervalID = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(intervalID);
	}, []);

	const timeStr = now.toLocaleTimeString("en-IN", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
		timeZone: TIMEZONE,
	});

	const dateStr = now.toLocaleDateString("en-IN", {
		weekday: "long",
		month: "short",
		day: "numeric",
		year: "numeric",
		timeZone: TIMEZONE,
	}).toLocaleUpperCase("en-IN");

	const localHour = parseInt(
		now.toLocaleTimeString("en-IN", {
			hour: "2-digit",
			hour12: false,
			timeZone: TIMEZONE,
		}),
		10,
	);

	const isAvailable = localHour >= WORK_START && localHour < WORK_END;

	return (
		<div className="clock-container">
			{/* Header label */}
			<div className="clock-heading-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="icon"
					viewBox="0 0 256 256"
				>
					<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
				</svg>
				<span className="clock-heading">Local Time</span>
			</div>

			{/* Big clock */}
			<div className="clock-time">{timeStr}</div>

			{/* Date */}
			<div className="clock-date">{dateStr}</div>

			<div className="datetime-divider" />

			{/* Location row */}
			<div className="location">
				<div className="clock-heading-container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="icon"
						viewBox="0 0 256 256"
					>
						<path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
					</svg>
					<span>{CITY}</span>
				</div>
				<span className="timezone">
					{TZ_ABBR} · {UTC_OFFSET}
				</span>
			</div>

			{/* Availability dot */}
			<div className="available-container">
				<span
					className={`availability-dot ${isAvailable ? "yes-available" : "not-available"}`}
				/>
				<span>{isAvailable ? "Available" : "Probably Asleep"}</span>

				{isAvailable && (
					<span
						className="contact-redirect"
						onClick={(e) => {
							e.preventDefault();
							document
								.getElementById("contact")
								.scrollIntoView({behavior: "smooth"});
						}}
					>
						Contact Me{" "}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="icon redirect-icon"
							viewBox="0 0 256 256"
						>
							<path d="M48,80v96a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0Zm189.66,42.34-96-96A8,8,0,0,0,128,32V72H72a8,8,0,0,0-8,8v96a8,8,0,0,0,8,8h56v40a8,8,0,0,0,13.66,5.66l96-96A8,8,0,0,0,237.66,122.34Z"></path>
						</svg>
					</span>
				)}
			</div>
		</div>
	);
}

export default LocalClock;