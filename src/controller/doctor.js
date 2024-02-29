import doctorService from "../service/doctor";
import { handleImage } from '../handle/handle_image';
import slugify from '../handle/slug'

const doctorController = {
  getAll: async (req, res) => {
    try {
      let list_doctors = await doctorService.getAll();
      if (list_doctors && (list_doctors).length > 0) {
        return res.status(200).json({
          list_doctors: list_doctors
        })
      }
      return res.status(200).json({
        list_doctors: "Empty"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  create: async (req, res) => {
    let doctor = {
      ...req.body,
      slug: slugify(req.body.name),
      image: handleImage(req)
    }
    let new_doctor = await doctorService.create(doctor);

    if (new_doctor) {
      return res.status(200).json({
        message: "Create doctor success",
      });
    }
    return res.status(404).json({
      message: "Doctor exist",
      err: 1,
    });
    try {
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  }
};

export default doctorController;
