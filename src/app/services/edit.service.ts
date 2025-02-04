import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { storageUnitsList_mock } from '../../mocks/storage-units-list';

const UPDATE_ACTION = 'update';
@Injectable({
  providedIn: 'root',
})
export class EditService extends BehaviorSubject<any[]> {
  // constructor() { }
  constructor(private http: HttpClient) {
    super([]);
  }

  private data: any[] = [];

  public read(): void {
    if (this.data.length) {
      return super.next(this.data);
    }

    this.fetch()
      .pipe(
        tap((data) => {
          this.data = data;
        })
      )
      .subscribe((data) => {
        super.next(data);
      });
  }

  public save(data: any[], isNew?: boolean): void {
    this.reset();

    this.fetch(UPDATE_ACTION, data).subscribe(
      () => this.read(),
      () => this.read()
    );
  }

  private reset() {
    this.data = [];
  }

  private fetch(action = '', data?: any[]): Observable<any[]> {
    return storageUnitsList_mock[`KWFomI9G2`];
  }

  private serializeModels(data?: any[]): string {
    return data ? `&models=${JSON.stringify([data])}` : '';
  }
}
