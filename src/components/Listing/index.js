import React from 'react'
import "./Listing.scss";
import CardItems from '../CardItems';
import Assets from '../../assets';

const Listing = ({hotels}) => {
  return (
    <section className="listing">
        <h1 className='listing__heading'>Hotels</h1>
        <div className='listing__cards'>
            {hotels.length >= 1 && hotels.map((item, i) => (
              <CardItems 
                key={item.id} 
                image={Assets.Hotel1}  
                name={item.name}
                city={item.city}
                country={item.country}
                price={item.price}
                desc={item.description}
              />
            ))}
        </div>
    </section>
  )
}

export default Listing;