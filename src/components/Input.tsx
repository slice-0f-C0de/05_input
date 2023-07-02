import React, {ChangeEvent} from "react";

type InputType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputType) => {

    const onClickInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }

    return <div>
        <input value={props.title} onChange={onClickInputHandler}/>
    </div>
}