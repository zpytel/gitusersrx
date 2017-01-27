import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, args:string): any {
    let length = parseInt(args || '20', 10),
			suffix = '...';
    
		if (value.length <= length) {
			return value;
		}
    let pre=value.substring(0,length).replace('(','')
		return pre + suffix;
  }

}
