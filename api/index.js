import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
dotenv.config();
const app =express();
app.use(express.json());
// const PORT=4000;
// const  MONGO_URL='mongodb+srv://revanth9347569169:8lKdlwIPLTHAslDF@cluster0.qgc8rhs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log(err);
});


app.listen(process.env.PORT,()=>{
    console.log(`Server listening on ${process.env.PORT}`)
});


app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);