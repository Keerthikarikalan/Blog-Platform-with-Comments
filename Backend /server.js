const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"blogdb"
});

db.connect(()=>{
    console.log("MySQL Connected");
});

app.get("/posts",(req,res)=>{

    db.query(
        "SELECT * FROM posts",
        (err,result)=>{
            if(err) throw err;
            res.json(result);
        }
    );

});

app.post("/posts",(req,res)=>{

    const {title,content}=req.body;

    db.query(
        "INSERT INTO posts(title,content) VALUES(?,?)",
        [title,content],
        (err,result)=>{
            if(err) throw err;

            res.json({
                message:"Post Created"
            });
        }
    );

});

app.post("/comments",(req,res)=>{

    const {postId,comment}=req.body;

    db.query(
        "INSERT INTO comments(postId,comment) VALUES(?,?)",
        [postId,comment],
        (err,result)=>{
            if(err) throw err;

            res.json({
                message:"Comment Added"
            });
        }
    );

});

app.delete("/posts/:id",(req,res)=>{

    db.query(
        "DELETE FROM posts WHERE id=?",
        [req.params.id],
        (err,result)=>{
            if(err) throw err;

            res.json({
                message:"Post Deleted"
            });
        }
    );

});

app.listen(5000,()=>{
    console.log("Server Running On Port 5000");
});
