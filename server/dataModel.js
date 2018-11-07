const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
let dataJson = require('../src/data.json')
const Data = sequelize.define('data', {
    _id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    firstContact: {
        type: Sequelize.STRING
    },
    emailType: {
        type: Sequelize.STRING
    },
    sold: {
        type: Sequelize.BOOLEAN
    },
    owner: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    }
})

// for (let i=0; i<dataJson.length;i++){
//     Data.create({
//         _id: dataJson[i]._id,
//         name: dataJson[i].name,
//         email: dataJson[i].email,
//         firstContact: dataJson[i].firstContact,
//         emailType: dataJson[i].emailType,
//         sold: dataJson[i].sold,
//         owner: dataJson[i].owner,
//         country: dataJson[i].country
//     })
// }
// Data.sync();
module.exports= Data;