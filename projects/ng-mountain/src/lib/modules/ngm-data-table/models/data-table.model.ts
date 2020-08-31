export interface Row<T> {
  data: T[];
}

export interface Column {
  columnTitle: string;
  columnSlug: string;
}

export interface TableClasses {
  tableClass?: string;
  theadClass?: string;
  tbodyClass?: string;
  trClass?: string;
  thClass?: string;
  tdClass?: string;
}

export interface TableConfig {
  classes?: TableClasses,
  width?: number;
  height?: number;
  title?: string;
}
