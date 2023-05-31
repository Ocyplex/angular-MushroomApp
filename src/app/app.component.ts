import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  postTexts = [
    'Miodowka?',
    'Muchomor?'
  ];

  imgVar = [
    'assets/img/rooms/1.jpg',
    'assets/img/rooms/2.jpg'
  ]

  buttonClicked(){
    alert('Hallo, wie geht es dir?')
  }
}
