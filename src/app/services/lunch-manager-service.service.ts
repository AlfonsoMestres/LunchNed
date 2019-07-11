import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';

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
              host: element.host.S,
              what: element.what.S,
              when: element.when.S,
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

  generateEventCard(cardInfo: CardEvent): void {
    const url = `https://o8tyzdwyk8.execute-api.eu-west-1.amazonaws.com/test/events`;

    // const request = {
    //   host: userDetails.email,
    //   firstName: userDetails.name,
    //   lastName: userDetails.lastName,
    //   roles: [userDetails.role].filter(role => role !== UserRole.Analyst),
    //   password: userDetails.password,
    //   confirmPassword: userDetails.password
    // };

    this.http.post(url, cardInfo).pipe(
      tap(() => `Adding card event`),
      retry(2),
      catchError(() => throwError('Failed adding new card event'))
    );
  }

}
