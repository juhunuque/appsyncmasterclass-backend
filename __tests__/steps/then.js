require('dotenv').config()
const AWS = require('aws-sdk')

const user_exists_in_UsersTable = async (id) => {
  const DynamoDB = new AWS.DynamoDB.DocumentClient()
  const tableName = process.env.USERS_TABLE

  console.log(`looking for user [${id}] in table [${tableName}]`)
  const resp = await DynamoDB.get({
    TableName: tableName,
    Key: {
      id
    }
  }).promise()

  expect(resp.Item).toBeTruthy()
  return resp.Item
}

module.exports = {
  user_exists_in_UsersTable
}
