const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
//const todoRoutes = express.Router();
const PORT =  process.env.PORT || 3001;

let Todo = require("./todo.model.js");

app.use(cors());
app.use(bodyParser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todos");
// mongoose.connect("mongodb://127.0.0.1:27017/todos", { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once("open", function () {
//     console.log("MongoDB database connection established successfully");
// })
//heroku requires a / route
app.get("/",function (req, res) {
    res.send("hello")
})
app.get("/todos",function (req, res) {
    Todo.find(function (err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

app.get("/todos/:id",function (req, res) {
    let id = req.params.id;
    Todo.findById(id, function (err, todo) {
        res.json(todo);
    });
});

app.post("/todos/add",function (req, res) {
    //let todo = new Todo(req.body);
    Todo.create(req.body)
        .then(todo => {
            res.status(200).json({ "todo": "todo added successfully" });
        })
        .catch(err => {
            res.status(400).send("adding new todo failed");
        });
});

app.post("/todos/update/:id",function (req, res) {
    Todo.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;

            todo.save().then(todo => {
                res.json("Todo updated");
            })
            .catch(err => {
                res.status(400).send("Update mot possible");
            });
    });
});


app.listen(PORT, function () {
    console.log("Server is runnung on Port:" + PORT);
});
