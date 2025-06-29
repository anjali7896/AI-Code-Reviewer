require('dotenv').config()
const app=require('./src/app')


app.listen(3000,()=>{   //for starting the server
    console.log("server is ruuning on http://localhost:3000")
});
