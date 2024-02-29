import doctor from "../model/doctor";

const doctorService ={
  getAll: async () =>{
    return await doctor.find();
  },
  create: async(data)=>{
    //  find doctor
    let data_slug = data.slug;
    let has_doctor = await doctor.findOne({slug: data_slug});
    // has doctor => return
    if(has_doctor){
      return null;
    }
    // else create doctor
    let new_doctor = new doctor(data);

    return await new_doctor.save();
  },
  findById: async(slug)=>{
    return await doctor.findOne({slug: slug});
  }
}

export default doctorService;