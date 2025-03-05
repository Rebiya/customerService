import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "swiper/swiper-bundle.css";
import "simplebar-react/dist/simplebar.min.css";
import App from "./App.tsx";
import { AppWrapper } from "./components/common/PageMeta.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { MantineProvider } from "@mantine/core";
import AOS from "aos";
import "aos/dist/aos.css";
import "@mantine/core/styles.css"; // Import Mantine's global styles

// Initialize AOS once when the app loads
AOS.init();

// Ensure the root element exists
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <MantineProvider>
        <ThemeProvider>
          <AppWrapper>
            <App />
          </AppWrapper>
        </ThemeProvider>
      </MantineProvider>
    </StrictMode>
  );
} else {
  console.error(
    "Root element not found. Ensure your HTML file has a div with id 'root'."
  );
}
