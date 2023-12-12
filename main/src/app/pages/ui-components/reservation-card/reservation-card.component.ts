import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent {

  @Input() reservation: any;
  @Output() messageSent = new EventEmitter<string>();
  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messageSent.emit(this.newMessage);
      this.newMessage = ''; // Clear the input after sending the message
    }
  }
}
