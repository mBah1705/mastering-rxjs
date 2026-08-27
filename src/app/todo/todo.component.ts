import { Component, computed, inject, linkedSignal, signal } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { UserService } from '../user.service';

@Component({
  imports: [],
  selector: 'app-todo',
  styleUrl: './todo.component.css',
  templateUrl: './todo.component.html',
})
export class TodoComponent {
  private readonly userService = inject(UserService);
  private readonly todoService = inject(TodoService);

  user = this.userService.user;
  users = this.userService.users;
  userTodos = linkedSignal(() => this.todoService.userTodos.value() || []);

  showOnlyIncomplete = signal(false);

  filteredTodos = computed(() => this.showOnlyIncomplete() ? this.userTodos()?.filter(t => !t.completed) : this.userTodos());

  onUserIdChange(event: Event) {
    const newUserId = Number((event.target as HTMLSelectElement).value);
    this.userService.userId.set(newUserId);
  }

  onFilterTodos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).checked;
    this.showOnlyIncomplete.set(filterValue);
  }

  onChangeTodoStatus(todo: Todo, event: Event) {
    const newStatus = (event.target as HTMLInputElement).checked;
    
    const updatedTodo = { ...todo, completed: newStatus };
    const updatedTodos = this.userTodos().map(t => t.id === todo.id ? updatedTodo : t);
    this.userTodos.set(updatedTodos);
  }
}
