import React, {useState} from 'react';
import feedbackImage from '../../../images/Main/Feedback.svg'
import {InputMask} from "primereact/inputmask";

const Feedback = () => {

    const [phoneNumber, setPhoneNumber] = useState(null);

    return (
        <div className="feedback">
            <img src={feedbackImage} alt="Feedback" className="feedback__background-image"/>
            <form className="feedback__feedback-form">
                <h3 className="feedback__title">Find parts for you in few minutes</h3>
                <input type="text" placeholder="Name" className="feedback__input"/>

                <InputMask className="feedback__input"
                    value={phoneNumber}
                    onChange = {(e) => {
                        setPhoneNumber(e.value);
                    }}
                    mask="000(00)"
                    // slotChar="+375(00) 000 00 00"
                />

                <input type="text" className="feedback__feedback-form-phone" className="feedback__input"/>
                <input type="text" placeholder="Brand" className="feedback__input"/>
                <button type="submit" className="feedback__submit">Submit</button>
            </form>
        </div>
    );
};

export default Feedback;