import { Injectable } from '@angular/core';
import { NbComponentStatus, NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastrService: NbToastrService) { }

  showToast (
    type: NbComponentStatus,
    title: string,
    body: string,
    position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT,
    duration: number = 2000,
    hasIcon: boolean = true,
    destroyByClick: boolean = true,
    preventDuplicates: boolean = false
  ): void {
    const config = {
      status: type,
      destroyByClick,
      duration,
      hasIcon,
      position,
      preventDuplicates,
    };

    const titleContent = title ? `. ${ title }` : '';

    this.toastrService.show(body, titleContent, config);
  }
}
