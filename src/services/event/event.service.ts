import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs';
import { Event } from '../../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private readonly apiService: ApiService) { }

  getEvents(): Observable<Event[]> {
    return this.apiService.request<Event[]>('GET', '/events');
  }
}
