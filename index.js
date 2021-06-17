const path = require("path");
const fs = require("fs");
const _ = require("underscore");
const { Logger } = require("./logger");

// fs.readdir("./", (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// });

// fs.readFile("./index.js", "utf8", (err, fileContent) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log(fileContent);
//   }
// });

// const pathObj = path.parse(__filename);
// const pathBasename = path.basename(__filename);
// const pathNormalize = path.normalize(__filename);
// const pathJoin = path.join(__filename, "book");

// console.log(pathObj);
// console.log(pathBasename);
// console.log(pathNormalize);
// console.log(pathJoin);

const logger = new Logger();

logger.on("messageLogged", (arg) => {
  console.log("emmit chaqirildi", arg);
});

logger.log("Fwefwefwe");

let result = _.contains([3, 5, 9], 5);
console.log(result);

// console.log(url);
