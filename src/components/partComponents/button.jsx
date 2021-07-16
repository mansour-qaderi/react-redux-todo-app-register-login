import React from 'react';

const Button = (props) => {
    return (
        <div>
            <button onClick={props.buttonHandleClick} className={`btn-text ${props.buttonClass}`} type={props.buttonType}>{props.buttonValue}</button>
        </div>
    )
}

const ButtonForm = (props) => {
    return (
        <div className='form__button u-margin-top-2'>
            <button className={`btn ${props.buttonClass}`} type={props.buttonType}>{props.buttonValue}</button>
        </div>
    )
}

export { ButtonForm, Button };