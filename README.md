# SqlHelper
Node Mysql SqlHelper

```
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
```