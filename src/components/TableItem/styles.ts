import styled from "styled-components";

export const TableLine = styled.tr`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

export const TableColumn = styled.td`
  padding: 10px 0;
  width: 120px;
  text-align: center;
`;

export const Category = styled.div<{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
