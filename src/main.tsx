  import ReactDOM from "react-dom/client";
  import { BrowserRouter } from "react-router-dom";
  import App from "./App";
  import Provider from "./provider";
  import "@/styles/globals.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
