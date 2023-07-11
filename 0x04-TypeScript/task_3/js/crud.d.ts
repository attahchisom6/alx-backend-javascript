import { RowID, RowElement } from './interface';

// pls not that this module serve to provide type informations  for functions
// in the crude.py module; it does not affect the run time of the programm

interface InsertRow {
  (row: RowElement): RowID;
}

interface DeleteRow {
  (rowId: RowID): void;
}

interface UpdateRow {
  (rowId: RowID, row: RowElement): RowID;
}

export { InsertRow as insertRow, DeleteRow as deleteRow, UpdateRow as updateRow };
