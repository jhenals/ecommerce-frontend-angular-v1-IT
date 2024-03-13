import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-go-back-button',
  templateUrl: './go-back-button.component.html',
  styleUrls: ['./go-back-button.component.css']
})
export class GoBackButtonComponent {

  constructor(private utilsService: UtilService) { }

  goBack() {
    this.utilsService.goBack();
  }

}
