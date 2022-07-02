import React from 'react';
import About from '../About/About';
import Pricing from '../Pricing/Pricing';
import Reservation from '../Reservation/Reservation';
import Rooms from '../Rooms/Rooms';
import Slider from '../Slider/Slider';
import SummerOffer from '../SummerOffer/SummerOffer';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <About></About>
            <Rooms></Rooms>
            <SummerOffer></SummerOffer>
            <Reservation></Reservation>
            <Pricing></Pricing>

        </div>
    );
};

export default Home;