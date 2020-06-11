import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background: green;
    height: 100px;

    img {
        position: relative;
        left: 100px;
        bottom: 10%;
        cursor: pointer;
    }

    nav {
        display: flex;
        margin-left: 50%;
        list-style: none;
    }

    nav * {
        margin: 0 15px;
        font-weight: bold;
        cursor: pointer;
    }

    nav *:hover {
        color: white;
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

    p {
        display: inline;
    }

    a {
        color: inherit;
    }
`;

export const BotaoRosa = styled.button`
    width: 400px;
    height: 40px;
    background-color: #d1a677;
    color: #fff;
    font-size: 20px;
    border-radius: 12px;
    cursor: pointer;
`;

export const BotaoVerde = styled.button`
    width: 400px;
    height: 40px;
    background-color: #388544;
    color: #fff;
    font-size: 20px;
    border-radius: 12px;
    cursor: pointer;
`;

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100px;
    justify-content: space-evenly;
    margin-top: 300px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
