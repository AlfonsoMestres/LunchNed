import { Component, OnInit } from '@angular/core';
import { LunchManagerServiceService } from './services/lunch-manager-service.service';
import { Subject, Observable } from 'rxjs';
import { CardEvent } from './model/card-event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
    this.cards$ = this.lunchManagerService.fetchEventCards();
  }

}
