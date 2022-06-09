import React from 'react'
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({url, text}) => {
  return (
    <Link to={`/${url}`} className="btn__primary">{text}</Link>
  )
}

export default Button