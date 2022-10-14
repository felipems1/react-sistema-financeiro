import styled from 'styled-components';

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const AreaItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 150px;
    height: 20px;
`;

export const Select = styled.select`
    width: 150px;
    height: 25px;
`;

export const Button = styled.button`
    margin-top: 20px;
    height: 30px;
    background-color: #87ceeb;
    border-radius: 5px;
    border: none;
    cursor: pointer;
`;

