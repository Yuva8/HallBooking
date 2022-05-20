const {MongoClient} = require('mongodb');

module.exports = {
    SelectedDB : {},
    async connect (){
        try{
              const client =  await MongoClient.connect(process.env.MONGO_DB_DRIVER);
              this.SelectedDB = client.db('HallBooking');
              console.log(this.SelectedDB);
        }
        catch(err){
            console.log(err);
        }
    }

}