const url = "http://192.168.7.1/logger";
const EventEmitter = require("events");

class Logger extends EventEmitter {
  log = async (message) => {
    console.log(message);
    this.emit("messageLogged", {
      message: "this is message",
      status: "ok",
    });
  };
}

module.exports.Logger = Logger;
module.exports.url = url;
