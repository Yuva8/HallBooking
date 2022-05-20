const express = require('express');
const router = express.Router();

const getroommodule = require('../module/hallbooking');

router.get('/get',getroommodule.getRoomBooking);

router.post('/create',getroommodule.createroom);

router.put('/update/:id',getroommodule.updateroom);

router.post('/createroombooking',getroommodule.createRoomBooking);

router.get('/BookingRoomList',getroommodule.createBookingRoomlist);

router.get('/bookedroomswithcustomers',getroommodule.createCustomerwithBookedData);


module.exports = router;
