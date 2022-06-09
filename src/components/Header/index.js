import React from 'react'
import './Header.scss';
import Assets from "../../assets";
import { ImCart, ImBookmark, ImMenu, ImCross} from "react-icons/im";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { toggleFunc } from "../../redux/features/sideBar/sideBarSlice"
import { cartTotalSelector } from "../../redux/features/cart/cartSelectors";

const Header = () => {

  // It shows only total length
  //const cartCount = useSelector((state) => state.cart?.length);
  // its shows total count based on quantity(roomsBooked)
  const cartCount = useSelector(cartTotalSelector);

  const showSidebar = useSelector((state) => state.sideBarToggle.showSidebar);


  const dispatch = useDispatch();

  const toggleSidebarMenu = () => {
    dispatch(toggleFunc());
  }

  return (
    <header className='header'>
      

      <div className='header-btn'>
        <Link to="/">
          <img src={Assets.Logo} alt="Logo" className="logo" />
        </Link>

        {showSidebar ? (
          <ImCross className='header__toggle-btn' onClick={toggleSidebarMenu} />
        )
        : (
        <ImMenu className='header__toggle-btn' onClick={toggleSidebarMenu} />)}
      </div>

      <nav className='user-nav'>
        <div className='user-nav__box'>
          <Link to="/cart" className='user-nav__link'>
            <ImCart className='user-nav__icon' />
            {console.log("cartCount", cartCount)}
            {cartCount > 0 && <span className='user-nav__notification'>{cartCount}</span>}
          </Link>
        </div>
        <div className='user-nav__box'>
          <Link to="/bookmarks" className='user-nav__link'>
            <ImBookmark className='user-nav__icon' />
            <span className='user-nav__notification'>15</span>
          </Link>
        </div>

        <div className='user-acnt__box'>
          {/* <img src={Assets.UserProfile} alt="User Profile" className='user-acnt__box--photo' />
          <p className='user-acnt__box--name'>Acm</p> */}
          <Link className='user-acnt__box--link' to="/login">
            <p className='user-acnt__box--login'>Login</p>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header