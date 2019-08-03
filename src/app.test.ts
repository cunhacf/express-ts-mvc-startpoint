/* eslint no-unused-expressions: 0 */
import { describe, it } from 'mocha';
import * as chai from 'chai';

import App from './app';

import chaiHttp = require('chai-http');

const { app } = new App();

chai.use(chaiHttp);

describe('Server', () => {
  it('it should respond with 200 to GET /', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res).to.have.status(200);
      });
  });
});
