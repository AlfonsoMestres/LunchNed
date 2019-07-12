import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LunchManagerServiceService } from '../../services/lunch-manager-service.service';
import { Observable } from 'rxjs';
import { CardEvent } from '../../model/card-event.interface';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  @Output() newEvent: EventEmitter<boolean> = new EventEmitter();

  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;

  hostText: string;
  whenText: string;
  whereText: string;
  whatText: string;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
    this.hostText = '';
    this.whenText = '';
    this.whereText = '';
    this.whatText = '';
  }

  sendEvent(): void {
    const cardEventExample: CardEvent = {
      id: null,
      host: this.hostText,
      attendees: '1',
      when: this.whenText,
      where: this.whereText,
      what: this.whatText
    };

    this.lunchManagerService.generateEventCard(cardEventExample).pipe(
      take(1)
    ).subscribe();

    this.newEvent.emit(true);
  }

  closeForm(): void {
    this.closed.emit(false);
  }

}
