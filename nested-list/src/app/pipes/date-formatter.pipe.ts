import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormatter',
})
export class DateFormatterPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return new Date(value).toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
      });
    }
    return '-';
  }
}
