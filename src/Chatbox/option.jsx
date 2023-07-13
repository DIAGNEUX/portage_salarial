import React from "react";
import ActionProvider from "./ActionProvider";
import "./chatbot.css"

const Options = (props) => {
    const options = [
        {
            Text:"Javascript" ,
            handler : props.actionProvider.handleJavascriptQuiz,
            id:1
        },
        {
            Text:"React" ,
            handler : () => {},
            id:2
        },
        {
            Text:"Node js" ,
            handle : () => {} ,
            id:3
        }
    ]

    const buttonMark = options.map((option) => {
        return (
        <button className="option_btn" key={option.id} onClick={option.handler}>
            {option.Text}
        </button>
        )
    })

    return(
        <div className="option_contain">
            {buttonMark}        
        </div>
    )
}

export default Options