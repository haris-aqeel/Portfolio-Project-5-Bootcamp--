import React from 'react'

const Button = (props) => {
    return (
        <div className='button__maindiv'>
            <a className='button_class__link' href={props.link}>{props.text}</a>
        </div>
    )
}

export default Button
