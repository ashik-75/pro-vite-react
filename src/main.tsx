import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./app/store.ts";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<CookiesProvider>
			<Provider store={store}>
				<Toaster />
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</CookiesProvider>
	</React.StrictMode>
);
