import * as express from 'express';

import IndexController from 'controllers/Index/index.controller';

import Router from './router';

class IndexRouter extends Router {
  public static setRoutes(router: express.Router) {
    router.get('/', (req, res, next) => new IndexController(req, res, next).show());
  }
}

export default IndexRouter;
