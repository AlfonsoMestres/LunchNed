import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap, mapTo } from 'rxjs/operators';

import { CardEvent } from '../model/card-event.interface';

@Injectable({
  providedIn: 'root'
})
export class LunchManagerServiceService {

  constructor(private http: HttpClient) { }

  fetchEventCards(): Observable<CardEvent[]> {
    const url = `https://o8tyzdwyk8.execute-api.eu-west-1.amazonaws.com/test/events`;

    return this.http.get<any>(url).pipe(
      tap(() => `Loading card events`),
      map(struc => {
        if (struc && struc.Items) {
          const response: CardEvent[] = [];
          struc.Items.forEach(element => {
            response.push({
              id: element.id.S,
              attendees: element.attendees ? element.attendees.N : '0',
              host: element.host.S,
              what: element.what.S,
              when: element.when.N * 1000,
              where: element.where.S
            } as CardEvent);
          });
          return response;
        }
      }),
      retry(2),
      catchError(() => throwError('Failed loading card events'))
    );
  }

  generateEventCard(cardInfo: CardEvent): Observable<void> {
    const url = `https://o8tyzdwyk8.execute-api.eu-west-1.amazonaws.com/test/events`;

    const request = {
      host: cardInfo.host,
      what: cardInfo.what,
      where: cardInfo.where,
      when: cardInfo.when
    };

    return this.http.post(url, request).pipe(
      mapTo(undefined),
      catchError((err: HttpErrorResponse) => throwError(err.statusText))
    );
  }

  addAttendee(eventId: string): Observable<void> {
    const url = `https://o8tyzdwyk8.execute-api.eu-west-1.amazonaws.com/test/events/${eventId}`;

    return this.http.post(url, null).pipe(
      mapTo(undefined),
      catchError((err: HttpErrorResponse) => throwError(err.statusText))
    );
  }

}
