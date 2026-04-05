import React from 'react';
import {Outlet} from "react-router";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer/Footer';
import CompanyStatsSection from '../components/companyStatsSection/CompanyStatsSection';
import Marquee from '../components/marquee/Marquee';

const RootLayout =()=>{
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <CompanyStatsSection></CompanyStatsSection>
            <Marquee></Marquee>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    )
}
export default RootLayout;