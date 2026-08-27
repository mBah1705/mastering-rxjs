import { httpResource } from '@angular/common/http';
import { inject, resource, Service, signal } from '@angular/core';
import { UserService } from '../user.service';

@Service()
export class TodoService {
    private readonly userService = inject(UserService);
    userId = this.userService.userId;

    userTodos = httpResource<Todo[]>(() => `https://jsonplaceholder.typicode.com/todos?userId=${this.userId()}`);
}

export interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}