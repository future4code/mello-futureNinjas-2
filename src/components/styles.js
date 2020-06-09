import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;

    background: green;
    height: 100px;

    img {
        position: relative;
        left: 100px;
        bottom: 10%;
    }
`;

export const Footer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: green;
    height: 200px;

    img {
        width: 100px;
    }
`;
