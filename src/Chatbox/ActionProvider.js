import React from "react";
import Options from "./option";
import config from "./config";
class ActionProvider {
  constructor(createChatBotMessage, setState) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setState;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello too");
    this.addChatbotMessageToState(message);
    
  };
  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(" fantastique mashallah chapala " , {
      widget : "javascriptQuiz",
    }) ;
    this.addChatbotMessageToState(message)
  }

  insult = () => {
    const reponse = this.createChatBotMessage("Nique ta mére");
    this.addChatbotMessageToState(reponse);
  };

  // addMessageToState =(message) =>{
  //   this.setState((prevState) => ({
  //     ...prevState,
  //     messages: [...prevState.messages, message],
  //   }))

  // }
  addChatbotMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}


export default ActionProvider;
