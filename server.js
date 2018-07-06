var restify = require('restify');
var mysql = require('mysql');


var server = restify.createServer({
    name: 'api',
    version: '1.0.0'
});



// ------------ connect database
var dbPool = mysql.createPool({
    host: 'localhost',
    user: 'xxf',
    password: 'xxxx',
    database: 'xxxx'
});

// -----------  query data
var SqlHelper = require('lib/sqlHelper.js');
var sqlHelper = new SqlHelper('csm_reservation');

var result = sqlHelper.select({
    where: { id: 1 }
});
console.log(result);


// global object
global.dbPool = dbPool;
global.server = server;

server.listen(61337, function () {
    console.log(dateHelper.now() + ':  矩阵公用API项目已启动. 端口：61337');
});


