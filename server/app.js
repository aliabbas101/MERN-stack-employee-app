import bodyParser from "body-parser";
import express from "express";
import employeeRouter from "./employee.js";

const app = express();

/** Middlewares */
app.use(bodyParser.json());


app.use((req,res, next)=>{
    console.log(req.url, req.method);
    next();
});


app.get('/',(req, res)=>{
    res.json({message: 'Success'});
    res.end();
});

app.use('/employees', employeeRouter);

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log("Started listening on PORT: ", PORT);
});