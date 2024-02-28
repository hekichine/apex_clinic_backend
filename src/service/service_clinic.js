import serviceSchema from "../model/service_clinic";

const serviceClinic ={
  getAll: async () =>{
    return await serviceSchema.find({});
  },
  create: async(data)=>{
    let new_service = new serviceSchema(data);
    return await new_service.save();
  },
  findById: async(slug)=>{
    return await serviceSchema.findOne({slug: slug});
  }
}

export default serviceClinic;