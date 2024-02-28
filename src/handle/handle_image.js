import slugify from "./slug";
let prefix = Date.now();

export const handleImage = (req)=>{
  return `${req.protocol}://${req.get("hots")}/public/uploads/${prefix}-${slugify(req.file?.filename)}`
}

export const handleImages = (req)=>{
  let imagesPaths = [];
  let files = req.files;
  if(files){
    files.map(file =>{
      imagesPaths.push(`${req.protocol}://${req.get("host")}/public/uploads/${prefix}-${slugify(req.file?.filename)}`)
    })
  }
  return imagesPaths;
}