import React, { useEffect, useState } from 'react'
import "./SearchBar.scss";
import { ImSearch } from "react-icons/im";
import {useSelector, useDispatch} from "react-redux";
import { fetchHotels } from "../../redux/features/hotels/hotelSlice";
import useDebounce from '../../hooks/useDebounce';
var _ = require("lodash");

const SearchBar = () => {

    const hotels = useSelector((state) => state.hotels.hotelList);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");

    const [results, setResults] = useState([]);

    const [isSearching, setIsSearching] = useState(false);

    const debounceSearchTerm = useDebounce(searchValue, 500)

    const handleSearchValue = (e) => {
        e.preventDefault();
        setSearchValue(e.target.value);
    }

    const getHotels = (value) => {
        console.log("loading...", value)
        
        // For Reg Expressions
        const reg = new RegExp(_.escapeRegExp(value), "i");
        // New Data based on Value user entered
        const isData = hotels.filter((item) => reg.test(item.name));
        setResults(isData);
        setIsSearching(false);
    } 

   useEffect(() => {
    if(debounceSearchTerm) {
        setIsSearching(true);
        getHotels(debounceSearchTerm)
        console.log("Hotels", hotels)
    } else {
        setIsSearching(false);
        setResults([]);
    }
   },[debounceSearchTerm])

   // To fetch Hotel Data
   useEffect(() => {
    dispatch(fetchHotels());
   },[ dispatch])

    return (
        <div className="searchbar">
            <div className="searchbar__box">
                <form className="searchbar__form">
                    <input
                        className="searchbar__form--value"
                        type="text"
                        value={searchValue}
                        onChange={handleSearchValue}
                        placeholder="Search here..."
                        required
                    />
                    <button className='searchbar__form--btn'>
                        <ImSearch className="searchbar__form--icon" />
                    </button>
                </form>
                
                <div className={`searchbar__dropdown-box--${searchValue.trim().length >= 1 ? "active" : "hide"}`}>
                    <ul className='searchbar__lists'>
                        {results.length >= 1 ? results.map((item, i) => (
                            <li key={i} className='searchbar__list'>{item.name}</li>
                        )) : <li className='searchbar__list'>No Results Found!</li>}
                    </ul>
                </div> 
            </div>
        </div>
    )
}

export default SearchBar