import { Component, OnInit } from '@angular/core';
import { LunchManagerServiceService } from '../../services/lunch-manager-service.service';
import { Subject, Observable } from 'rxjs';
import { CardEvent } from '../../model/card-event.interface';
import { tap, take } from 'rxjs/operators';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;
  showForm: boolean;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
  }

  sendEvent(): void {
    const cardEventExample: CardEvent = {
      id: null,
      host: this.thost,
      attendees: '1',
      when: this.twhen,
      where: this.twhere,
      what: this.twhat
    };

    this.lunchManagerService.generateEventCard(cardEventExample).pipe(
      take(1),
      tap(console.log)
    ).subscribe();

    window.location.reload();
  }
}
