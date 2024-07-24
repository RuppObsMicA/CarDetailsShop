import React from 'react';
import './ButtonStyles.scss';

type ButtonProps<T = void> = {
    text: string;
    type?: 'submit' | 'button';
    onClick?: (args?: T) => void;
};

export const Button = <T,>({ text, onClick, type }: ButtonProps<T>) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

    return (
        <button type={type} onClick={handleClick} className="custom-button">
            {text}
        </button>
    );
};
