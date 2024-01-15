const {Sequelize, DataTypes} = require('sequelize')        
const dbConfig = require('../dbConfig/dbconfig.js')

const sequelize = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            accurate: dbConfig.pool.accurate,
            idle: dbConfig.pool.idle,
        },
    }
);

sequelize
    .authenticate()
    .then(()=>{         // .then : promise ho
        console.log("connection to database successfully");
    })

    .catch((err)=>{
        console.log(err);
    })
    
    const db = {};

    db.Sequelize = Sequelize;
    db.sequelize = sequelize;

    db.blogs = require("./../model/blog.js")(sequelize, DataTypes);
    db.auth = require("./../model/auth.js")(sequelize, DataTypes);

       module.exports = db;
