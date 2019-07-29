import * as express from 'express';

class Router {
  public static setRoutes(router: express.Router) {
    router.get('/', (req: express.Request, res: express.Response) => res.send('You might want to set some routes here.'));
  }
}

export default Router;
