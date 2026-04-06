import React from 'react';
import {Outlet} from "react-router";
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer/Footer';
import CompanyStatsSection from '../components/companyStatsSection/CompanyStatsSection';
import Marquee from '../components/marquee/Marquee';
import BlogInsightsGrid from '../components/BlogInsightGrid/BlogInsightGrid';
import FAQSection from '../components/FAQSection/FAQSection';
import PxlItem from '../components/Pxl/PxlItem';
import TeamSection from '../components/TeamSection/TeamSection';
import CreativeSection from '../components/creative_section/CreativeSection';
import ContactSection from '../components/ContactSection';
import UserFeedbacks from '../components/userfeedbacks/UserFeedbacks';
import VideoSection from '../components/videoSection/VideoSection';
import HappyUsersSection from '../components/HappyUserSection/HappyUserSection';
import FunFacts from '../components/FunFacts/FunFacts';
import CompanyExpertise from '../components/CompanyExpertise/CompanyExpertise';
import Portfolio from '../components/Portfolio/Portfolio';
import FlokaSection from '../components/FlokaSection/FlokaSection';



const RootLayout =()=>{
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            {/* <CompanyStatsSection></CompanyStatsSection> */}
            <FlokaSection></FlokaSection>
            <Marquee></Marquee>
            <Outlet></Outlet>
            <Portfolio></Portfolio>
            <CompanyExpertise></CompanyExpertise>
            <FunFacts></FunFacts>
            <HappyUsersSection></HappyUsersSection>
           
            <UserFeedbacks></UserFeedbacks>
            <ContactSection></ContactSection>
            <CreativeSection></CreativeSection>
            <TeamSection></TeamSection>
            <FAQSection></FAQSection>
            {/* <PxlItem></PxlItem> */}
            <BlogInsightsGrid></BlogInsightsGrid>
            <Footer></Footer>
            
        </div>
    )
}
export default RootLayout;