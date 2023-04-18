import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'agp-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss']
})
export class MessageModalComponent implements OnInit {

  /* Public Properties */
  message: any;
  title: any;

  /* Constructor */
  constructor(
    private dialogRef: MatDialogRef<MessageModalComponent>,
    private sanitizer: DomSanitizer,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  /* Life Cycle Hooks */
  ngOnInit(): void {
    this.initVariables();
  }

  /* Public Methods */
  onOk(): void {
    this.dialogRef.close(true);
  }

  onClose(): void {
    this.dialogRef.close(false);
  }

  /* Private Methods */
  private initVariables(): void {
    this.title = this.data.title;
    this.message = this.data.message && this.data.message !== ''
      ? this.sanitizer.bypassSecurityTrustHtml(this.data.message)
      : 'Something went wrong.!';
  }
}
