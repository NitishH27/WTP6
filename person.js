let http = require('http');
const sammy = require('./sammy');
const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    var Person={Fname:`Rina`,Lname:`Mehta`,age:35, full_name : function() {
      return this.Fname + " " + this.Lname;}};-

    res.write(JSON.stringify(sammy));
    res.end(`{"message": "This is a JSON response"}`);
};
http.createServer(requestListener).listen(9000);