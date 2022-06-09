import React from 'react';
import "./EmptyMsg.scss";
import Button from '../../components/Button';
import { GiShoppingCart } from "react-icons/gi";
import { ImBookmark } from "react-icons/im";

const EmptyMsg = ({ btnText, checkType, url, text }) => {
    return (
        <div className="empty-msg">
            {checkType === "Cart" ? (
                <GiShoppingCart className="empty-msg__icon" />
            ) : (
                <ImBookmark className="empty-msg__icon" />
            )}
            <h2 className="empty-msg__text">{text}</h2>
            <Button url={url} text={btnText} />
        </div>
    )
}

export default EmptyMsg;