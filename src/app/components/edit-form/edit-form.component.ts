import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';

import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
//import { Product } from "./model";
import { SVGIcon, saveIcon, cancelIcon } from '@progress/kendo-svg-icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-form',
  standalone: true,
  imports: [
    KENDO_BUTTONS,
    IntlModule,
    DateInputsModule,
    CommonModule,
    DialogModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.scss',
})
export class EditFormComponent {
  public active = false;
  public editForm: FormGroup;
  constructor() {
    this.editForm = new FormGroup({
      ProductName: new FormControl('', Validators.required),
      place: new FormControl('', Validators.required),
      full_name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      mass: new FormControl(0),
      dateIn: new FormControl(0),
      dateOut: new FormControl(0),
    });
  }

  @Input() public set model(product: any) {
    this.editForm.reset(product);

    // toggle the Dialog visibility
    this.active = product !== undefined;
  }

  @Output() cancel: EventEmitter<undefined> = new EventEmitter();
  @Output() save: EventEmitter<any> = new EventEmitter();

  public onSave(e: MouseEvent): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e: MouseEvent): void {
    e.preventDefault();
    this.closeForm();
  }

  public closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }
}
