import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rooms-card',
  templateUrl: './rooms-card.component.html',
  styleUrls: ['./rooms-card.component.scss']
})
export class RoomsCardComponent {
  @Input() text: string ='';
  @Input() img: string ='';
}
