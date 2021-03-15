import React from 'react'
import './Titulo.css'

export const Titulo = (props) => {
    return (
        <h2 className="titulo" >{props.children}</h2>
    )
}
