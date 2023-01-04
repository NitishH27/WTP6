let http = require('http');
let fs=require('fs');
  const requestListener = function (req, res) {
    res.setHeader("Content-Type", "application/pdf");
    var files = fs.createReadStream("./TutorialsPoint_node.js.pdf");
    res.setHeader("Content-Disposition", "attachment;filename=node.js.pdf");

  files.pipe(res)
};

http.createServer(requestListener).listen(8000);

