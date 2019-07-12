import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { LunchManagerServiceService } from '../../services/lunch-manager-service.service';
import { CardEvent } from '../../model/card-event.interface';


@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
  newEventForm: FormGroup;
  submitted = false;

  @Output() closed: EventEmitter<boolean> = new EventEmitter();
  @Output() newEvent: EventEmitter<boolean> = new EventEmitter();

  cardRequest: CardEvent[] = [];
  cards$: Observable<CardEvent[]>;

  constructor(
    private fb: FormBuilder,
    private lunchManagerService: LunchManagerServiceService) {
      this.newEventForm = fb.group({
        hostName: fb.control('', [Validators.required]),
        when: fb.control('', [Validators.required]),
        where: fb.control('', [Validators.required]),
        what: fb.control('', [Validators.required])
      });
  }

  ngOnInit() {
    this.newEventForm = this.fb.group({
      hostName: this.fb.control('', [Validators.required]),
      when: this.fb.control('', [Validators.required]),
      where: this.fb.control('', [Validators.required]),
      what: this.fb.control('', [Validators.required])
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (!this.newEventForm.valid) {
      return;
    }

    const cardEventExample: CardEvent = {
      id: null,
      host: this.hostName.value,
      attendees: '1',
      when: this.when.value,
      where: this.where.value,
      what: this.what.value
    };

    this.lunchManagerService.generateEventCard(cardEventExample).pipe(
      take(1)
    ).subscribe();

    this.resetForm();
    this.newEvent.emit(true);
  }

  closeForm(): void {
    this.resetForm();
    this.closed.emit(false);
  }

  resetForm(): void {
    this.submitted = false;
    this.newEventForm.reset();
  }

  get fc() { return this.newEventForm.controls; }

  get hostName(): FormControl {
    return this.newEventForm.get('hostName') as FormControl;
  }

  get when(): FormControl {
    return this.newEventForm.get('when') as FormControl;
  }

  get where(): FormControl {
    return this.newEventForm.get('where') as FormControl;
  }

  get what(): FormControl {
    return this.newEventForm.get('what') as FormControl;
  }

}
