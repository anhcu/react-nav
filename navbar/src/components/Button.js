import React from 'react'
import './Button.css'

const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children, 
    type, 
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtoneStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    const checkButtoneSize = SIZES.includes(buttonSize) ? buttonSize : STYLES[0]

    return(
        <button className={`btn ${checkButtoneStyle} ${checkButtoneSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}