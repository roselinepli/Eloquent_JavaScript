var message = "Hello world";
console.log(message)


// UTF-8: Unicode Transformation Format-8
// ASCII: American Standard Code for Information Interchange

// The file system module
var fs = require("fs");
fs.readFile("file.txt", "utf8", function(error, text) {
    if (error)
      throw error;
    console.log("The file contained:", text);
});

// The HTTP module
var http = require("http");
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello!</h1><p>You asked for<code>" + request.url + "</code></p>");
    response.end();
});
server.listen(8000);

var http = require("http");
var request = http.request({
    hostname: "eloquentjavascript.net",
    path: "/20_node.html",
    method: "GET",
    headers: {Accept: "text/html"}
}, function(response) {
    console.log("Server responded with status code", response.statusCode);
});
request.end();

// Streams
var http = require("http");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    request.on("data", function(chunk) {
        response.write(chunk.toString().toUpperCase());
    });
    request.on("end", function() {
        response.end();
    });
}).listen(8000);

var http = require("http");
var request = http.request({
    hostname: "localhost",
    port: 8000,
    method: "POST"
}, function(response) {
    response.on("data", function(chunk) {
        ProcessingInstruction.stdout.write(chunk.toString());
    });
});
request.end("Hello server");

var http = require("http"), fs = require("fs");

var methods = Object.create(null);

http.createServer(function(request, response) {
    function respond(code, body, type) {
        if (!type) type = "text/plain";
        response.writeHead(code, {"Contetn-Type": type});
        if (body && body.pipe)
          body.pipe(response);
        else
          response.end(body);
    }
    if (request.method in methods)
      methods[request.method](urlToPath(request.url),respond, request);
    else
      respond(405, "Method " + request.method + " not allowed.");
}).listen(8000);

function urlToPath(url) {
    var path = require("url").parse(url).pathname;
    return "." + decodeURIComponent(path);
}

method.Get = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code == "ENOENT")
          respond(404, "File not found");
        else if (error)
          respond(500, error.toString());
        else if (stats.isDirectory())
          fs.readdir(path, function(error, files) {
            if (error)
              respond(500, error.toString());
            else
              respond(200, files.join("\n"));
          });
        else
          respond(200, fs.createReadStream(path), require("mime").lookup(path));
    });
};

methods.DELETE = function(path, respond) {
    fs.stat(path, function(error, stats) {
        if (error && error.code == "ENOENT")
          respond(204);
        else if (error)
          respond(500, error.toString());
        else if (stats.isDirectory())
          fs.rmdir(path, respondErrorOrNothing(respond));
        else
          fs.unlink(path, respondErrorOrNothing(respond));
    });
};

function respondErrorOrNothing(respond) {
    return function(error) {
        if (error)
          respond(500, error.toString());
        else
          respond(204);
    };
}

methods.PUT = function(path, respond, request) {
    var outStream = fs.createWriteStream(path);
    outStream.on("error", function(error) {
        respond(500, error.toString());
    });
    outStream.on("finish", function() {
        respond(204);
    });
    request.pipe(outStream);
};

var Promise = require("promise");
var fs = require("fs");

var readFile = Promise.denodeify(fs.readFile);
readFile("file.txt", "utf8").then(function(content) {
    console.log("The file contained: " + content);
}, function(error) {
    console.log("Failed to read file: " + error);
});

methods.GET = function(path) {
    return inspectPath(path).then(function(stats) {
        if (!stats) // DOes not exist
          return {code: 404, body: "File not found"};
        else if (stats.isDirectory())
          return fsp.readdir(path).then(function(files) {
            return {code: 200, body: files.join("\n")};
          });
        else
          return {code: 200, type: require("mime").lookup(path), body: fs.createReadStream(path)};
    });
};

function inspectPath(path) {
    return fsp.stat(path).then(null, function(error) {
        if (error.code == "ENOENT") return null;
        else throw error;
    });
}