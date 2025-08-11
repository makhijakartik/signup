const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

const admin= new Schema({
    name: String,
    email: {type: String, unique:true},
    password: String
});

const course = new Schema({
    name: String,
    description: String,
    price: Number
});

const purchase = new Schema({
    CourseId : ObjectId,
    userId : ObjectId
});

const User = mongoose.model('User', user);
const Admin = mongoose.model('Admin', admin);
const Course = mongoose.model('Course', course);
const Purchase = mongoose.model('Purchase', purchase);

module.exports = {
    User,
    Admin,
    Course,
    Purchase
}