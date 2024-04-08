import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string): any[] {
    // Implement your filtering logic here
    // This example filters an array of strings based on the filterString
    if (!filterString) {
      return value;
    }
    return value.filter((item) =>
      item.toLowerCase().includes(filterString.toLowerCase()),
    );
  }
}
