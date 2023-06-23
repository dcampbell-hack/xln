import  ErrorResponse from "../utils/errorResponse.ts";
import  path from "path";
import  fs from "fs";
import  { v4 as uuidv4 } from "uuid";

// Model
import Asset from '../model/Asset.ts'
import User from '../model/User.ts'
import Audio from '../model/asset/Audio.ts'
import Image from '../model/asset/Image.ts'
import Video from '../model/asset/Video.ts'
import Document from '../model/asset/Document.ts'

interface IFileData {
  status: number,
  message: string,
  name?: string | undefined,
  path?: string | undefined,
  size?: string | undefined,
  encoding?: string | undefined,
  mimetype?: string | undefined,
  md5?: string | undefined
}

interface IFile {
  success: boolean,
  data: IFileData
}

const createFolder = async (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};


export const createFile = async ({ file, body }): Promise<IFile>  => {

  console.log("File ---", file, body.asset, body.user )

  if(!file) return { success: false, data: {
    status: 500,
    message: `No file has been attached`
  }}

  if(!body.assetId) return { success: false, data: {
    status: 500,
    message: `${body.asset} is not a valid AssetID`
  } };

  // create folder path for media asset
  const fileType = file.mimetype.split("/")[0]
  let dir = `${process.env.FILE_UPLOAD_PATH}/${body.user}/${fileType}`;

console.log("FileType", fileType, dir)

    //Check filesize
  // if(file.size > process.env.MAX_FILE_UPLOAD){
  //     return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  // }

  if(!fs.existsSync(dir)) await createFolder(dir);

  console.log("create file 1", file.name, file.filename)
  console.log("Path", path.parse(file.name).ext)

  file.name = `${body.assetId}_${file.mimetype.split('/')[0]}_${file.name.split(' ').join('_').slice(0, file.name.lastIndexOf('.'))}${
    path.parse(file.name).ext
  }`;

const filePath = `${dir}/${file.name}`;

console.log("File Dir", filePath)

if(fileType === "audio"){ 
// Audio
const audio = await Audio.create({ ...body, ...file, filePath });
console.log("Audio", audio)
} else if(fileType === "image"){
  // Image
  const image = await Image.create({ ...body, ...file, filePath });
  console.log("Image", image)
} else if(fileType === "video"){
 // Video
 const video = await Video.create({ ...body, ...file, filePath });
 console.log("Video", video)
} else {
  // Document
  const document = await Document.create({ ...body, ...file, filePath })
  console.log("Document", document)
}

file.mv(filePath, async (err) => {
  if (err) {
    console.error(err);
    return new ErrorResponse(`Problem file upload`, 500);
  }
});

console.log("createFile returns ", filePath)

const fileObj = {
  success: true,
  data: {
    status: 200,
    message: "File was successfully created",
    name: file.name,
    path: filePath,
    size: file.size,
    encoding: file.encoding,
    mimetype: file.mimetype,
    md5: file.md5
  }
}
return filePath ? fileObj : { success: false, data: {
  status: 500,
  message: "File was not created"
} };

} 


export const assetUpload = async (model, fileType, category, req, res, next) => {

  const _target = await model.findById(req.params.id);

  let dir = `${process.env.FILE_UPLOAD_PATH}/${req.user.id}`;
  let dir2 = `${process.env.FILE_UPLOAD_PATH}/${req.user.id}/${category}`;
  let dir3 = `${req.user.id}/${category}`;

  console.log({ dir, dir2, dir3 })

  createFolder(dir);
  createFolder(dir2);

  if (!_target) {
    return next(
      new ErrorResponse(`Asset not found with the id of ${req.params.id}`, 404)
    );
  }

  //Make sure user is asset owner
  if(_target.user){
    if (_target.user.toString() !== req.user.id) {
      return next(
        new ErrorResponse(
          `User ${req.params.id} is not authorized to update this asset`,
          404
        )
      );

        }
  }

  if (!req.files) {
    return next(new ErrorResponse("No files are found", 404));
  }

  let file;
  file = req.files.file;

  // Check if asset is a image, text, document, video
  console.log({ file })

  //Make sure image is a photo
  if (!file.mimetype.startsWith(fileType)) {
    return next(new ErrorResponse(`Upload ${fileType} file`, 400));
  }

  //Check filesize
  // if(file.size > process.env.MAX_FILE_UPLOAD){
  //     return next(new ErrorResponse(`Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`, 400));
  // }

  //Create custome filename


    file.name = `${_target._id}_${file.filename.slice(0,5)}${
      path.parse(file.name).ext
    }`;

  const filepath = `${dir2}/${file.name}`;
  file.mv(filepath, async (err) => {
    if (err) {
      console.error(err);
      return next(new ErrorResponse(`Problem file upload`, 500));
    }
  });

  const obj = {};
  obj[category] = file.name;

  if(category == "asset"){
    obj['cover'] = file.name;
  }

  const fileObj = {
    filename: `${dir3}/${file.name}`,
    filepath,
    filetype: fileType,
    filesize: file.size,
    category,
  };

  const allFiles = req.user.files;

  await model.findByIdAndUpdate(req.params.id, {
    files: [...allFiles, fileObj],
  });

  await model.findByIdAndUpdate(req.params.id, obj);
  res.status(200).json({
    success: true,
    data: fileObj,
  });

  next();
};
