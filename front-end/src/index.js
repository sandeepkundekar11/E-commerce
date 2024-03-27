import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./App.css";
import { store } from "./Redux/Store";
import TosterProvider from "./ToasterProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <TosterProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </TosterProvider>
);
