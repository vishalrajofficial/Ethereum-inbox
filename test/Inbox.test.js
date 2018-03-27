// Used for making assertions about tests
const assert = require('assert');
// This will serve as the local test network
const ganache = require('ganache-cli');
// This will always be in uppercase when using Web3
// This is because this is a constructor function and usually
// constructor functions have an uppercase character to begin
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;

beforeEach(() => {
  // Get a list of all accounts
  web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);
  });

  // Use one of these accounts to deploy the contract
  new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ['Hi there!']
    })
    .send({
      from: accounts[0],
      gas: '1000000'
    });
});

describe('Inbox', () => {
  it('deploys a contract', () => {

  });
});
