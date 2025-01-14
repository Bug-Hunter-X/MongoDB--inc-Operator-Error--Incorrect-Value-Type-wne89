# MongoDB $inc Operator Error

This repository demonstrates a common error when using the `$inc` operator in MongoDB: providing a string value instead of a number. The `$inc` operator is used to increment a numerical field in a document. If you pass a string, MongoDB will throw an error.

## Bug

The `bug.js` file contains the erroneous code that attempts to increment the `counter` field using a string value. 

## Solution

The `bugSolution.js` file provides the correct implementation, using a numerical value to increment the `counter` field. 

## How to Reproduce

1. Clone this repository.
2. Install the MongoDB Node.js driver (`npm install mongodb`).
3. Run `bug.js`. You'll observe an error.
4. Run `bugSolution.js`. The update will be successful. 

This example highlights the importance of ensuring correct data types when interacting with MongoDB.