import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() id: string;
  @Input() host: string;
  @Input() when: string;
  @Input() where: string;
  @Input() what: string;

  constructor() { }

  ngOnInit() {

  }

}
