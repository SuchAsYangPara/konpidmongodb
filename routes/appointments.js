const express = require('express');
const router = express.Router({mergeParams:true});
const {getAppointments, addAppointment, getAppointment, updateAppointment, deleteAppointment} = require('../controllers/appointment');
const {protect,authorize} = require('../middleware/auth');
router.route('/').get(protect,getAppointments).post(protect,authorize('admin','user'),addAppointment);
router.route('/:id').get(protect,getAppointment).put(protect,authorize('admin','user'),updateAppointment).delete(protect,authorize('admin','user'),deleteAppointment);

module.exports=router;