import { Component } from '@angular/core';
import { LunchManagerServiceService } from 'src/app/services/lunch-manager-service.service';
import { CardEvent } from 'src/app/model/card-event.interface';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-new-event-button',
  templateUrl: './new-event-button.component.html',
  styleUrls: ['./new-event-button.component.scss']
})
export class NewEventButtonComponent  {

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  generateEvent(): void {
    const cardEventExample: CardEvent = {
      id: null,
      host: 'Juan',
      attendees: '50',
      when: 'EveryDay',
      where: 'At my desk',
      what: 'Orgy'
    };
    this.lunchManagerService.generateEventCard(cardEventExample).pipe(
      take(1),
      tap(console.log)
    ).subscribe();
  }

}
