var fs = require('fs')
var alert = require('alert-node')
var date = new Date()

fs.writeFile(' Current-Date.md', String(date.getDate())+"/"+String(date.getMonth())+"/"+String(date.getFullYear()),function(err){
    if (err) throw err;
    alert("Complete");
})
