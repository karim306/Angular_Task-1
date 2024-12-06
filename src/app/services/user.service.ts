import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: { username: string; password: string }[] = [];

  constructor() {}

  // Add the registerUser method
  registerUser(username: string, password: string): void {
    if (this.isUsernameTaken(username)) {
      throw new Error('Username is already taken.');
    }

    this.addUser(username, password);
  }

  // Check if a username is already taken
  isUsernameTaken(username: string): boolean {
    return this.users.some((user) => user.username === username);
  }

  // Add a user to the users array
  addUser(username: string, password: string): void {
    this.users.push({ username, password });
  }
  deleteUser(index: number): void {
    if (index < 0 || index >= this.users.length) {
      throw new Error('Invalid index.');
    }
    this.users.splice(index, 1); // Remove the user at the specified index
  }
  // Retrieve the list of users
  getUsers(): { username: string; password: string }[] {
    return this.users;
  }
}
