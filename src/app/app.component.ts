import { Component } from '@angular/core';
import { NgxMatModalService } from 'projects/ngx-mat-modal/src/public-api';

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
    this.modalService.showMessage({ message: 'Success', title: '' });
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
