
var connect = require('connect');

var url = require('url');
var app = connect();

/*
* Calculator Function
*/
var calculator = function(req, res, next) {
    res.write('<h1>Calculator App</h1>');

    //parse url
    var parsedURL = url.parse(req.url, true).query;

    //initializing variables from url
    var method = parsedURL.method;
    var ValueOfx = parseFloat(parsedURL.x);
    var ValueOfy = parseFloat(parsedURL.y);

    if (!isNaN(ValueOfx) && !isNaN(ValueOfy)) {
        switch (method) {
            case 'add':
                res.write('Addition URL Request<br/><br/>'+ ValueOfx + ' + ' + ValueOfy + ' = ' + (ValueOfx + ValueOfy));
                break;
            case 'subtract':
                res.write('Subtraction URL Request<br/><br/>'+ ValueOfx + ' - ' + ValueOfy + ' = ' + (ValueOfx - ValueOfy));
                break;
            case 'multiply':
                res.write('Mulitplication URL Request<br/><br/>'+ ValueOfx + ' * ' + ValueOfy + ' = ' + (ValueOfx * ValueOfy));
                break;
            case 'divide':
                if(ValueOfy!=0)
                {
                    res.write('Division URL Request<br/><br/>'+ ValueOfx + ' / ' + ValueOfy + ' = ' + (ValueOfx / ValueOfy));
                }
                else
                {   
                res.write('Division URL Request<br/><br/>cannot divide a number by 0');
                }
                break;
            default : 
                res.write('Apply a valid method');
                break;
        };
    } else {
        res.write('Value must be number');
    };
    res.end();
};//end

app.use(calculator);

app.listen(3000);

console.log("Connect Now listening on Port 3000");