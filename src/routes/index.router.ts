import * as express from 'express';
import Router from './router';

import IndexController from '../controllers/Index/index.controller';

class IndexRouter extends Router {
  public static setRoutes(router: express.Router) {
    router.get('/', (req, res, next) => new IndexController(req, res, next).show());
  }
}

export default IndexRouter;
