import React, { useState } from 'react';
import "./Accordion.scss";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { questionData } from '../../data/questions';

const Accordion = () => {

    const [isClicked, setIsClicked] = useState(false);

    const toggle = index => {
        if (isClicked === index) {
            return setIsClicked(null);
        }

        setIsClicked(index);
    }

    return (
        <div className="accordion">
            <div className="accordion__container">
                {questionData.map((item) => (
                    <React.Fragment key={item.id}>
                        <div onClick={() => toggle(item.id)} className="accordion__title-box">
                            <h1>{item.question}</h1>
                            <span>{isClicked === item.id ? <FiMinus className="accordion__icon" /> : <FiPlus className="accordion__icon" />}</span>
                        </div>
                        {isClicked === item.id && (
                            <div className="accordion__content-box">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Accordion;