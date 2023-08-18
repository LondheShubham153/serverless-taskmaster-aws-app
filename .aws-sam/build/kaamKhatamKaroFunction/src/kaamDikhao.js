"use strict";
const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const kaamDikhao = async (event) => {

  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  let kaam;

  try{
  const result = await dynamoDb.scan({
    TableName: process.env.SAMPLE_TABLE
  }).promise();
  kaam = result.Items;
  }catch(err){
    console.log(err);
  }
  
  return {
    statusCode: 200,
    body: JSON.stringify(kaam),
    };
};

module.exports = {
    handler: kaamDikhao,
};