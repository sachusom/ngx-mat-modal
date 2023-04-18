import { Component, Inject } from '@angular/core';
import { ConfirmModalData } from '../../models/confirm-modal-data.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'agp-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  /* Public Variables */
  view: ConfirmModalData;

  /* Constructor */
  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.view = data;
  }

  /* Public Methods */
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
