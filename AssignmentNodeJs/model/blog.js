module.exports = (sequelize,Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [1, 255],
        },
      },
      description: {
        type: Sequelize.STRING,
        validate: {
          len: [0, 1000],
        },
      },
    });
  
    return Blog;
  };
  