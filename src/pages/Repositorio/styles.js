import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const Loading = styled.div`
    // color: #FFF;    
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0.2);
    padding: 0 30px;
    margin: 80px auto;
    padding: 20px;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 150px;
        border: 1px solid black;
        border-radius: 20%;
        margin: 10px 0;
    }

    h1 {
        font-size: 30px;
        color: #0D2636;
        margin-bottom: 10px;
    }

    p {
        font-size: 14px;
        color: black;
        text-align: center;
        line-height: 1.4em;
        max-width: 400px;
    }
`;

export const BackButton = styled(Link)`
    border: 0;
    outline: 0;
    background: transparent;
`;