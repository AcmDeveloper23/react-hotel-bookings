import React from "react";
import "./Details.scss";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import Assets from "../../assets";
import { ImStarFull, ImLocation } from "react-icons/im";

const Details = () => {

    const { id } = useParams();
    const { Hotel1, Hotel2, Hotel3, User3, User4, User5, User6 } = Assets;

    return (
        <Layout>
            <div className="details">
                {console.log("Details ID", id)}
                <div className="gallery">
                    <figure className="gallery__item">
                        <img src={Hotel1} alt="Hotel 1" className="gallery__item--img" />
                    </figure>
                    <figure className="gallery__item">
                        <img src={Hotel2} alt="Hotel 2" className="gallery__item--img" />
                    </figure>
                    <figure className="gallery__item">
                        <img src={Hotel3} alt="Hotel 3" className="gallery__item--img" />
                    </figure>
                </div>
                <div className="overview">
                    <div className="overview__heading">
                        <h1 className="overview__heading--text">Hotel las pasmas</h1>
                    </div>

                    <div className="overview__stars">
                        <ImStarFull className="overview__stars--icon" />
                        <ImStarFull className="overview__stars--icon" />
                        <ImStarFull className="overview__stars--icon" />
                        <ImStarFull className="overview__stars--icon" />
                        <ImStarFull className="overview__stars--icon" />
                    </div>

                    <div className="overview__location">
                        <ImLocation className="overview__location--icon" />
                        <button className="overview__location--text">Mumbai, India</button>
                    </div>

                    <div className="overview__rating">
                        <div className="overview__rating--average">9.2</div>
                        <div className="overview__rating--count">520 votes</div>
                    </div>
                </div>

                <div className="content">
                    <div className="content-desc">
                        <p className="content-desc__paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                        </p>
                        <div className="content-desc__list">
                            <li className="content-desc__list--item">
                                Close to the beach
                            </li>
                            <li className="content-desc__list--item">Breakfast included</li>
                            <li className="content-desc__list--item">Free airport shuttle</li>
                            <li className="content-desc__list--item">Free wifi in all rooms</li>
                            <li className="content-desc__list--item">Air conditioning and heating</li>
                            <li className="content-desc__list--item">Pets allowed</li>
                            <li className="content-desc__list--item">We speak all languages</li>
                            <li className="content-desc__list--item">Perfect for families</li>
                        </div>
                        <div className="content-recommend">
                            <p className="content-recommend__count">
                                Lucy and 3 other friends recommend this hotel.
                            </p>
                            <div className="content-recommend__friends">
                                <img src={User3} alt="Friend 1" className="content-recommend__friends--photo" />
                                <img src={User4} alt="Friend 2" className="content-recommend__friends--photo" />
                                <img src={User5} alt="Friend 3" className="content-recommend__friends--photo" />
                                <img src={User6} alt="Friend 4" className="content-recommend__friends--photo" />
                            </div>
                        </div>
                    </div>
                    <div className="content-reviews">
                        <figure className="review">
                            <blockquote className="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                            </blockquote>
                            <figcaption className="review__user">
                                <img src={User3} alt="User 1" className="review__user--img" />
                                <div className="review__user-box">
                                    <p className="review__user--name">Nick Smith</p>
                                    <p className="review__user--date">Feb 23rd 2022</p>
                                </div>
                                <div className="review__rating">9.1</div>
                            </figcaption>
                        </figure>

                        <figure className="review">
                            <blockquote className="review__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                            </blockquote>
                            <figcaption className="review__user">
                                <img src={User4} alt="User 1" className="review__user--img" />
                                <div className="review__user-box">
                                    <p className="review__user--name">Dwayne Rock</p>
                                    <p className="review__user--date">Jan 01 2022</p>
                                </div>
                                <div className="review__rating">9.3</div>
                            </figcaption>
                        </figure>

                        <button className="btn-animate">Show all <span>&rarr;</span></button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Details;