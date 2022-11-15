import React, { useState } from 'react'
import './Form.css'

export default function Form(props) {

    const [name, setName] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.setAuthor(name);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <button type='submit'>Change title</button>
        </form>
    )
}
