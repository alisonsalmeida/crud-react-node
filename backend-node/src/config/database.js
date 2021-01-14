module.exports = {
  dialect: 'postgres',
  host: 'crud_database',
  port: '5432',
  username: 'postgres',
  password: 'icts',
  database: 'crud',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
