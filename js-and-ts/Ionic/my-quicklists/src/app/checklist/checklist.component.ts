import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';
import { ChecklistService } from '../shared/data-access/checklist.service';
import { Checklist } from '../shared/interfaces/checklist';
import { FormModalComponentModule } from '../shared/ui/form-modal.component';
import { ChecklistItemService } from './data-access/checklist-item.service';
import { ChecklistItemListComponentModule } from './ui/checklist-item-list.component';


@Component({
  selector: 'app-checklist',
  template: `
    <ng-container *ngIf="vm$ | async as vm"
      >
      
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>
            <!-- Interesting that when I comment it navigates me back to home. I think it destroys the component when the title fails to be found -->
            <!-- {{ vm.checklistAndItems.title }} <- val -->
          </ion-title>
          <ion-buttons slot="end">
            <ion-button (click)="formModalIsOpen$.next(true)">
              <ion-icon name="add" slot="icon-only"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content> 
      <app-checklist-item-list>
        [checklistItems]="vm.items"
      </app-checklist-item-list>
      <ion-modal
          [isOpen]="vm.formModalIsOpen"
          [canDismiss]="true"
          (ionModalDidDismiss)="formModalIsOpen$.next(false)"
        >
          <ng-template>
            <app-form-modal
              title="Create item"
              [formGroup]="checklistItemForm"
              
            ></app-form-modal>
          </ng-template>
        </ion-modal>
      </ion-content>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChecklistComponent {
  constructor(
    private route: ActivatedRoute, 
    private fb: FormBuilder,
    private checklistService: ChecklistService, 
    private checklistItemService: ChecklistItemService
    ) {
      console.log("Detail component rendered")
    }

    formModalIsOpen$ = new BehaviorSubject<boolean>(false);
    checklistItemForm = this.fb.nonNullable.group({
      title: ['Default Value', Validators.required],
    });

  checklistAndItems$ = this.route.paramMap.pipe(
      tap((v) => console.log(v)),
      tap((v) => console.log(v.get('id') as string, '<-should be id')),
      switchMap((params) => 
        combineLatest([
          this.checklistService
            .getChecklistById(params.get('id') as string)
            .pipe(filter((checklist):checklist is Checklist => Boolean(checklist))),
          this.checklistItemService
            .getItemsByChecklistId(params.get('id') as string),
        ])
      ),
    );

    vm$ = combineLatest([this.checklistAndItems$, this.formModalIsOpen$]).pipe(
      map(([[checklist, items], formModalIsOpen]) => ({
        checklist,
        items,
        formModalIsOpen,
      }))
    );

    addChecklistItem(checklistId: string){
      console.log("addChecklistItem")
      this.checklistItemService.add(
      this.checklistItemForm.getRawValue(),
      checklistId
    );
   }
}

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormModalComponentModule,
    ChecklistItemListComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: ChecklistComponent,
      },
    ])
  ],
  declarations: [ChecklistComponent],
  exports:[ChecklistComponent]
})
export class ChecklistComponentModule {}