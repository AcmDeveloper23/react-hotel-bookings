import React, {useEffect} from 'react';
import Layout from '../../components/Layout';
import Listing from "../../components/Listing";
//import { hotelData } from "../../data/hotels";
import { useSelector, useDispatch } from "react-redux";
import { fetchHotels } from "../../redux/features/hotels/hotelSlice";

const Hotels = () => {

  const dispatch = useDispatch();
  const hotelData = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <Layout>
      {hotelData.isLoading && <h1>Loading...</h1>}
      {hotelData.hotelList?.length >= 1 && <Listing title="Hotels" hotels={hotelData.hotelList} />}
    </Layout>
  )
}

export default Hotels