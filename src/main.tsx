import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CustomThemeProvider, StoreProvider } from "./providers";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <StrictMode>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </StrictMode>
  </StoreProvider>
);
