const express = require ('express')
const app = express()

const db = require('./model/index')
db.sequelize.sync({ force: true})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const Routes = require("./routes/blogs.js")
app.use("/api/items", Routes)

let port = 4000
app.listen(port, ()=>{
    console.log(`Server is started in ${port}`)
})

































/*
    Documentation:
    Running the API:

    Ensure that you have Node.js and npm installed on your pc.
    Install all the required dependencies with npm install.
    Set up your MySQL database and update the configuration in dbConfig/dbConfig.js.
    Run the application with npm start.
    The server will start on port 3000.

    Testing the API:

    Use tools like Postman or ThunderClient to test the CRUD operations on the /api/items endpoint.
    Create a blog: POST /api/items/create
    Get all blogs: GET /api/items/get
    Get a specific blog: GET /api/items/get/:id
    Update a blog: PUT /api/items/update/:id
    Delete a blog: DELETE /api/items/delete/:id

    Error Handling:

    The code includes error handling for database connections and CRUD operations.
    If there are issues, error messages will be logged to the console.
    Pay attention to the console logs for any errors or successful messages during startup.
    
    */