var http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Ana Sayfaya Hos Geldiniz</h2>");
    } else if (req.url === "/hakkimda") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Hakkimda Sayfasina Hos Geldiniz</h2>");
    } else if (req.url === "/iletisim") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Iletisim Sayfasina Hos Geldiniz</h2>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>404 Sayfa Bulunamadi!</h2>");
    }

    res.end();
  })
  .listen(5000);
