// in progress
const SHA256 = require("crypto-js/sha256");

class Block {
  constructor(index, data, previousHash) {
    this.index = index;
    this.timestamp = new Date();
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
