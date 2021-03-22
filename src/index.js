const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const { getAllUsers, postUser, getUser, updateUser, deleteUser } = require('./controllers/UserController');

//db connections

async function connectDB() {
    await mongoose.connect('mongodb://127.0.0.1:27017/node-crud', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
}

connectDB();

var router = express.Router();

//routes
app.get('/users', getAllUsers);
app.get('/user/:id', getUser);
app.post('/post', postUser);
app.put('/user/update', updateUser);
app.delete('/user/delete', deleteUser);
app.use('/', router);


app.listen(7777, () => {
    console.log('App running on port 7777');
})
