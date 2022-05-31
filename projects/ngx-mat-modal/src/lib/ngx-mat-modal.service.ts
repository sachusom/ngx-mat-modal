import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { ConfirmModalData } from './models/confirm-modal-data.model';

@Injectable({
  providedIn: 'root'
})
export class NgxMatModalService {

  /* Constructor */
  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  /* Public Methods */
  setDialogConfig(
    disableClose: boolean,
    autoFocus: boolean,
    width: string,
    data: any = null,
    panelClass: string = ''
  ): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = disableClose;
    dialogConfig.autoFocus = autoFocus;
    dialogConfig.width = width;
    dialogConfig.data = data;
    dialogConfig.panelClass = panelClass;
    return dialogConfig;
  }

  showMessage(message: string, heading: string | null = null, config: MatDialogConfig<any> | null = null): any {
    const data = {
      message,
      heading
    };

    let dialogConfig: MatDialogConfig<any>;
    if (!config) {
      dialogConfig = this.setDialogConfig(true, false, 'auto', data);
    }
    else {
      dialogConfig = config;
    }

    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  confirm(data: ConfirmModalData): any {
    const dialogConfig = this.setDialogConfig(true, false, 'auto', data);
    dialogConfig.panelClass = 'confirm';
    return this.dialog.open(ConfirmModalComponent, dialogConfig).afterClosed();
  }

  /*
  * message : message to be displayed
  * action  : label of button
  */
  showNotification(message: string, action: string = 'OK', duration: number = 4000): void {
    this.snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration,
    });
  }

  getOpenDialogCount(): number {
    return this.dialog.openDialogs.length;
  }
}
