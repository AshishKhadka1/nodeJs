module.exports = (sequelize, Sequelize) => {
    const Auth = sequelize.define("auth", {
        email: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        }
    })
    return Auth;
}