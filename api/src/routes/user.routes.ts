import * as express from 'express';

import { UserController } from './../controllers/user.controller';

export class UserRoutes {

  constructor(app: express.Application) {
    this.app = app;
    this.controller = UserController.getInstance();

    this.registerRoutes();
  }

  private app: express.Application;
  private controller: UserController;

  private registerRoutes(): void {
    this.app.get('/user', this.controller.findAll);
    this.app.get('/user/:id', this.controller.findById);
    this.app.post('/user', this.controller.create);
    this.app.patch('/user/:id', this.controller.update);
    this.app.delete('/user/:id', this.controller.delete);
  }

}