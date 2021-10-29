import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) { return ''; }

    let result = '';
    const words = value.split(' ');
    words.forEach((word) => {
      const capitalize = word.charAt(0).toUpperCase() + word.substring(1);
      result = result ? `${result} ${capitalize}` : capitalize;
    });

    return result;
  }
}