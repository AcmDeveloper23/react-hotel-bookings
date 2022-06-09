import React from 'react'
import "./Listing.scss";
import CardItems from '../CardItems';

const Listing = ({hotels, title}) => {
  return (
    <section className="listing">
        <h1 className='listing__heading'>{title}</h1>
        <div className='listing__cards'>
            {hotels.length >= 1 && hotels.map((item, i) => (
              <CardItems 
                key={item.id} 
                hotel={item}
              />
            ))}
        </div>
    </section>
  )
}

export default Listing;