import doctor from "../model/doctor";

const doctorService ={
  getAll: async () =>{
    return await doctor.find();
  },
  create: async(data)=>{
    let new_doctor = new doctor(data);
    return await new_doctor.save();
  },
  findById: async(slug)=>{
    return await doctor.findOne({slug: slug});
  }
}

export default doctorService;