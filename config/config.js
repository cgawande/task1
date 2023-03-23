const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecom', 'root', '12345', {
  host: 'localhost',
  dialect: 'mysql',
});


(async () => {
  try {
    await sequelize.authenticate();
    await  sequelize.sync()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports={sequelize}