import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import Options from "./option";
import Quiz from "./Quiz";

const config = {
    botName : "assistance" ,
    initialMessages: [createChatBotMessage(`Bonjour Comment puis-je vous aidez` , {
        widget : "options"
    })] ,
    state: {
        reponses: [],
    },
    widgets: [
        {
          widgetName: 'options',
          widgetFunc: (props) => <Options {...props} />,
        },
        {
            widgetName: 'JavascriptQuiz',
            widgetFunc: (props) => <Quiz {...props} />,   
        }
    ]
 
}

export default config


