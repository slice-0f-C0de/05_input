import React, {useState} from 'react';
import './App.css';
import {UniversalInput} from "./components/UniversalInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ])

    let [title, setTitle] = useState("")

    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([newMessage, ...message])
    }

    const CallbackButtonHandler = () => {
        addMessage(title)
        setTitle("")
    }

    return (
        <div className="App">
            <UniversalInput addMessage={addMessage}/>
            <Input title={title} setTitle={setTitle}/>
            <Button name={"+"} callback={CallbackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
