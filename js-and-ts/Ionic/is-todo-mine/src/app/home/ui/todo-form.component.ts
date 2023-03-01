import { ChangeDetectionStrategy, Component, NgModule, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EventEmitter } from '@angular/core';
import { Todo } from 'src/app/shared/interfaces/todo';

@Component({
  selector: 'app-todo-form',
  template: `
    <form [formGroup]="todoForm" (ngSubmit)="handleSubmit()">
      <ion-input
        type="text"
        formControlName="title"
        placeholder="title..."
      ></ion-input>
      <ion-input
        type="text"
        formControlName="description"
        placeholder="description..."
      ></ion-input>
      <ion-button type='submit'>Add ToDo</ion-button>
    </form>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoFormComponent {
  @Output() todoSubmitted = new EventEmitter<Todo>();

  public todoForm = this.fb.group({
    title: ['', Validators.required],
    description: [''],
  });
  constructor(private fb: FormBuilder) {}

  handleSubmit(){
    const value = this.todoForm.value;
    if (this.todoForm.valid && value.title && value.description){
      const todo: Todo = {
        id: Date.now().toString(),
        title: value.title,
        description: value.description,
      };
      this.todoSubmitted.emit(todo);
    }
  }
}

@NgModule({
  declarations: [TodoFormComponent],
  exports: [TodoFormComponent],
  imports: [IonicModule, ReactiveFormsModule],
})
export class TodoFormComponentModule {}