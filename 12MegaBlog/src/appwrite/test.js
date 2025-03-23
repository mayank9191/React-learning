import { Client, Account, ID } from 'appwrite'

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject('67d7418d002e22fbd6e7');

const account = new Account(client);

// Register User
account.create(ID.unique(), "bhgrtemail@example.com", "asdffeesrvrvrvgr", "Mayank Kulahara")
  .then(function (response) {
    console.log(response);
  }, function (error) {
    console.log(error);
  });