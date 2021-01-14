import Sequelize from 'sequelize';

import User from '../app/models/User';
import Produto from '../app/models/Produto';

import databaseConfig from '../config/database';

const models = [Produto, User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
