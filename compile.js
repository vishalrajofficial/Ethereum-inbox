const path = require("path");
// Ensures cross platform compatability
const fs  = require('fs');
// Solidity compiler
const solc  = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// Read in raw source code from contract, you must specify encoding
const source = fs.readFileSync(inboxPath, 'utf8');

// The second parameter is the number of contracts being compiled 
solc.compile(source, 1);
