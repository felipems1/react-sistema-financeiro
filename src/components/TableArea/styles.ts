import styled from "styled-components";

export const Table = styled.table`
  margin: 20px 5px 0 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thead = styled.thead`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Tbody = styled.tbody`
  width: 100%;
`;

export const TableHeadColumn = styled.th`
  padding: 10px 0;
  width: 120px;
`;
