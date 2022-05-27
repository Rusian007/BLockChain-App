
const express = require("express");

const { MongoClient } = require("mongodb");
const PORT = process.env.PORT || 3001;

const app = express();

const uri = "mongodb+srv://rusian:hellsheart@survaycluster.nowszxv.mongodb.net/?retryWrites=true&w=majority";
MongoClient.connect(uri,{useNewUrlParser:true}, async function(err, client){
  const db = client.db('survay')
  console.log("DB COnnected")

  const dbstuffs = db.collection("creation")

  //await dbstuffs.insertOne({data: "FOX"})
  console.log("Done!")
  //const results  = await db.collection("creation").find().toArray()
  //console.log(results)
})

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
if (process.env.NODE_ENV === "production"){
  app.use(express.static('client/build'));

  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,"client","build", "index.html"))
  })
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
