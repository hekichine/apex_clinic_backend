import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  slug:{
    type: String,
    unique: true
  },
  name: {
    type: String,
    default: "Anonymous",
    required: true,
  },
  price:{
    type: Number,
    required: true
  }
},
  {
    timestamps: true
  })

serviceSchema.virtual('id').get(function(){
  return this._id.toHexString();
})

serviceSchema.set('toJSON', {
  virtuals: true
})

export default mongoose.model("Service", serviceSchema);