import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Dismiss the index.html splash the moment React has painted its first frame.
// No artificial delays: double-rAF waits exactly one rendered frame, then the
// CSS transition fades the splash out and the node is removed from the DOM.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const splash = document.getElementById("splash");
    if (!splash) return;
    splash.classList.add("splash--done");
    splash.addEventListener("transitionend", () => splash.remove(), { once: true });
    // Fallback removal in case transitionend never fires (e.g. reduced motion)
    setTimeout(() => splash.remove(), 700);
  });
});
