import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { FormModalComponentModule } from '../shared/ui/form-modal.component';


import { ChecklistService } from '../shared/data-access/checklist.service';
import { Checklist } from '../shared/interfaces/checklist';
import { ChecklistListComponentModule } from './ui/checklist-list.component';


@Component({
  selector: 'app-home',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title> Home </ion-title>
        <ion-buttons slot="end">
            <ion-button 
            (click)="formModalIsOpen$.next(true)"
            >
                <ion-icon name="add" slot="icon-only"></ion-icon>
            </ion-button >
        </ion-buttons>
      </ion-toolbar>

    </ion-header>
    <ion-content>

        <!-- 
            We need the ngIf b/c app-checklist-list expects Checklist[] in the Input
            All observable streams are treated as being potentially null in case they haven't emitted values yet
            checklist$ is derived from BehaviorSubject. 
            BehaviorSubject emits immediately (so our value will never be null/falsey)
            but Typescript doesn't know that, so we use the ngIf to tell typescript not to render the component if the value of checklist$ is falsey
            if Typescript did know this, we could simply use 
            <app-checklist-list
                [checklists]="checklists$ | async"
            ></app-checklist-list>
        -->
        <app-checklist-list
        *ngIf="checklists$ | async as checklists"
        [checklists]="checklists"
        ></app-checklist-list>

        <!-- The non-null assertion operator is another Option to deal to with this -->
        <!-- This is riskier because it relies on you to ensure you don't accidentally provide a null -->
        <!-- <app-checklist-list
        [checklists]="(checklists$ | async)!"
      ></app-checklist-list> -->

        <!-- Another app-checklist-list without the * on ngIf (syntactic sugar) -->
        <!-- There is something wrong with this ngIf, but I can't figure out what it is -->
        <!-- <ng-template [ngIf]="checklists$ | async as checklists">
            <app-checklist-list [checklists]="checklists"></app-checklist-list>
        </ng-template> -->

    
        <ion-modal 
        [isOpen]="formModalIsOpen$ | async" 
        [canDismiss]="true"
        (didDismiss)="formModalIsOpen$.next(false)"
        >
            <ng-template>
                <app-form-modal
                title="Create Checklist"
                [formGroup]="checklistForm"
                (save)="addChecklist()"
                ></app-form-modal>

            </ng-template>
        </ion-modal>
    </ion-content>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {
   
    formModalIsOpen$ = new BehaviorSubject<boolean>(false);
    checklistService = new ChecklistService;
    checklists$ = this.checklistService.getChecklists();

    checklistForm = this.fb.nonNullable.group({
        title: ['', Validators.required],
      });

      addChecklist(){
        let chkbasic = this.checklistForm.getRawValue()
        let chkFull: Checklist = {...chkbasic, id: Date.now().toString()} 
        this.checklistService.add(chkFull) 
      }
      constructor(private fb: FormBuilder){}

}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormModalComponentModule,
    ChecklistListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
  declarations: [HomeComponent],
})
export class HomeComponentModule {}