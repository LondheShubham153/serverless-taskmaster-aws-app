"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

console.log(process.env.SAMPLE_TABLE);

const kaamBharo = async (event) => {


  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { kaam } = JSON.parse(event.body);
  const createdAt = new Date().toISOString();
  const id = v4();
  const newKaam = {
    id,
    kaam,
    createdAt,
    completed: false
  }
  await dynamoDb.put({
    TableName: process.env.SAMPLE_TABLE ,
    Item: newKaam
  }).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(newKaam),
    };
};

module.exports = {
    handler: kaamBharo,
};