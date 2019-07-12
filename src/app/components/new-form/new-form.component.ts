import { Component, EventEmitter, Output } from '@angular/core';

import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { LunchManagerServiceService } from '../../services/lunch-manager-service.service';
import { CardEvent } from '../../model/card-event.interface';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent {
  submitted = false;

  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  @Output() newEvent: EventEmitter<boolean> = new EventEmitter();


  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  addEvent(): void {
    this.submitted = true;

    const unixString = new Date(this.twhen).getTime() / 1000;
    const cardEventExample: CardEvent = {
      id: null,
      host: this.thost,
      attendees: '1',
      when: parseInt(unixString, 10),
      where: this.twhere,
      what: this.twhat
    };

    this.lunchManagerService.generateEventCard(cardEventExample).pipe(
      take(1),
      map(() => {
        this.newEvent.emit(true);
      })
    ).subscribe();

  }

  closeForm(): void {
    this.closed.emit(false);
  }

}
