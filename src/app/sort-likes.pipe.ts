import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortLikes'
})
export class SortLikesPipe implements PipeTransform {

  transform(value: Array<any>, ...args: unknown[]): unknown {
    return value.sort((a,b)=>{
      let x=a.likes;
      let y=b.likes;
      if(x<y){
        return -1;
      }else{
        return 1;
      }
    })
  }

}
