import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {StyledEngineProvider} from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<App />
		</StyledEngineProvider>
	</StrictMode>,
);
