import React from 'react';
import { FieldErrors } from 'react-hook-form';

import './InputStyles.scss';

type InputProps = {
    type: string;
    label: string;
    name: string;
    placeholder: string;
    register: any; // fix the any type
    validation: object;
    errors: FieldErrors;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
    type,
    label,
    name,
    placeholder,
    register,
    validation,
    errors,
    value,
    onChange,
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
                value={value}
                className="custom-input"
                onChange={onChange}
            />
            {errorMessage && <p className="error">{errorMessage}</p>}
        </>
    );
};
