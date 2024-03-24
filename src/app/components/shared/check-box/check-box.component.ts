import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css']
})
export class CheckBoxComponent {
  @Input() dataSource: any[] = [];
  @Output() selectionChange = new EventEmitter<any[]>();

  toggleSelection(item: any) {
    item.selected = !item.selected;
    this.selectionChange.emit(this.dataSource.filter(item => item.selected));
  }

}
