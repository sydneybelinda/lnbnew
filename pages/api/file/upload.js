var fs = require("fs");
import formidable from "formidable";

import db from "../../../models";

// export default async (req, res) => {
//   // for the pipe to work, we need to disable "bodyParser" (see below)

//   const data = await new Promise(function (resolve, reject) {
//     const form = new formidable.IncomingForm();
//     form.parse(req, async function (err, fields, files) {
//       if (err) return reject(err);


//       const uploadedFile = files.file.path;
//       const fileName = files.file.name;
  
//       const data = {
//           file: files.file.name,
//           filesize: files.file.size,
//           owner: "lnbsydney",
//           user: files.file.owner
//       }
  

//       console.log(data);
//       console.log(files)
//       const newfile = await db.files.create(data)

//       fs.rename(uploadedFile, `public/uploadedimages/${fileName}`, function(err) {
       
       
//         res.status(200).send(`public/uploadedimages/${fileName}`);

//         return resolve()
//       });


//       // resolve({ fields, files });
//     });
//   });
    

// };


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

  console.log(data.fields.username)

 
  const uploadedFile = data.files.file.path


  const fdata = {
    file: data.files.file.name,
    filesize: data.files.file.size,
    owner: "lnbsydney",
    user: data.fields.username
}

console.log(fdata)

const newfile = await db.files.create(fdata)

if (!fs.existsSync(`static/userdata/${fdata.user}`)){
  fs.mkdirSync(`static/userdata/${fdata.user}`);
  fs.mkdirSync(`static/userdata/${fdata.user}/images`)
}




  const rename = await new Promise((resolve, reject) => {
    fs.rename(uploadedFile, `static/userdata/${fdata.user}/images/${fdata.file}`, function(err) {
            if (err) {
              return (err);
            }
      
        resolve({err})
          });
        })


  //return the data back or just do whatever you want with it
  res.status(200).send(`/userdata/employment/${fdata.user}/images/${fdata.file}`);
}

export const config = {
  api: {
    bodyParser: false
  }
};
