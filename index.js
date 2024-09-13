const express = require('express'); 
const user = require('./routes/user')
const app = express()
const port = 3000;
app.use(user)




app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on 3000")
    }
})
