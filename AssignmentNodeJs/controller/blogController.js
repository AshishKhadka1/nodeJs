const { blogs } = require("../model");

exports.createBlog = async (req, res) => {
    try {
        let data = {
            name: req.body.name,
            desc: req.body.description,
        };
        let createdBlog = await blogs.create(data);

        if (createdBlog) {
            res.status(200).json({
                data: createdBlog,
                message: "Created Successfully",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        let result = await blogs.findAll();
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.getBlogsById = async (req, res) => {
    try {
        let result = await blogs.findByPk(req.params.id);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.deleteBlogsById = async (req, res) => {
    try {
        let result = await blogs.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (result === 1) {
            res.status(200).json({
                success: true,
                message: "Deleted Successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        let result = await blogs.update({ ...req.body },
            {
                where: {
                    id: req.params.id,
                },
            });

        if (result[0] === 1) {
            res.status(200).json({
                success: true,
                message: "Updated successfully",
            });
        } else {
            res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
