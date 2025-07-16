import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// === Providers ===
import { Provider as ReduxProvider } from "react-redux";

import { Provider as UIProvider } from "../src/components/ui/provider"; // لو ده مثلاً ShadCN UI

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./app/store"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

// === Render App ===
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <UIProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ReduxProvider>
    </UIProvider>
  </React.StrictMode>
);
