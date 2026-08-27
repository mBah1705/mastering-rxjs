import { httpResource } from '@angular/common/http';
import { Service, signal } from '@angular/core';

@Service()
export class UserService {
    userId = signal(1);
    users = httpResource<User[]>(() => 'https://jsonplaceholder.typicode.com/users');
    user = httpResource<User>(() => `https://jsonplaceholder.typicode.com/users/${this.userId()}`);
}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}