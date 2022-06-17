import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs/internal/Observable';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { ConfirmModalData } from './models/confirm-modal-data.model';
import { MessageModalData } from './models/message-modal-data.model';

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
  showMessage(data: MessageModalData, config: MatDialogConfig<any> | null = null): Observable<any> {
    let dialogConfig: MatDialogConfig<any> = this.checkAndSetConfig(config);
    dialogConfig.data = data;
    return this.dialog.open(MessageModalComponent, dialogConfig).afterClosed();
  }

  confirm(data: ConfirmModalData, config: MatDialogConfig<any> | null = null): Observable<boolean> {
    let dialogConfig: MatDialogConfig<any> = this.checkAndSetConfig(config);
    dialogConfig.data = data;
    return this.dialog.open(ConfirmModalComponent, dialogConfig).afterClosed();
  }

  showNotification(message: string, action: string = 'OK', duration: number = 4000): void {
    this.snackBar.open(message, action, {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration,
    });
  }

  getActivenDialogCount(): number {
    return this.dialog.openDialogs.length;
  }

  /* Private Methods */
  private checkAndSetConfig(config: any): MatDialogConfig {
    let dialogConfig: MatDialogConfig<any>;
    if (!config) {
      dialogConfig = this.setDialogConfig(true, false, 'auto');
    }
    else {
      dialogConfig = config;
    }
    return dialogConfig;
  }

  private setDialogConfig(
    disableClose: boolean,
    autoFocus: boolean,
    width: string,
    panelClass: string = ''
  ): MatDialogConfig {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = disableClose;
    dialogConfig.autoFocus = autoFocus;
    dialogConfig.width = width;
    dialogConfig.panelClass = panelClass;
    return dialogConfig;
  }
}
