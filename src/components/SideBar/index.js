import React from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import { ImHome, ImAirplane, ImSpoonKnife, ImMap } from "react-icons/im";

const SideBar = () => {
    return (
        <aside className={`sidebar`}>
            <ul className="menu__list">
                <li className="menu__list--item">
                    <Link to="/" className="menu__list--link">
                        <ImHome className="menu__list--icon" />
                        <span>Home</span>
                    </Link>
                </li>
                <li className="menu__list--item">
                    <Link to="/hotels" className="menu__list--link">
                        <ImSpoonKnife className="menu__list--icon" />
                        <span>Hotels</span>
                    </Link>
                </li>
                <li className="menu__list--item">
                    <Link to="/" className="menu__list--link">
                        <ImAirplane className="menu__list--icon" />
                        <span>Flight</span>
                    </Link>
                </li>
                <li className="menu__list--item">
                    <Link to="/" className="menu__list--link">
                        <ImMap className="menu__list--icon" />
                        <span>Tours</span>
                    </Link>
                </li>
            </ul>
            <div className="legal-box">
                &copy; 2022 by Acm. All rights reserved.
            </div>
        </aside>
    )
}

export default SideBar;