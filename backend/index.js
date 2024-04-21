const express= require ('express');
const app= express ();
const ejsMate= require( "ejs-mate");
const path= require('path');
const mongoose = require ("mongoose");
const Product = require ('./models/product.js');
const item= require

//app.get ('/', (req,res)=> {

//})

app.set("view engine", "ejs")
app.engine ("ejs", ejsMate);
app.set("views",path.join(__dirname, "views"));

mongoose
  .connect(
    "mongodb+srv://devthakkarlm10:AWXdFC2kCICH5fr2@cluster0.liciyj3.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

app.get ("/", (req,res)=> {
    res.render ('home.ejs');
});

app.get ("/list", async (req,res) => {
  const products = await Product.find ();
  res.render ("shoppinglist.ejs",{products})
})


app.listen (3000, ()=>{
    console.log("Serving on 3000!!");
}); 