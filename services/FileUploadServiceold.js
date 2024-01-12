import http from "../http-common";
import Config from "../config";
// var fs = require('fs');

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const url = `${Config.api}/file/empupload`;
const cdurl = `${Config.api}/file/cd`
const uploadedapi = `${Config.api}/file/uploaded`
const filename = generateString("10");



const upload = async (file, folder, onUploadProgress) => {


    


      await fetch(cdurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({folder:folder}),
      })

  let formData = new FormData();

  formData.append("file", file);
  formData.append("filename", filename);
  formData.append("folder", folder);

  return http.post(url, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onUploadProgress,
  });
};

const getFiles = (folder) => {
    return fetch(uploadedapi, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({folder:folder}),
          })
  };

// const getFiles = async(folder) => {
//     // const pa = `static/userdata/employment/${folder}`;
//   //  const pa = `static/userdata/employment`;
//  //   console.log("pa:" + pa)

// try {
//    // const getFiles = await http.get(pa);

//    const getFiles = await fetch(uploadedapi, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({folder:folder}),
//   })

// }
// catch (e){

// }

//  return getFiles
// };

export default {
  upload,
  getFiles,
};
