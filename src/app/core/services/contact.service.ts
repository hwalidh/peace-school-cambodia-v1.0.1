import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  sendMessage(message: ContactMessage): Observable<boolean> {
    // Simulate API call
    return of(true).pipe(delay(1000));
  }
}