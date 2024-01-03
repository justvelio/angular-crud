import * as express from 'express';

import { UserData } from './../data/user.data';

import { UserDto } from './../models/user.model';

export class UserController {

  private static instance: UserController;

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }

    return UserController.instance;
  }

  constructor() {
    this.data = UserData.getInstance();
  }

  private data: UserData;

  public findAll = (req: express.Request, res: express.Response): void => {
    const users = this.data.findAll();
    res.json(users);
  }

  public findById = (req: express.Request, res: express.Response): void => {
    try {
      const id = req.params.id;
      const user = this.data.findById(id);
      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  public create = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const userDto: UserDto = req.body;
      const user = await this.data.create(userDto);

      res.status(201).json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  public update = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const id = req.params.id;
      const userDto: UserDto = req.body;

      const user = await this.data.update(id, userDto);

      res.json(user);
    } catch (error) {
      res.json({ error: error.message });
    }
  }

  public delete = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
      const id = req.params.id;
      await this.data.delete(id);
      res.status(204).send();
    } catch (error) {
      res.json({ error: error.message });
    }
  }

}
