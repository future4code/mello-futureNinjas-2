import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    min-height: 1000px;
`;

export const ServiceCard = styled.div`
    display: flex;
    width: 350px;
    height: 350px;
    justify-content: center;
    flex-direction: column;
    font-size: 14px;
    align-items: center;
    margin: 20px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #00000021;

    span {
        display: flex;
        max-height: 25px;
        min-height: 25px;
        justify-content: center;
        width: 100%;
        align-items: center;
    }

    span > button {
        margin-top: 100px;
        padding: 10px;
        outline: none;
        border: 1px solid #d8bb95;
        border-radius: 5px;
        background: none;
        color: #000000c9;
        cursor: pointer;
        font-weight: 400;
    }

    span > button:hover {
        background: #d8bb95;
        color: white;
    }
`;

export const Filters = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;

    span {
        display: flex;
        flex-direction: column;
        margin: 20px;
        text-align: center;
    }
`;

export const JobCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    position: fixed;
    bottom: 90px;
    right: 160px;
    width: 700px;
    height: 500px;
    background: white;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    border-radius: 5px;
    background: #d5d5d5;
    z-index: 2;
    -ms-overflow-style: none;
    overflow: -moz-scrollbars-none;

    ::-webkit-scrollbar {
        display: none;
    }

    div {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    button {
        margin-top: 100px;
        padding: 10px;
        outline: none;
        border: 1px solid #d8bb95;
        border-radius: 5px;
        background: none;
        color: #000000c9;
        cursor: pointer;
        font-weight: 400;
    }

    button:hover {
        background: #d8bb95;
        color: white;
    }

    > button {
        background: #ffffff;
        margin: 0;
        position: fixed;
        right: 200px;
        bottom: 570px;
    }
`;

export const FabSetter = styled.div`
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 3;

    i {
        padding: 10px 15px;
        background: red;
        border-radius: 100%;
        position: absolute;
        left: 125px;
        bottom: 35px;
        font-weight: bold;
        color: white;
        font-style: inherit;
        background: #efbb76;
    }
`;

export const PaymentOption = styled.div`
    display: inline;
    background: #e9ecf1;
    padding: 6px;
    margin: 5px;
    border-radius: 5px;
`;

export const CartCards = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
    padding: 5px;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #00000021;
    word-wrap: wrap;
    flex-direction: column;

    button {
        margin: 0;
        position: relative;
        left: 5px;
    }

    p {
        margin: 20px;
    }
`;
