import React from "react";

import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import store from "./app/store.ts";
import RealmAppProvider from "./providers/RealmAppProvider.tsx";
import "./globals.css";
import RootProvider from "./providers/root-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RootProvider>
			<Provider store={store}>
				<RealmAppProvider>
					<Toaster />
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</RealmAppProvider>
			</Provider>
		</RootProvider>
	</React.StrictMode>
);
