import * as express from 'express';
import Router from './router';

import ErrorController from '../controllers/Error/error.controller';

class ErrorRouter extends Router {
  public static setRoutes(router: express.Router) {
    router.get('*', (req, res, next) => new ErrorController(req, res, next).show());
  }
}

export default ErrorRouter;
