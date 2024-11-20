const express = require('express');
const app = express();
require('dotenv').config();
PORT = process.env.PORT || 8000;

//request parameter
app.get('/', (req, res) =>{
   const id = req.params.id;
   const username = req.params.username;

   res.send(`User id: ${id}.  Username: ${username}`);
});


app.listen(PORT, ()=>{
    console.log(`Connected on port ${PORT}`);
});

