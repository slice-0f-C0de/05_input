import React from "react";

type ButtonType = {
    name: string
    callback: () => void
}

export const Button = (props: ButtonType) => {

    const OnClickButtonHandler = () => {
        props.callback()
    }

    return <div>
        <button onClick={OnClickButtonHandler}>{props.name}</button>
    </div>
}