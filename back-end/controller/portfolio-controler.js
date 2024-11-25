// mongodb
const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const dbName = "Hire-Me-messages";
const db = client.db(dbName);
const collection = db.collection("hireMe");

const collection2 = db.collection("subscribes");

const getMessages = async (req, res) => {
  const findResult = await collection.find({}).toArray();
  res.send(findResult);
};
const saveMessages = async (req, res) => {
  const insertResult = await collection.insertOne(req.body);
  res.send(insertResult);
};

const saveMails = async (req, res) => {
  const insertResult = await collection2.insertOne(req.body);
  res.send(insertResult);
};
const getMails = async (req, res) => {
  const findResult = await collection2.find({}).toArray();
  res.send(findResult);
};

module.exports = { saveMessages, getMessages, saveMails, getMails };
