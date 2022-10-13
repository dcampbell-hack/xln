const ErrorResponse = require("../utils/errorResponse");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const createFolder = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const assetUpload = async (model, fileType, category, req, res, next) => {

  const _target = await model.findById(req.params.id);

  let dir = `${process.env.FILE_UPLOAD_PATH}/${req.user.id}`;
  let dir2 = `${process.env.FILE_UPLOAD_PATH}/${req.user.id}/${category}`;
  let dir3 = `${req.user.id}/${category}`;

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

module.exports = assetUpload;
