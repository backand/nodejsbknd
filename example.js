/**
 * Created by backand on 2/4/16.
 */

var backand = require("./backand");

//

backand.anoymousAuth('08fd510a-4b52-43fa-938f-f2c841bd3106')
    .then(function(){
        backand.get('/1/objects/todo?pageSize=1&pageNumber=1').then(function(data){
            console.log('anoymousAuth Data: ',data);
        });
    });


backand.auth({ username:'test@angular2.com', password:'angular2', appname:'angular2' })
    .then(function(){
        backand.get('/1/objects/todo?pageSize=1&pageNumber=1').then(function(data){
            console.log('auth Data: ',data);
        });
    });