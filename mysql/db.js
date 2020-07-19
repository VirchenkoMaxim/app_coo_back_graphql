const Sequelize = require('sequelize');

const sequelize = new Sequelize('heroku_df9ca18dfbaf1c3', 'b6e2d6376b8d2b', 'ba5bbcf0', {
    dialect: 'mysql',
    host: 'us-cdbr-east-02.cleardb.com',
    define: {
        timestamps: false
    },
})

const Stats = require('./Stats')(sequelize);
const Users = require('./Users')(sequelize);

Users.hasMany(Stats);
Stats.belongsTo(Users);

module.exports = {
    sequelize: sequelize,
    stats: Stats,
    users: Users
}


