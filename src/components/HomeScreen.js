import React, { useState, useEffect } from 'react';
import UpArrow from '../assets/images/up_arrow.svg'
import DownArrow from '../assets/images/down_arrow.svg'
import styled from "styled-components";
import Sidebar from './SideBar';
import { getProviders } from '../utils/api';


const HomeScreenContainer = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color:white;
    background: ${props => (props.showSidebar ? 'rgba(0, 0, 0, 0.7)' : '#42607B')};
    transition:background 500ms ease-in-out;
`;

const Button = styled.button`
    padding:12px 16px 12px 16px;
    background: #00A1D4;
    border: none;
    border-radius:8px;
    color:white;
    font-size: 24px;
    font-weight: 400;
`;

const HomeScreen = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const [data, setData] = useState([]);

    const getSideBarListing = async () => {
        let navItems = []
        const response = await getProviders();
        response.data.data.map((provider) => {
            return navItems.push({
                title: provider,
                iconClosed: DownArrow,
                iconOpened: UpArrow,
            })
        })
        setData(navItems);
    }

    useEffect(() => {
        getSideBarListing()
    }, []);

    return (
        <HomeScreenContainer showSidebar={showSidebar}>
            <Button onClick={toggleSidebar} >Explore Web APIs</Button>
            <Sidebar data={data} show={showSidebar} toggle={toggleSidebar} />
        </HomeScreenContainer>
    );
};

export default HomeScreen;