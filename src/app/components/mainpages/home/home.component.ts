import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('targetDiv')
  target!: ElementRef;

  scrollToElement(target: ElementRef): void {
    target.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
