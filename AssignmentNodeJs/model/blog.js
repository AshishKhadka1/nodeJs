module.exports = (sequelize,Sequelize) => {
    const Blog = sequelize.define("blog", {
      name: {
        type: Sequelize.STRING,
      },

      description: {
        type: Sequelize.STRING
      },
    });
  
    return Blog;
  };
  