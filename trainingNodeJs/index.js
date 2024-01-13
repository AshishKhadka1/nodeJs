// copied from nojeJs(Express)
const express = require('express');
// const { testFunction, evenFn } = require('./controllers/testController');
const db = require('./model/index')
db.sequelize.sync({ force: false});
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const createRoutes = require("./routes/blog.js");

app.use("/api", createRoutes);



// app.get("/", (req, res) => {
//   res.json({
//     message: "hello world from / route",
//     });
// });


// app.get("/even", evenFn);
// app.get("/odd", testFunction);

let PORT = 3000
app.listen(PORT, () => {

    console.log(`server is started in ${PORT}`);
});






