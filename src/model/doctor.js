import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  slug:{
    type: String,
    unique: true
  },
  name: {
    type: String,
    default: "Anonymous"
  },
  position: {
    type: String,
    required: true
  },
  qualification:{
    type: String,
    required: true
  },
  contact:[
    {
      phone:{
        type: String,
        required: true
      },
    },
    {
      email: {
        type: String,
        required: true
      }
    }
  ],
  working_time:[

  ],
  slogan: {
    type:String
  },
  service:[
    { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true }
  ],
  image:{
    type:String
  }
},
  {
    timestamps: true
  })

doctorSchema.virtual('id').get(function(){
  return this._id.toHexString();
})

doctorSchema.set('toJSON', {
  virtuals: true
})

export default mongoose.model("Doctors", doctorSchema);