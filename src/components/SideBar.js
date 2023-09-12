import React from 'react';
import styled from "styled-components";

import SubMenu from "./Submenu";

const SidebarNav = styled.nav`
background: #42607B;
width: 520px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
transition: 350ms;
z-index: 10;
overflow-y:scroll;
text-align:center;
 scrollbar-width: none;
-ms-overflow-style: none;
  &::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}
`;

const SidebarWrap = styled.div`
width: 100%;
color:white;
padding:20px 30px;
`;

const StyledHeading = styled.div`
    font-size: 24px;
    font-weight: 500;
`;

const Sidebar = ({ data, show , toggle }) => {

    const myToggle = (data) => {
        toggle(data);
    };

    return (
        <>
            <SidebarNav sidebar={show}>
                <SidebarWrap>
                    <StyledHeading>Select Provider</StyledHeading>
                    {data?.map((item, index) => {
                        return <SubMenu item={item} key={index} toggle={myToggle} />;
                    })}
                </SidebarWrap>
            </SidebarNav>
        </>
    );
};

export default Sidebar;
