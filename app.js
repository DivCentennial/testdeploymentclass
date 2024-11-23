import express from 'express';

const app=express();
app.get('/',(req,res)=>{
    res.send("Hello World")
});

app.get('/',(req,res)=>{
    res.send("Hello World test")
});
const PORT = 8080;    //By default its 8080 , though you can use any of it
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})