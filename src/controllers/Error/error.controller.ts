import Controller from '../controller';

class ErrorController extends Controller {
  public show() {
    this.res.status(404).send({ error: 'Not found' });
  }
}

export default ErrorController;
