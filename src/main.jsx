import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {StyledEngineProvider, createTheme, ThemeProvider} from "@mui/material";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {Analytics} from "@vercel/analytics/react";

const theme = createTheme({
	breakpoints: {
		values: {xs: 0, sm: 600, md: 768, lg: 1200, xl: 1536},
	},
});

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<App />
				<Analytics />
			</ThemeProvider>
		</StyledEngineProvider>
	</StrictMode>,
);