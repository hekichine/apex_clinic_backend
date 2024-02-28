import serviceClinic from '../service/service_clinic';
import slugify from '../handle/slug'

const serviceController = {
  getAll: async (req, res) => {
    try {
      let list_service = await serviceClinic.getAll();
      if (list_service && (list_service).length > 0) {
        return res.status(200).json({
          list_service: list_service
        })
      }
      return res.status(200).json({
        list_service: "Empty"
      })
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  },
  create: async (req, res) => {
    try {
      let slug = slugify(req.body.name);
      let has_service = await serviceClinic.findById(slug)
      if(!has_service){

        let service = {
          ...req.body,
          slug: slug
        }

        let new_service = await serviceClinic.create(service);

        if (new_service !== null) {
          return res.status(200).json({
            message: "Create service success",
            new_service
          });
        }
      }
      return res.status(404).json({
        message: "service exist",
        err: 1,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Server error",
        error,
      });
    }
  }
};

export default serviceController;
