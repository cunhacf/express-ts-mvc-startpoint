import Controller from '../controller';

class IndexController extends Controller {
  public show() {
    this.res.send({ version: '1.0' });
  }
}

export default IndexController;
