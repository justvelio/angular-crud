import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

import { User, UserDto } from './../models/user.model';

export class UserData {

  private static instance: UserData;

  public static getInstance(): UserData {
    if (!UserData.instance) {
      UserData.instance = new UserData();
    }

    return UserData.instance;
  }

  constructor() {
    fs.readFile('./src/db/db.json', 'utf8', (error, content) => {
      if (error) {
        // tslint:disable-next-line:no-console
        console.log(error);
        return;
      }

      this.users = JSON.parse(content).users;
    });
  }

  private users: User[];

  public findAll(): User[] {
    return this.users;
  }

  public findById(id: string): User {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new Error(`Unable to find user with id: ${id}`);
    }

    return user;
  }

  public async create(userDto: UserDto): Promise<User> {
    try {
      const id = uuidv4();
      const user: User = {
        id,
        email: userDto.email,
        firstName: userDto.firstName,
        lastName: userDto.lastName
      };

      this.users.push(user);
      this.updateDB();

      return user;
    } catch (error) {
      throw error;
    }
  }

  public async update(id: string, userDto: UserDto): Promise<User> {
    try {
      const index = this.users.findIndex(u => u.id === id);

      if (index < 0) {
        throw new Error(`Unable to find user with id: ${id}`);
      }

      this.users[index].email = userDto.email;
      this.users[index].firstName = userDto.firstName;
      this.users[index].lastName = userDto.lastName;

      this.updateDB();

      return this.users[index];
    } catch (error) {
      throw error;
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      const index = this.users.findIndex(u => u.id === id);

      if (index < 0) {
        throw new Error(`Unable to find user with id: ${id}`);
      }

      this.users.splice(index, 1);
      this.updateDB();
    } catch (error) {
      throw error;
    }
  }

  private updateDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      const updatedJson = {
        users: this.users
      };

      const content = JSON.stringify(updatedJson);

      fs.writeFile('./src/db/db.json', content, (error) => {
        if (error) {
          reject(error);
          return;
        }

        resolve();
      });
    });
  }

};
