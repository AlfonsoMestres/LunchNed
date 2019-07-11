import { Component, OnInit } from '@angular/core';
import { LunchManagerServiceService } from 'src/app/services/lunch-manager-service.service';

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
    alert('clicked');
  }

}
