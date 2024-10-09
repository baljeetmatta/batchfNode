const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "username":String,
    "password":String,
    "name":String,
    // "age":{
    //     type:Number,
    //     required:true

    // }
    // "city":{
    //     type:String,
    //     default:"ABC"
    // }
    firstname:String,
    lastname:String
});
userSchema.virtual("FName").get(function(){
    return this.firstname+" "+this.lastname;

})
//Name="Code Quotient";

userSchema.virtual("FName").set(function(name){
    let arr=name.split(" ");
    this.firstname=arr[0];
    this.lastname=arr[1];

})
module.exports= mongoose.model("users",userSchema);
