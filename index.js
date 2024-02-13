const http = require("http");
//console.log(http);

const server = http.createServer((req, res) => {
      //console.log(req.url);
      //res.end("Noice"); -> ab unlimited reload nahi hoga

      //res.end("<h1>Hello Hi Shashriyakal</h1>")

      if(req.url === "/about")
      {
            res.end("<h1>About</h1>");
      }
      if(req.url === "/contact")
      {
            res.end("<h1>You can feel free to contact us</h1>");
      }
      if(req.url === "/")
      {
            res.end("<h1>Welcome Home</h1>");
      }
      else
      {
            res.end("<h1>Page not found</h1>");
      }
})

server.listen(5000, () => {
      console.log("Server is working");
})