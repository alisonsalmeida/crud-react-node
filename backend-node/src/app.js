import express from 'express';
import routes from './routes';
import './database';

const cors = require('cors');

class App {
  constructor() {
    this.server = express();

    this.cors();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

  cors() {
    this.server.use(cors());
  }
}

export default new App().server;
