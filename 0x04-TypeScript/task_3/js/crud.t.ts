import { RowID, RowElement } from './interface.ts';

interface insertRow {
  (row: RowElement): RowID;
}

interface deleteRow {
  (rowId: RowID): void;
}

interface updateRow {
  (rowId: RowID, row: RowElement): RowID;
}

export { insertRow, deleteRow, updateRow };
