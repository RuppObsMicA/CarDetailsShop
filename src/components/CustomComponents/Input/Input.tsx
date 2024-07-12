import React from 'react';
import { FieldErrors } from 'react-hook-form';
import './InputStyles.scss';

type InputProps = {
    type: string;
    label: string;
    name: string;
    placeholder: string;
    register: any;
    validation: object;
    errors: FieldErrors;
};

export const Input = ({
    type,
    label,
    name,
    placeholder,
    register,
    validation,
    errors,
}: InputProps) => {
    const errorMessage = errors[name]?.message as string | undefined;

    return (
        <>
            <label htmlFor={name} className="custom-label">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
                id={name}
                className="custom-input"
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
        </>
    );
};
