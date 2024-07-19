import React from 'react';
import './ButtonStyles.scss';

type ButtonProps = {
    text: string;
    type?: 'submit' | 'button';
    onClick?: () => void;
};
export const Button = ({ text, onClick, type }: ButtonProps) => {
    return (
        <button type={type} onClick={onClick} className="custom-button">
            {text}
        </button>
    );
};
