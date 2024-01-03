import * as express from 'express';

import { UserRoutes } from './user.routes';

export const register = (app: express.Application) => {

  const userRoutes = new UserRoutes(app);

};
