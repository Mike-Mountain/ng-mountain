import {Component, OnInit} from '@angular/core';
import {Column, Row} from "../../../../../../../ng-mountain/src/lib/modules/ngm-data-table/models/data-table.model";

export interface TestRow {
  title: string;
  userName: string;
}

@Component({
  selector: 'app-data-table-docs',
  templateUrl: './data-table-docs.component.html',
  styleUrls: ['./data-table-docs.component.scss']
})
export class DataTableDocsComponent implements OnInit {

  public rows: Row<TestRow> = {
    data: [
      {title: 'Test One', userName: 'Mike'},
      {title: 'Test Two', userName: 'Jake'},
      {title: 'Test Three', userName: 'Ash'},
      {title: 'Test Four', userName: 'Dad'},
    ]
  };

  public columns: Column[] = [
    {columnTitle: 'Title', columnSlug: 'title'},
    {columnTitle: 'User Name', columnSlug: 'userName'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  log(row: Row<TestRow>) {
    console.log(row);
  }
}
