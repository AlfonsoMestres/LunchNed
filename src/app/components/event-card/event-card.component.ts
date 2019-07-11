import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() id: string;
  @Input() host: string;
  @Input() attendees: string;
  @Input() when: string;
  @Input() where: string;
  @Input() what: string;

  constructor() { }

  ngOnInit() {

  }

  generateEvent(): void {
    // const cardEventExample: CardEvent = {
    //   id: null,
    //   host: 'Juan',
    //   attendees: '50',
    //   when: 'EveryDay',
    //   where: 'At my desk',
    //   what: 'Orgy'
    // };

    // this.lunchManagerService.generateEventCard(cardEventExample).pipe(
    //   take(1),
    //   tap(console.log)
    // ).subscribe();
    this.showForm = true;
  }
  
}
