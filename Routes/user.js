const express=require("express");
const route=express.Router();
const fs=require("fs")


route.post('/register',function (req, res){
    if(req.body.user_name != "" && req.body.password != "")
    {
        let users_data=fs.readFileSync("users.json","utf-8")
        users_data=JSON.parse(users_data);
        // console.log(users_data)
        users_data.push(req.body)
        fs.writeFileSync("users.json",JSON.stringify(users_data,null,2),'utf-8')
        res.send("User was registered successfully")
    }
    else {
        res.status(442).send(" Error Wrong data")
    }
    
} )

route.post('/login',function (req, res){
    if(req.body.user_name != "" && req.body.password != "")
    {
        let users_data=fs.readFileSync("users.json","utf-8")
        users_data=JSON.parse(users_data);
        let flag=0;
        for (let i = 0; i < users_data.length; i++) {
            if(users_data[i].user_name==req.body.user_name && users_data[i].password==req.body.password){
                flag=1;
                res.send("logged in successfully")

            }
        }
        if(flag!=1)
            {
                res.status(401).send("Invalid User name or password")
            }
    }
    else {
        res.send(" Error Wrong data")
    }
    
} )




module.exports=route