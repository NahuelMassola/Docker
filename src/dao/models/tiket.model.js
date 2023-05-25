const mongoose = require('mongoose');
const tiketCollection = ('ticket')

const tiketSchema = new mongoose.Schema({
    code: {
      type: String,
      required: true,
    },
    purchase_datetime: {
      type: String,
      required:true ,
    },
    amount: {
      type: Number,
      required: true,
    },
    parchaser: {
      type: String,
      required: true,
    }
  },{
    versionKey: false,
    timestamps:true
});
  
  const tiketModel = mongoose.model(tiketCollection, tiketSchema);
  module.exports = tiketModel;