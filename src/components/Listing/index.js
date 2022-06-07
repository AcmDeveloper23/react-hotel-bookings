import React from 'react'
import "./Listing.scss";
import CardItems from '../CardItems';
import Assets from '../../assets';

const Listing = () => {
  return (
    <section className="listing">
        <h1 className='listing__heading'>Hotels</h1>
        <div className='listing__cards'>
            <CardItems name="Husqva" image={Assets.Hotel1} price={23} desc="Collaboratively administrate empowered markets via plug-and-play networks." />
            <CardItems name="Jellok" image={Assets.Hotel2} price={22} desc="Dramatically engage seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing." />
            <CardItems name="Hyntuk" image={Assets.Hotel3} price={18} desc="Completely synergize resource taxing relationships via premier niche markets." />
            <CardItems name="Hyntuk" image={Assets.Hotel3} price={18} desc="Completely synergize resource taxing relationships via premier niche markets." />
            <CardItems name="Hyntuk" image={Assets.Hotel3} price={18} desc="Completely synergize resource taxing relationships via premier niche markets." />
        </div>
    </section>
  )
}

export default Listing;