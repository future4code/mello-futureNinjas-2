import styled from 'styled-components';

export const Container = styled.main`
    min-height: 800px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 30px;
    }

    button {
        background: none;
        border: 1px solid #82b08b;
        padding: 15px;
        align-self: center;
        cursor: pointer;
        border-radius: 5px;
        font-weight: 500;
    }

    button:hover {
        background: #82b08b;
        color: white;
    }

    img {
        position: absolute;
        width: 50px;
        bottom: 5px;
        right: 5px;
    }
`;
