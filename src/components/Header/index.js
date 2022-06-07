import React from 'react'
import './Header.scss';
import Assets from "../../assets";
import { ImCart, ImBookmark, ImMenu, ImCross} from "react-icons/im";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from "react-redux";
import { toggleFunc } from "../../redux/features/sideBar/sideBarSlice"

const Header = () => {

  const cartCount = useSelector((state) => state.cart.value);

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
          <img src={Assets.UserProfile} alt="User Profile" className='user-acnt__box--photo' />
          <p className='user-acnt__box--name'>Acm</p>
        </div>
      </nav>
    </header>
  )
}

export default Header