import { Component, OnInit } from '@angular/core';
import { LunchManagerServiceService } from 'src/app/services/lunch-manager-service.service';
import { CardEvent } from 'src/app/model/card-event.interface';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
  }

  generateEvent(): void {
    const cardEventExample: CardEvent = {
      id: null,
      host: 'Juan',
      attendees: '50',
      when: 'EveryDay',
      where: 'At my desk',
      what: 'Orgy'
    };
    this.lunchManagerService.generateEventCard(cardEventExample);
  }

}
