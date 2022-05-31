import { Component } from '@angular/core';
import { NgxMatModalService } from 'ngx-mat-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private modalService: NgxMatModalService
  ) { }

  showMessage(): void {
    this.modalService.showMessage('Success');
  }

  confirm(): void {
    this.modalService.confirm({
      question: 'Are you sure?',
      confirmBtnText: 'Yes',
      cancelBtnText: 'No'
    })
      .subscribe((confirmed: boolean) => { });
  }

  showNotification(): void {
    this.modalService.showNotification('Notification');
  }
}
