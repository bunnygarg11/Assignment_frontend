import React, { useContext } from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AppContext } from '../context.js'; 

const DetailScreenContainer = styled.div`
    min-height: 100%;
    height: auto !important;
    height: 100%;
    color:white;
    background: ${props => (props.showSidebar ? 'rgba(0, 0, 0, 0.7)' : '#42607B')};
    transition:background 500ms;
`;

const DetailsHeading = styled.div`
    padding: 50px;
    display: flex;
    flex-direction:row;
    justify-content: center;
    align-items: center;
    background: ${props => (props.showSidebar ? 'rgba(0, 0, 0, 0.7)' : '#42607B')};
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

const DetailScreen = () => {

    const { data } = useContext(AppContext);
    let navigate = useNavigate();;

    return (
        data ?
            <DetailScreenContainer>
                <DetailsHeading>
                    <img src={`${data?.data?.info?.["x-logo"]["url"]}`} style={{ width: '100px', marginRight: '15px' }} alt='company logo'/>
                    <h1>{data?.data?.info.title}</h1>
                </DetailsHeading>
                <div style={{ padding: '20px 100px' }}>
                    <h2>
                        Description
                    </h2>
                    <p>{data?.data?.info?.description}</p>
                    <h2>
                        Swagger
                    </h2>
                    <p>{data?.data?.swaggerUrl}</p>
                    <h2>
                        Contact
                    </h2>
                    <p>Email {data?.data?.info?.contact?.email}</p>
                    <p>Name {data?.data?.info?.contact?.name}</p>
                    <p>Url {data?.data?.info?.contact?.url}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", padding: '50px' }}>
                    <Button onClick={() => navigate(`/`)} >Explore Web APIs</Button>
                </div>
            </DetailScreenContainer>
            :
            <>
            </>
    );
};

export default DetailScreen;