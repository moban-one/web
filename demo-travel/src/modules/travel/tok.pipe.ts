import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tok'
})
export class TokPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
