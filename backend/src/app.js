/*const express=require('express');
const aiRoutes=require('./routes/ai.routes')
const cors=require('cors');    
const app=express()   //server create hota hai
app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{   //route or dummy route
    res.send("hello world")

})

app.use('/ai',aiRoutes)   jo bhi route ai se start wo aiRoutes pr jatyegi

module.exports=app; yha se app ko export kiya hai  

*/

const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins (for local development)
app.use(cors());

// Enable parsing JSON body
app.use(express.json());

// Example endpoint
app.post('/ai/get-review', (req, res) => {
  const { code } = req.body;
  
  // Fake review response for now
  res.json(`✅ Your code looks good! Total length: ${code.length}`);
});

// Start server
app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});
