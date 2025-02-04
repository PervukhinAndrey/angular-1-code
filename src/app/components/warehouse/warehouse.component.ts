import { Component, Input, SimpleChanges, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { storageUnitsList_mock } from '../../../mocks/storage-units-list';

import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import {
  GridModule,
  AddEvent,
  DataBindingDirective,
} from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { process } from '@progress/kendo-data-query';
//import { units } from './units';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { IntlModule, IntlService } from '@progress/kendo-angular-intl';
import { updateAuthToken } from '../../functions/updateAuthToken';
import { EditService } from '@progress/kendo-angular-grid/editing/edit.service';

@Component({
  selector: 'app-warehouse',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    EditFormComponent,
    IntlModule,
  ],
  templateUrl: './warehouse.component.html',
  styleUrl: './warehouse.component.scss',
})
export class WarehouseComponent {
  constructor(private http: HttpClient, public intl: IntlService) {}
  public storageUnitsList: any = [];
  @Input() selectedIdx: any = null;
  public editDataItem: any;
  public isNew: boolean;
  public currentWhIdx: string;
  ngOnChanges(changes: SimpleChanges) {
    this.getStorageUnitsData(changes['selectedIdx'].currentValue);
    this.currentWhIdx = changes['selectedIdx'].currentValue;
    //this.gridView = this.storageUnitsList;
  }

  getStorageUnitsData(a: string) {
    if (a)
      this.http
        .get('https://jsonplaceholder.typicode.com/todos/1')
        .subscribe((resp: object) => {
          this.gridView = storageUnitsList_mock[`${a}`];
          this.storageUnitsList = storageUnitsList_mock[`${a}`];
        });
  }
  //---------------------------------------------------------------------------------------------------
  @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective;
  // public gridData: unknown[] = this.storageUnitsList;
  public gridView: unknown[] = [];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    //   this.gridView = this.gridData;
  }

  public editHandler(args: AddEvent): void {
    this.editDataItem = args.dataItem;
    this.isNew = false;
  }
  public cancelHandler(): void {
    this.editDataItem = undefined;
  }

  public saveHandler(product: any): void {
    updateAuthToken();
    this.editDataItem = undefined;
  }
  public onFilter(value: Event): void {
    const inputValue = value;

    this.gridView = process(this.storageUnitsList, {
      filter: {
        logic: 'or',
        filters: [
          {
            field: 'ProductName',
            operator: 'contains',
            value: inputValue,
          },
          // {
          //   field: 'place',
          //   operator: 'contains',
          //   value: inputValue,
          // },
        ],
      },
    }).data;

    console.log();

    this.dataBinding.skip = 0;
  }
}
