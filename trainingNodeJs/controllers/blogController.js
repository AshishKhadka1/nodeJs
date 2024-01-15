const { where } = require("sequelize");
const {blogs} = require("../model/index");

exports.createBlog = async (req, res) => {
    console.log(req);
    let data = {
        name : req.body.name,
        desc : req.body.desc,
    };
    let createdBlog = await blogs.create(data);
    if(createdBlog){
        res.status(200).json({
            data : createdBlog,
            message : "created Successfully"
        })
    }
    console.log(createdBlog);
};

exports.getBlogs = async (req, res) => {
    // get all the blog posts from the database and send them back to the client
    let result = await blogs.findAll();
    res.status(200).send(result);
};

exports.getBlogsById = async (req, res) => {
    // get all the blog posts from the database and send them back to the client
    let result = await blogs.findByPk(req.params.id);
    res.status(200).send(result);
};

exports.deleteBlogsById = async (req, res) => {
    // get all the blog posts from the database and send them baack to the client
    let result = await blogs.destroy({
        where: {
            id : req.paraams.id,
        }
    })

    res.status(200).json({
        success:true,
        message:"Deleted successfully",

    });
};

exports.updateBlog = async (req, res) => {
    console.log(req.params);


    // // get all the blog posts from the database[] and send them back to the client
    let result = await blogs.update({...req.body}, {where: {
        id: req.params.id
    }});
    res.status(200).json({
        success: true,
        message: "updated successfully"
    })
};