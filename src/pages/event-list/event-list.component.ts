import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event/event.service';
import { CommonModule } from '@angular/common';
import { Event } from '../../models/event';

@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {

  events: Event[] = [];

  constructor(private readonly eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

}
