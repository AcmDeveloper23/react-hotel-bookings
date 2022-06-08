import React from 'react';
import Layout from '../../components/Layout';
import Listing from "../../components/Listing";
import { hotelData } from "../../data/hotels";

const Hotels = () => {
  return (
    <Layout>
        <Listing hotels={hotelData} />
    </Layout>
  )
}

export default Hotels