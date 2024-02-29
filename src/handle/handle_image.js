
export const handleImage = (req)=>{
  console.log(req.file);
  return `${req.protocol}://${req.get("host")}/uploads/${req.file?.filename}`
}

export const handleImages = (req)=>{
  let imagesPaths = [];
  let files = req.files;
  if(files){
    files.map(file =>{
      imagesPaths.push(`${req.protocol}://${req.get("host")}/uploads/${req.file?.filename}`)
    })
  }
  return imagesPaths;
}