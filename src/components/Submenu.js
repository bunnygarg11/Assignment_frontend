import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from '../context.js'; 
import { getProviderDetails } from "../utils/api.js";

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    height: 35px;
    text-decoration: none;
    font-size: 24px;
`;

const SidebarContainer = styled.div`
    background:${props => (props.className === "active" ? '#1A2632' : '')};
    border-radius:5px;
    padding:10px;
    transition:background 300ms;
    margin:10px;
`;

const DropdownLink = styled(Link)`
    height: 40px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 20px;
`;

const SubMenu = ({ item, toggle }) => {
    const [subnav, setSubnav] = useState(false);

    const { dispatchDetailsEvent } = useContext(AppContext);

    const getDetails = async (provider) => {
        const response = await getProviderDetails(provider);
        const name = Object.keys(response.data.apis)[0]
        dispatchDetailsEvent('GET_DETAILS',{ data: response.data.apis[`${name}`]});

        item['subNav'] = {
            title: response.data.apis[`${name}`].info.title,
            path: `/details/${item.title}`,
            icon: response.data.apis[`${name}`].info["x-logo"]["url"]
        }
        setSubnav(!subnav);
    };

    return (
        <>
            <SidebarContainer className={subnav ? 'active' : 'inactive'} id={item.title}>
                <SidebarLink to={item.path}
                    onClick={() => {
                        getDetails(item.title)
                       }
                     }>
                <div>
                    <span>{item.title}</span>
                </div>
                <div>
                    {subnav
                        ? <img src={item.iconOpened} alt="icon-open" />
                        : <img src={item.iconClosed} alt="icon-close" />
                    }
                </div>
                </SidebarLink>
                {subnav && <DropdownLink to={item?.subNav?.path} onClick={() => {
                    toggle(false)
                }
                }>
                    <img src={item.subNav.icon} style={{ "width": "25px" }} alt="icon" />
                    <span style={{marginLeft:'8px'}}>{item?.subNav?.title}</span>
                    </DropdownLink>
                }
            </SidebarContainer>
        </>
    );
};

export default SubMenu;
