const http = require('http');

class Request {
    constructor(host, port, path, method) {
        this.host = host; 
        this.port = port; 
        this.path = path; 
        this.method = method;
    }
      
    sendRequest(callback) {
        var options = {
            host: this.host,
            port: this.port,
            path: this.path,
            method: this.method
        };

        var req = http.request(options, function(res) {
            res.setEncoding('utf8');

            res.on('data', function (data) {
                callback(null, data);
            });
        });
        
        // write data to request body
        req.write('data\n');
        req.write('data\n');
        req.end();
    }
}

module.exports = Request;