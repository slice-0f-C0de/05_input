import React, {ChangeEvent, useState} from "react";

type InputType = {
    addMessage: (title: string) => void
}

export const UniversalInput = (props: InputType) => {

    let [title, setTitle] = useState("")

    const onClickInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")
    }

    return <div>
        <input value={title} onChange={onClickInputHandler}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>
}