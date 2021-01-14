import Sequelize, { Model } from 'sequelize';

class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        code: Sequelize.STRING,
        value: Sequelize.FLOAT,
        quantity: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
}

export default Produto;
