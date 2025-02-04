import { Component, OnInit, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClient, HttpClientModule } from '@angular/common/http';

//import { CommonModule } from '@angular/common';
//import { BrowserModule } from '@angular/platform-browser';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    //  CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}
  // public warehousesList: any[] = [
  //   {
  //     text: 'Furniture',
  //     items: [
  //       { text: 'Tables & Chairs', bb: 0 },
  //       { text: 'Sofas', bb: 1 },
  //       { text: 'Occasional Furniture', bb: 2 },
  //     ],
  //     bb: null,
  //   },
  //   {
  //     text: 'Decor',
  //     items: [
  //       { text: 'Bed Linen', bb: 3 },
  //       { text: 'Curtains & Blinds', bb: 4 },
  //       { text: 'Carpets', bb: 5 },
  //     ],
  //     bb: null,
  //   },
  // ];

  ngOnInit(): void {
    //  this.fetchWarehouses();
  }

  // public fetchWarehouses() {
  //   this.http
  //     .get('https://jsonplaceholder.typicode.com/todos/1')
  //     .subscribe((resp: object) => {
  //       console.log(warehousesList_mock);
  //       //   this.warehousesList = warehousesList_mock;
  //     });
  // }
  private title = 'test-project';
}
