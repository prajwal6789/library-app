const mongoose=require("mongoose");
const {Schema}=mongoose;
const library=new Schema(
    {
        Bookname: String,
        Nameoftheissuer: String,
        Duedate: String
    }
);
module.exports=mongoose.model("Library",library,"Library");
