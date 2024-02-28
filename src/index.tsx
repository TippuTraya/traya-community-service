import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LMChatClient from "@likeminds.community/chat-js";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

console.log('process.env.REACT_APP_API_KEY', process.env.REACT_APP_API_KEY, process.env.REACT_APP_XPLATFORM_CODE, process.env.REACT_APP_XVERSION_CODE);

export const myClient: LMChatClient = LMChatClient.setApiKey(
  process.env.REACT_APP_API_KEY || ""
)
  .setPlatformCode('rt')
  .setVersionCode(parseInt('38'))
  .build();

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
