import { Component, Input, output, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KENDO_TREEVIEW } from '@progress/kendo-angular-treeview';
import { of } from 'rxjs';
import { updateAuthToken } from '../../functions/updateAuthToken';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule, KENDO_TREEVIEW],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  @Input() warehousesList: any = [];

  public selectedKeys: any[] = [];

  selected_idx = output<string>();
  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);
  public isItemSelected = (_: any, index: string) =>
    this.selectedKeys.indexOf(index) > -1;

  public handleSelection(e: any): void {
    this.selectedKeys = [e.index];
    if (this.selectedKeys[0].includes('_')) {
      updateAuthToken();
      this.selected_idx.emit(e.dataItem.idx);
    }
  }
}
