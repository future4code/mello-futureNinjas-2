import React, { Component } from 'react';
import styled from 'styled-components';
import LogoBIG from '../assets/logoBIG.svg';

const Home = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);
    align-content: center;
    justify-items: center;
    align-content: space-around;
    background-color: #e9ecf0;
`;

const Logo = styled.img`
    width: 500px;
    grid-column: 3;
    grid-row: 5;
`;

class LandingPage extends Component {
    render() {
        return (
            <Home>
                <Logo src={LogoBIG} />
            </Home>
        );
    }
}

export default LandingPage;
