import {Column, Row, TableClasses, TableConfig} from "../models/data-table.model";

export function createRows<T>(row?: Partial<Row<T>>) {
  return {
    data: row?.data || new Array<T>()
  } as Row<T>
}

export function createColumn(column?: Partial<Column>) {
  return {
    columnTitle: column?.columnTitle,
    columnSlug: column?.columnSlug
  } as Column
}

export function createTableClasses(classes?: Partial<TableClasses>) {
  return {
    tableClass: classes?.tableClass,
    theadClass: classes?.theadClass,
    tbodyClass: classes?.tbodyClass,
    thClass: classes?.thClass,
    tdClass: classes?.tdClass,
    trClass: classes?.trClass
  } as TableClasses;
}

export function createTableConfig(config?: Partial<TableConfig>) {
  return {
    classes: createTableClasses(config?.classes),
    width: config?.width,
    height: config?.height,
    title: config?.title
  } as TableConfig;
}
