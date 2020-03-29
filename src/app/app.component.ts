import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'asa-angular-app';

//   constructor(private el: ElementRef, private renderer:Renderer2){}

//   ngAfterViewInit(){

// this.renderer.setStyle(this.el.nativeElement.ownerDocument.body,'backgroundColor', 'yourchoice color');

// }


}
