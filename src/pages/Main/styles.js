import styled from 'styled-components'

export const Container = styled.div`
    max-width: 700px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 60px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        
        svg {
            margin-right: 10px;
        }
    }

`

export const Form = styled.form`
    margin-top: 15px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #DDD;
        padding: 5px 10px;
        border-radius: 4px;
    }
`

export const SubmitButton = styled.button`
    background-color: #0D2636;
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`