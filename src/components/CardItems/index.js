import React, { useState } from 'react'
import "./CardItems.scss";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { addRemoveBookmarks } from "../../redux/features/bookmark/bookmarkSlice";
import { Link } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill} from "react-icons/bs";

const CardItems = ({hotel}) => {

    const { name, image, price, city, country} = hotel;

    const [isBookmarked, setIsBookmarked] = useState(false);

    const [isCart, setIsCart] = useState(false);


    const dispatch = useDispatch();

    const toggleBookmark = () => {
        setIsBookmarked((book) => !book);
        dispatch(addRemoveBookmarks(hotel));
    }

    const addRemoveCart = (checkCart) => {
        setIsCart((cart) => !cart);
        if(checkCart) {
            dispatch(removeFromCart(hotel.id));
        } else {
            dispatch(addToCart(hotel));
        }
    }

    /* const derementCart = () => {
        dispatch(decrement());
    } */

    return (
        <article className='card'>
            <img src={require(`../../assets/img/${image}`)} alt={name} className='card__img' />

            {/* <div className="card__bookmark">
                <BsBookmark className="card__bookmark--icon" />
            </div> */}
            
            <div className='card__text-box'>
                <div className='card__title-box'>
                    <p className='card__name'>
                        {name}
                    </p>
                    <div onClick={toggleBookmark} className="card__bookmark">
                        {isBookmarked ? (
                            <BsBookmarkFill className="card__bookmark--icon" />
                        ) : (
                            <BsBookmark className="card__bookmark--icon" />
                        )}
                    </div>
                </div>

                <p className='card__location'>${city}, ${country}</p>

                <p className='card__price'>${price}/day</p> 
                
                {/* <p className='card__desc'>{desc}</p> */}
            </div>

            <div className='card__btn-box'>
                <button 
                    onClick={() => addRemoveCart(isCart)} 
                    className='card__btn card__btn--cart'
                >
                    {isCart ? "Remove" : "Add to Cart"}
                </button>
                <Link to={`/details/1`}  className='card__btn card__btn--details'>View Details</Link>
            </div>

            <center>
                    
            </center>
        </article>
    )
}

export default CardItems