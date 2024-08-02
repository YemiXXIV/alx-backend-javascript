import { RowID, RowElement } from './interface';

declare function insertRow(row: RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updaterow(rowId: RowID, row: RowElement): RowID;