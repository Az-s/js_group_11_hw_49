var figlet = require('figlet');
 
figlet(process.argv[2], (err, data) => {
    console.log(data)
});