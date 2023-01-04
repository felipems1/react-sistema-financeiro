import * as C from "./styles";
import { Item } from "../../types/Item";
import { TableItem } from "../TableItem";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <C.Table>
      <C.Thead>
        <C.TableHeadColumn>Data</C.TableHeadColumn>
        <C.TableHeadColumn>Categoria</C.TableHeadColumn>
        <C.TableHeadColumn>Título</C.TableHeadColumn>
        <C.TableHeadColumn>Valor</C.TableHeadColumn>
      </C.Thead>
      <C.Tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item} />
        ))}
      </C.Tbody>
    </C.Table>
  );
};
