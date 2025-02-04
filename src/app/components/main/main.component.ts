import { ANIMATION_MODULE_TYPE, Component, inject, Input } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { WarehouseComponent } from '../warehouse/warehouse.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { warehousesList_mock } from '../../../mocks/warehouses-list';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SideMenuComponent, WarehouseComponent, HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  constructor(private http: HttpClient) {}
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.fetchWarehouses();
  }
  add_selected_idx($event: any) {
    this.selectedIdx = $event;
    this.router.navigate([`/main/warehouse/${$event}`]);
  }
  public warehousesList: any[] = [];
  public selectedIdx: any = null;
  public fetchWarehouses() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((resp: object) => {
        this.warehousesList = warehousesList_mock;
      });
  }
}
