const mongo = require('../shared');
const {ObjectId} = require('mongodb');

module.exports.getRoomBooking = async (req, res, next) => {
    try{
            const data = await mongo.SelectedDB.collection('RoomBooking').find().toArray();
            res.send(data);
    }
    catch(err){
        console.log(err);
    }
}

module.exports.createroom = async (req,res,next) => {
    try{
         const data = await mongo.SelectedDB.collection('Rooms').insert(req.body);
         res.send(data)
    }catch(err) {
        console.log(err);
    }
}

module.exports.updateroom =  async (req,res,next) => {
    try{
      const response =  await mongo.SelectedDB.collection('Rooms').
      findOneAndUpdate({_id: ObjectId(req.params.id)}, {$set: {...req.body}}, {returnNewDocument: true})
         res.send(response);
    }
    catch(err){
          console.error(err)
    }
}

module.exports.createRoomBooking = async (req,res,next) => {
    try{
         const data = await mongo.SelectedDB.collection('RoomBooking').insert(req.body);
         res.send(data)
    }catch(err) {
        console.log(err);
    }
}

module.exports.createBookingRoomlist = async (req,res,next) => {
    try{
           const data = await mongo.SelectedDB.collection('Rooms').aggregate([{
            $lookup: {
                   from:"RoomBooking",
                   localField: "room_id",
                   foreignField: "room_id",
                   as: "Rooms_with_Booked_Data",
                    pipeline:[
                       {
                           $project:{name:1, status:1, date:1,startTime:1,endTime:1}
                       }
                       ],
                 }
        }]).toArray();
        res.send(data);
    }
    catch(err) {
        console.log(err);
    }
}

module.exports.createCustomerwithBookedData = async (req,res,next) => {
    try{
           const data = await mongo.SelectedDB.collection('RoomBooking').aggregate([
            {
            $lookup: {
                   from: "Rooms",
                   localField: "room_id",
                   foreignField: "room_id",
                   pipeline:[
                       {
                           $project:{_id:0, room_id:0, totalSeats:0, pricePerHourInRupees:0, amenities:0}
                       }
                       ],
                   as: "Customer_with_booked_data"
                 }
        }
        ]).project({_id:0, room_id: 0,Bookingid:0}).toArray();
           
        res.send(data);
    }
    catch(err) {
        console.log(err);
    }
}

