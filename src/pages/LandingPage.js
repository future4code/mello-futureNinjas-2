import React, { Component } from 'react';
import styled from 'styled-components';

const Home = styled.div`
    display: grid;
    grid-template-columns: repeat(10, 10%);
    grid-template-rows: repeat(10, 10%);
    justify-content: center;
    align-items: start;
    align-content: space-around;
    background-color: #e9ecf0;
`;

const Logo = styled.img`
    width: 500px;
    grid-column: 3;
    grid-row: 5;
    grid-row-start:2;
   
`;

class LandingPage extends Component {
    render() {
        return (
            <Home>
                <Logo src={require('../assets/logoBIG.svg')} />
            </Home>
        );
    }
}

export default LandingPage;
