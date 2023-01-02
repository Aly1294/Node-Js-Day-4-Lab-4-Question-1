const express=require("express");
const route=express.Router();
const fs=require("fs")

route.post('/todos',function (req, res){
    if(req.body.user_name != "" && req.body.password != "")
    {
        let tasks=fs.readFileSync("todo.json","utf-8")
        tasks=JSON.parse(tasks);
        tasks.push(req.body)
        fs.writeFileSync("todo.json",JSON.stringify(tasks,null,2),'utf-8')
        res.send("Todo created successfully")
    }
    else {
        res.send(" Error Wrong data")
    }
    
} )

route.get('/todos',function (req, res){
    let tasks=fs.readFileSync("todo.json","utf-8")
        tasks=JSON.parse(tasks);
        res.send(tasks);
} )

route.get('/todos/:id',function (req, res){
    let tasks=fs.readFileSync("todo.json","utf-8")
    tasks=JSON.parse(tasks);
    let id_of_wanted_task=req.params.id-1
    // console.log(id_of_wanted_task)

    let flag=0;
    for (let i = 0; i < tasks.length; i++) {
        if(i==id_of_wanted_task)
        {
            res.send(tasks[i])
            flag=1
        }

        
    }
    if(flag!=1)
    {
        res.send("Task Not Found")
    }
} )



module.exports=route;