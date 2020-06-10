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
    background: #c4c4c4;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #00000021;

    span {
        max-height: 25px;
        min-height: 25px;
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
