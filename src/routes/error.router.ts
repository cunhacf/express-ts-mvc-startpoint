import * as express from 'express';

import ErrorController from 'controllers/Error/error.controller';

import Router from './router';

class ErrorRouter extends Router {
  public static setRoutes(router: express.Router) {
    router.get('*', (req, res, next) => new ErrorController(req, res, next).show());
  }
}

export default ErrorRouter;
