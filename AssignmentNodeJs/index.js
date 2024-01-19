const express = require ('express')
const app = express()

const db = require('./model/index')
db.sequelize.sync({ force: true})

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const createRoutes = require("./routes/blogs.js")
app.use("/api/items", createRoutes)

let port = 3000
app.listen(port, ()=>{
    console.log(`Server is started in ${port}`)
})

//Documentation:
/*1. Running the API:

    Ensure you have Node.js and npm installed.
    Install dependencies with npm install.
    Set up your MySQL database and update the configuration in dbConfig/dbConfig.js.
    Run the application with npm start.
    The server will start on port 3000.

2. Testing the API:

    Use tools like Postman or ThunderClient to test the CRUD operations on the /api/items endpoint.
    Create a blog: POST /api/items/create
    Get all blogs: GET /api/items/get
    Get a specific blog: GET /api/items/get/:id
    Update a blog: PUT /api/items/update/:id
    Delete a blog: DELETE /api/items/delete/:id

3. Error Handling:

    The code includes error handling for database connections and CRUD operations.
    If there are issues, error messages will be logged to the console.
    Pay attention to the console logs for any errors or successful messages during startup.*/