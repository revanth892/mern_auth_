import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.route.js';
dotenv.config();
 

// const PORT=4000;
// const  MONGO_URL='mongodb+srv://revanth9347569169:8lKdlwIPLTHAslDF@cluster0.qgc8rhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{w
    console.log(err);
});

const app =express();
app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`)
});


app.use('/api/user',router);