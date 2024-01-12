import { NextApiRequest, NextApiResponse } from 'next'
import formidable from 'formidable'
var fs = require("fs");

//set bodyparser
export const config = {
  api: {
    bodyParser: false
  }
}

export default async (req,res) => {
  const data = await new Promise((resolve, reject) => {
    const form = new formidable()
    form.uploadDir = "./";
    form.keepExtensions = true;

    form.parse(req, (err, fields, files) => {
      if (err) reject({ err })
      resolve({ err, fields, files })
    }) 
  })

 
  const uploadedFile = data.files.file.path

  const ext = uploadedFile.split(".")[1]


  const filename = data.fields.filename.trim() + "." + ext;
  const folder = data.fields.folder.trim()

  var pa = `static/userdata/employment/${folder}`;

  if (!fs.existsSync(pa)){
    fs.mkdirSync(pa);
}


  const rename = await new Promise((resolve, reject) => {
    fs.rename(uploadedFile, `static/userdata/employment/${folder}/${filename}`, function(err) {
            if (err) {
              return (err);
            }
      
        resolve({err})
          });
        })


  //return the data back or just do whatever you want with it
  res.status(200).json({
    status: 'ok'
  })
}

