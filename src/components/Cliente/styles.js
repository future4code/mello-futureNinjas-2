import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    height: 80px;
    align-items: center;
    padding: 60px 90px;

    span {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`;
