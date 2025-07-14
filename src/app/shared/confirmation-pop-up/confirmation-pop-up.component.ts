import { Component } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-confirmation-pop-up',
  templateUrl: './confirmation-pop-up.component.html',
  styleUrls: ['./confirmation-pop-up.component.scss']
})
export class ConfirmationPopUpComponent {
  constructor(protected ref: NbDialogRef<ConfirmationPopUpComponent>) {}

  cancel(): void {
    this.ref.close(false); // Returning false for "cancel"
  }

  confirm(): void {
    this.ref.close(true); // Returning true for "confirm"
  }
}
