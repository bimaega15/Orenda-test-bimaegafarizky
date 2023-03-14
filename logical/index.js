const { isPalindrome } = require("./utils/index");
var http = require("http");
var port = normalizePort("1111");
var debug = require("debug")("api:server");

let x = "727";
let output = isPalindrome(x);
let text = `
Input: ${x} </br>
Output: ${output.isPolindrome} </br>
Explanation: From left to right, it reads ${
  output.isResFirstX
}. From right to left, it becomes ${output.isReverseSecondX}. Therefore it is ${
  output.isPolindrome ? "a palindrome" : "not a palindrome"
}
`;
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`${text}`);
});

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);

  console.log(`Server running on port ${addr.port}`);
  console.log(`${text}`);
}
