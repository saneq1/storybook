import React from 'react';

 import css from './button.module.scss'


export interface interfaceProps {
    children?: React.ReactNode,
    onClick?: (e: React.MouseEvent) => void,
    className?: string
}

const Button = ({children, onClick, className}:interfaceProps) => {
    return <button
              className={`${css.button} ${className}`}
            onClick={onClick}>
        <span>{children ?? "Button"}</span>
    </button>
};

export default Button;
