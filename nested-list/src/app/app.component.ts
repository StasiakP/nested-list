import { Component, OnInit } from '@angular/core';
import tasksJson from '../assets/data.json';
import { Task } from 'src/interfaces/task';
import {
  faArrowTurnUp,
  faCalendar,
  faFlag,
  faSignal,
} from '@fortawesome/free-solid-svg-icons';
import { PriorityEnum } from './enums/priorityEnum';
import { StatusEnum } from './enums/statusEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nested-list';
  tasks: Task[] = tasksJson;

  priorityEnum = PriorityEnum;
  statusEnum = StatusEnum;

  faCalendar = faCalendar;
  faFlag = faFlag;
  faSignal = faSignal;
  faArrowTurnUp = faArrowTurnUp;

  ngOnInit() {
    console.log('Data', this.tasks);
    const tasks = this.tasks as Task[];
    console.log('Tasks', tasks);
  }
}
