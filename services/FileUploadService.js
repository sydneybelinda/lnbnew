// import http from "../http-common";
// import axios from "axios";
// import Config from "../config";

// const characters =
//   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

// function generateString(length) {
//   let result = " ";
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }

//   return result;
// }

// const uploadedapi = `${Config.api}/file/uploaded`
// const filename = generateString("10");

// const upload = (file, folder, onUploadProgress) => {

//   console.log("fl:" + folder)

//   let formData = new FormData();

//   formData.append("file", file);
//   formData.append("filename", filename);
//   formData.append("folder", folder);

//   return http.post("/api/file/empupload", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//     onUploadProgress,
//   });
// };

// // const getFiles = () => {
// //   return http.get("/api/file/uploaded");
// // };

// const getFiles = async (folder) => {

//   const data = await axios.post(uploadedapi,{folder:folder})

//   return data

//   //return axios.post(uploadedapi, folder)

//   // const data = await fetch(uploadedapi, {
//   //   method: 'POST',
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //   },
//   //   body: JSON.stringify({folder:folder}),
//   // })

//   //console.log(data.result)

    
//     // http.post("/api/file/uploaded", {
//     //         method: 'POST',
//     //         headers: {
//     //           'Content-Type': 'application/json',
//     //         },
//     //         body: JSON.stringify({folder:folder}),
//     //       })
//   };

// const FileUploadService = {
//   upload,
//   getFiles,
// };

// export default FileUploadService; 
