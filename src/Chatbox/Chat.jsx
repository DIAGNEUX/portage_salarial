import React from "react";
import "./Chat.css"
import Chatbot from "react-chatbot-kit";
import config from "../Chatbox/config";
import MessageParser from "../Chatbox/MessageParser";
import ActionProvider from "../Chatbox/ActionProvider";

function Chat() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default Chat;