const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING || 'mysql://sql12263196:8ZjNYYzMhy@sql12.freesqldatabase.com/sql12263196')
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

module.exports = sequelize;