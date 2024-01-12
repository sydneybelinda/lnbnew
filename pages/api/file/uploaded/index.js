var fs = require("fs");

import Config from "../../../../config";


export default async (req, res) => {

    if (req.method !== 'POST') {
       res.status(400).send({ message: 'Only POST requests allowed' })
       return
      }
    
   const name = req.body.folder




//const name = 'vKyu5yGe'







// console.log(pa)


 
try {
    var files = []

    if(name)  {
        var pa = `static/userdata/employment/${name}/`;

        if (fs.existsSync(pa)){
    fs.readdirSync(pa).forEach(file => {
        files.push({name: file, url: `${Config.url}/userdata/employment/${name}/${file}`})
        console.log(file);
      });
    }
    }

  return res.status(200).send(files);

    }
    catch (error){
        return res.status(500).send(error)
    }
};
