/*const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://rusian:hellsheart@survaycluster.nowszxv.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(uri,{useNewUrlParser:true}, async function(err, client){
  //const db = client.db('survay')
  module.exports = client
  console.log("DB COnnected")

  //const dbstuffs = db.collection("creation")

  //await dbstuffs.insertOne({data: "FOX"})
  console.log("Done!")
  // module.exports = client
  //const results  = await db.collection("creation").find().toArray()
  //console.log(results)
})*/

const mongoose = require("mongoose");
const uri = "mongodb+srv://rusian:hellsheart@survaycluster.nowszxv.mongodb.net/?retryWrites=true&w=majority";
module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true

        };
        await mongoose.connect(uri, connectionParams);
        console.log("connected to database.");
    } catch (error) {
        console.log("could not connect to database", error);
    }
};
