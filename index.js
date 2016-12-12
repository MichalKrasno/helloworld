const express = require('express');

const options = {
	port: 2147
};
//Instantiate express and call it app
const app = express();

//declare that my client side files are going to be in /public
app.use(express.static(`${__dirname}/public`)); 

app.get('', (req, res) => {
	res.sendFile('index.html');
});

//start the server
app.listen(options.port);
