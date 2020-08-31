import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Column, Row, TableConfig} from "../../models/data-table.model";
import {createColumn, createRows} from "../../functions/data-table.functions";

@Component({
  selector: 'ngm-data-table',
  templateUrl: './ngm-data-table.component.html',
  styleUrls: ['./ngm-data-table.component.scss']
})
export class NgmDataTableComponent<T> implements OnInit {

  @Input()
  public set rows(rows: Row<T>) {
    this._rows = createRows(rows);
  };

  @Input()
  public set columns(columns: Column[]) {
    this._columns = columns.map(column => createColumn(column));
  };

  @Input()
  public set config(config: TableConfig) {
    this._config = config;
  };

  @Output() onItemClick = new EventEmitter<Row<T>>();

  public get rows(): Row<T> {
    return this._rows;
  }

  public get columns(): Column[] {
    return this._columns;
  }

  public get config(): TableConfig {
    return this._config;
  }

  private _rows: Row<T>;
  private _columns: Column[];
  private _config: TableConfig;

  constructor() {
  }

  ngOnInit(): void {
  }

  public emitItemClick(row: Row<T>) {
    this.onItemClick.emit(row);
  }
}
