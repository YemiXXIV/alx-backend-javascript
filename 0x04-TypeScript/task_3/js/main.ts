
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

let row: RowElement = {
    firstName: 'Guillame',
    lastName: 'Salva'
}

const newRowID: RowID = CRUD.insertRow(row);

const updatedRow: RowElement = {
    ...row,
    age: 23
};

CRUD.updaterow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);