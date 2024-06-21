import { Component, HostListener, OnInit } from '@angular/core';
import tasksJson from '../assets/data.json';
import { Task, TaskExpandable } from 'src/interfaces/task';
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
  @HostListener('window:resize', ['$event'])
  @HostListener('window:load', ['$event'])
  onResize(event: any) {
    const windowsSize = event.target.innerWidth ?? window.innerWidth;
    this.isMobile = windowsSize <= 768;
  }

  isMobile = false;

  title = 'nested-list';
  tasks: Task[] = tasksJson;
  tasksExpandable: TaskExpandable[] = [];

  priorityEnum = PriorityEnum;
  statusEnum = StatusEnum;

  faCalendar = faCalendar;
  faFlag = faFlag;
  faSignal = faSignal;
  faArrowTurnUp = faArrowTurnUp;

  ngOnInit() {
    this.tasksExpandable = this.tasks.map((task) => ({
      ...this.mapTaskToTaskExpandable(task),
    }));
  }

  public toggleRowVisibility(id: string) {
    function hideSubChildren(taskList: TaskExpandable[]) {
      taskList.forEach((childTask) => {
        childTask.isExpanded = false;
        if (childTask.childTasks && childTask.childTasks.length > 0) {
          hideSubChildren(childTask.childTasks);
        }
      });
    }
    const task = this.find(id);
    if (task) {
      if (task.isExpanded) {
        task.isExpanded = false;
        if (task.childTasks && task.childTasks.length > 0) {
          hideSubChildren(task.childTasks);
        }
      } else {
        task.isExpanded = true;
      }
    }
  }

  private mapTaskToTaskExpandable(task: Task): TaskExpandable {
    return {
      id: task.id,
      taskNumber: task.taskNumber,
      name: task.name,
      description: task.description,
      status: task.status,
      priority: task.priority,
      percentageOfProgress: task.percentageOfProgress,
      startDate: task.startDate,
      endDate: task.endDate,
      childTasks: task.childTasks.length
        ? task.childTasks.map((child) => this.mapTaskToTaskExpandable(child))
        : [],
      isExpanded: true,
    };
  }

  private find(id: string): TaskExpandable | undefined {
    function iterate(task: TaskExpandable) {
      if (task.id === id) {
        result = task;
        return true;
      }
      return task.childTasks && task.childTasks.some(iterate);
    }

    let result;
    this.tasksExpandable.some(iterate);
    return result;
  }
}
