var fs = require("fs");

import Config from "../../../config";


export default async (req, res) => {

    if (req.method !== 'POST') {
        res.status(400).send({ message: 'Only POST requests allowed' })
        return
      }
    
     const name = req.body.folder

      console.log(name)


 var pa = `static/userdata/employment/${name}`;


 console.log(pa)


    
try {
      if (!fs.existsSync(pa)){
          fs.mkdirSync(pa);
      }
  return res.status(200).send('done');

    }
    catch (error){
        return res.status(500).send('error')
    }
};
