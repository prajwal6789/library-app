const express=require("express");
const mongoose=require("mongoose");
const app=express();
const url="mongodb+srv://mahesh:201900179@cluster0.6jsnz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const lib=require("./schema");
mongoose.connect(url).then(()=>console.log("Database Connected"));
app.use(express.json());
app.post("/library",async(req,res)=>
        {
            const Bname=req.body.Bookname;
            const Stuname=req.body.Nameoftheissuer;
            const Doi=req.body.Duedate;
            try
            {
                const libr=new lib(
                    {
                        Bookname:Bname,
                        Nameoftheissuer:Stuname,
                        Duedate:Doi
                    }
                );
                const savedlib=await libr.save();
                res.json(
                    {
                        "message":"Data is saved",
                        "data":savedlib
                    }
                );
            }
            catch(err)
            {
                res.json(err);
            }
        }
);
app.use("/",(req,res)=>
        {
            res.send("Mahesh");
            res.json(
                {
                    
                }
            )
        }
    );
app.listen(3000,()=>console.log("Express Started"));
