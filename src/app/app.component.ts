import { Component, OnInit } from '@angular/core';
import { LunchManagerServiceService } from './services/lunch-manager-service.service';
import { Subject, Observable } from 'rxjs';
import { CardEvent } from './model/card-event.interface';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;
  showForm: boolean;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
    this.cards$ = this.lunchManagerService.fetchEventCards();
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
