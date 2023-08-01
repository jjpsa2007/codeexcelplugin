const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   const msg = 'Hello Node!\n'
//   res.end(msg);
// });

fs.readFile('taskpane.html', function(error, html){
if(error) throw error;
http.createServer(function(request, response){
  response.writeHeader(200, {"content-type": "text/html" });
  response.write(html);
  response.end();

}).listen(port)
});
 console.log(`Server running on http://localhost:${port}/`);
// server.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}/`);
// });
