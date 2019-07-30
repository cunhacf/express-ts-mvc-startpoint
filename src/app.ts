/* eslint no-console: 0 */
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as helmet from 'helmet';
import * as hbs from 'express-hbs';
import * as path from 'path';

import IndexRouter from 'routes/index.router';
import ErrorRouter from 'routes/error.router';

require('dotenv').config();

class App {
  public ip: string = process.env.IP || '127.0.0.1';

  public port: string = process.env.PORT || '8080';

  public app: express.Application;

  private router: express.Router;

  private mongoose: mongoose.Mongoose;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.mongoose = mongoose;

    this.initMiddlewares();
    this.initMongoose();
    this.initRoutes();
  }

  private initMiddlewares() {
    // View engine setup
    this.app.engine('hbs', hbs.express4({
      partialsDir: path.join(__dirname, '/src/views/partials'),
      defaultLayout: path.join(__dirname, 'src/views/layout'),
    }));
    this.app.set('view engine', 'hbs');
    this.app.set('views', path.join(__dirname, 'src/views'));

    this.app.set('json spaces', 4);

    // Helmet adds some HTTP headers
    // that are good for security.
    this.app.use(helmet());

    this.app.use(bodyParser.json());
  }

  private initMongoose() {
    if (!process.env.MONGO_URI) return;

    this.mongoose.connect(process.env.MONGO_URI, {
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASS,
      family: 4,
      useNewUrlParser: true,
    });
  }

  private initRoutes() {
    IndexRouter.setRoutes(this.router);
    ErrorRouter.setRoutes(this.router);

    // Use the router middleware
    this.app.use('/', this.router);
  }

  public listen() {
    this.app.listen(this.port, (err: string) => {
      if (err) throw new Error(err);

      console.log(`Server running at: http://${this.ip}:${this.port}/`);
    });
  }
}

export default App;
