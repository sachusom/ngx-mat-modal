import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { NgxMatModalService } from './ngx-mat-modal.service';

@NgModule({
  declarations: [
    ConfirmModalComponent,
    MessageModalComponent
  ],
  imports: [
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    MatDialogModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    },
    NgxMatModalService
  ]
})
export class NgxMatModalModule { }
