import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 15px;
  margin: 20px 5px 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const AreaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  margin: 0 10px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 150px;
  height: 20px;

  @media (max-width: 700px) {
    width: 250px;
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 25px;

  @media (max-width: 700px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  background-color: #87ceeb;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;
