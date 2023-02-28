import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, tap } from 'rxjs';
import { Checklist } from '../interfaces/checklist';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  private checklists$ = new BehaviorSubject<Checklist[]>([]);

  //There is something wrong wit htis method... possibly
  //the calling method is emitting an empty array
  //maybe it is because i define the id outside of the service??
  getChecklists(){
    console.log(this.checklists$, '<- getChecklists')
    let x = this.checklists$.asObservable();
    console.log(x, '<---after asObservable')
    return x;
  }

  add(checklist: Checklist){
    console.log(checklist, '<-checklist passed to add()')
    const newChkList = 
    {
      id: checklist.id,
      title: checklist.title,

    }
    this.checklists$.next([...this.checklists$.value, newChkList])
  }

  getChecklistById(id: string) {
    return this.getChecklists().pipe(
      tap((i) => console.log(i, '<- should be an observable')),
      //filter((checklists) => checklists.length > 0), // don't emit if checklists haven't loaded yet
      map((checklists) => checklists.find((checklist) => checklist.id === id))
    );
  }
}

// private generateID(title: string){
//   // NOTE: This is a simplistic id generator and will not handle things like special characters.
//   let slug = title.toLowerCase().replace(/\s+/g, '-');
//   // Check if the slug already exists
//   const matchingSlugs = this.checklists$.value.find(
//     (checklist) => checklist.id === slug
//   );
//   // If the title is already being used, add a string to make the id unique
//   if (matchingSlugs) {
//     slug = slug + Date.now().toString();
//   }
//   return slug;
// }


  // add(checklist: Checklist){
  //   console.log(checklist)
  //   checklist.id  = '1234'
  //   // const newChecklist = {
  //   //   ...checklist,
  //   //   id: this.generateID(checklist.title),
  //   // };
  //   let checklistArr: Checklist[] = [];
  //   checklistArr.push(checklist)
  //   this.checklists$.next(checklistArr)
  // }

  // add(checklist: Pick<Checklist, 'title'>){
  //   const newChecklist = {
  //     ...checklist,
  //     id: '1234'//this.generateID(checklist.title),
  //   };
  //   this.checklists$.next([...this.checklists$.value, newChecklist])
  // }
  

