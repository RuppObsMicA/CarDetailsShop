import React, {useState} from 'react';
import './ErrorStyles.scss'

type ErrorProps = {
    message:string;
}

export const Error = ({message}:ErrorProps) => {

    const [isVisible, setIsVisible] = useState(true);

    const handleCloseError = () => {
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="custom-error">
            <p>{message}</p>
            <button className="close-btn" onClick={handleCloseError}>Close</button>
        </div>
    );
};