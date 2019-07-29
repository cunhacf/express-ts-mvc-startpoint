import * as express from 'express';

class Controller {
  public req: express.Request;

  public res: express.Response;

  public next: express.NextFunction;

  constructor(req: express.Request, res: express.Response, next?: express.NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }

  public show() {
    this.res.send('Put something useful here :)');
  }
}

export default Controller;
