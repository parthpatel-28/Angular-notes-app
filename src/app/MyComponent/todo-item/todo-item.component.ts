import { Component, EventEmitter, input } from '@angular/core';
import { Todo } from '../../Todo';
import { Input, Output } from '@angular/core';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: Todo;
  @Output() todoDelete = new EventEmitter<Todo>()

  OnClick(todo: Todo){
console.log(todo.title);
this.todoDelete.emit(todo)

  }

}
