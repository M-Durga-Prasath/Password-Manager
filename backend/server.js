const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");
const app = express();
app.use(express.json());
const port = 3000;

require("dotenv").config();
const host = process.env.HOST;
// console.log(process.env.HOST);
const client = new MongoClient(host);
client.connect();

app.get("/", async (req, res) => {
  const db = client.db("password");
  const collection = db.collection("password");
  const data = await collection.find({}).toArray();
  res.json(data);
});

app.delete("/", async (req, res) => {
  const id = req.query.id;
  // console.log(id)
  const db = client.db("password");
  const collection = db.collection("password");
  const body = { _id: new ObjectId(id) };
  const result = await collection.deleteOne(body);
  if (result.deletedCount === 0) {
    return res.status(404).json({ message: "Not Found" });
  }
  res.status(200).json({
    message: "Deleted successfully",
    deletedCount: result.deletedCount,
  });
});

app.post("/", async (req, res) => {
  const { website, username, password } = req.body;

  const result = await client.db("password").collection("password").insertOne({
    website,
    username,
    password,
  });

  if (result.acknowledged){
    res.status(201).json({
    message: "Inserted",
    id: result.insertedId,
  });
  }

  
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
