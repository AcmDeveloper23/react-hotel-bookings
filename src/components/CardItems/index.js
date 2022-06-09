import React, { useState, useEffect } from 'react'
import "./CardItems.scss";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/cart/cartSlice";
import { addRemoveBookmarks } from "../../redux/features/bookmark/bookmarkSlice";
import { Link } from 'react-router-dom';
import { BsBookmark, BsBookmarkFill} from "react-icons/bs";

const CardItems = ({hotel}) => {

    // Destructuring the hotel values
    const { id, name, image, price, city, country} = hotel;

    // Cart Data
    const cartLists = useSelector((state) => state.cart);
    // Bookmark Data
    const bookmarkLists = useSelector((state) => state.bookmark.bookmarkLists);

    const [bookmarked, setBookmarked] = useState(false);
    const [isCart, setIsCart] = useState(false);

    const dispatch = useDispatch();

    // Toggle Add/remove Bookmark Functionality
    const toggleBookmark = () => {
        setBookmarked((book) => !book);
        dispatch(addRemoveBookmarks(hotel));
    }

    // Toggle Add/Remove Cart functionality
    const addRemoveCart = (checkCart) => {
        setIsCart((cart) => !cart);
        // Is item is present in cart, then remove from the cart
        if(checkCart) {
            dispatch(removeFromCart(id));
        } else {
            // add to the cart
            dispatch(addToCart(hotel));
        }
    }

    // For Checking item present in Cart list or not
    const checkIteminCart = () => {
        const isAvailable = cartLists.find((item) => item.id === id);
        if(isAvailable) {
            setIsCart(true);
        } else {
            setIsCart(false);
        }
    }

    // For Checking item present in Bookmark list or not
    const checkBookmark = () => {
        const isAvailable = bookmarkLists.find((item) => item.id === id);
        if(isAvailable) {
            setBookmarked(true);
        } else {
            setBookmarked(false);
        }
    }

    useEffect(() => {
        // For Checking bookmarks and cart
        checkIteminCart();
        checkBookmark();
    },[])

    return (
        <article className='card'>
            <img src={require(`../../assets/img/${image}`)} alt={name} className='card__img' />
            
            <div className='card__text-box'>
                <div className='card__title-box'>
                    <p className='card__name'>
                        {name}
                    </p>
                    <div onClick={toggleBookmark} className="card__bookmark">
                        {bookmarked ? (
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