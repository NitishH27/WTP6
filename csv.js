let http = require('http');

  const requestListener = function (req, res) {
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment;filename=oceanpals.csv");
    res.writeHead(200);
    res.write('id,name,email\n1,Sammy Shark,shark@ocean.com\n2,Rina    Mehta,rina@abc.com');
    res.end();
};

http.createServer(requestListener).listen(8000);
