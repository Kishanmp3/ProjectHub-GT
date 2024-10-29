const express = require("express");
const database = require("./connect");
const ObjectId = require("mongodb").ObjectId;

let postRoutes = express.Router();

//#1- Retrieve All
//https:localhost:3000/posts
postRoutes.route("/posts").get(async (request, response) => {
  let db = database.getDb();
  let data = await db.collection("posts").find({}).toArray();
  if (data.length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found:(");
  }
});

//#2- Retrieve One
postRoutes.route("/posts/:id").get(async (request, response) => {
  let db = database.getDb();
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found:(");
  }
});

//#3 Create One

postRoutes.route("/posts").post(async (request, response) => {
  let db = database.getDb();
  let mongoObject = 
  let data = await db
    .collection("posts")
    .findOne({ _id: new ObjectId(request.params.id) });
  if (Object.keys(data).length > 0) {
    response.json(data);
  } else {
    throw new Error("Data was not found:(");
  }
});
