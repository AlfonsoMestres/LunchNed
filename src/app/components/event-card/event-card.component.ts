import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LunchManagerServiceService } from 'src/app/services/lunch-manager-service.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Output() attendee: EventEmitter<boolean> = new EventEmitter();
  @Input() id: string;
  @Input() host: string;
  @Input() attendees: string;
  @Input() when: string;
  @Input() where: string;
  @Input() what: string;

  constructor(private lunchManagerService: LunchManagerServiceService) { }

  ngOnInit() {
  }

  addAttendee(): void {
    this.lunchManagerService.addAttendee(this.id).pipe(
      take(1),
    ).subscribe((res) => {
      this.attendee.emit(true);
    });
  }

}
