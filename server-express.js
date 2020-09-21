//Importation du framework Express
//installé précédemment avec npm install express --save
const express = require('express');


//initialisation de notre application express

const app = express();
const port = 4000;
app.use('/public',
    express.static(__dirname + '/public'))

app.get('/', (req, res) =>{
    //res.send('Hello Dude !');
    res.sendFile(__dirname + '/index.html');
})

//démarrage du serveur et écoute des connexions sur port 4000
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}/`)
    console.log(`Press CTRL + C to stop\n`)
})