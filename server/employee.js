import { Router } from "express";

const employees= [{
    id:1,
    name:"Ali",
    position:"Software engineer",
    level:2,
    skills: ["Javascript", "html", "css"]
}];


const employeeRouter = Router();


employeeRouter.get('/',(req, res)=>{
    res.json(employees);
    res.end();
});


export default employeeRouter;