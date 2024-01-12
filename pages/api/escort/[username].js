
//import { File, Escort } from "../../../models";

import db from "../../../models"

export default async (req, res) => {

  
  const {
    query: { username }
  } = req;




  const e = await db.escorts.findOne({
    where: {
      enabled: "True",
      username: username
    }

  })

  const files = await db.files.findAll({
    where: {
      user: username,
     // type: "Thumb"
    }

  })


  let escort = {
    escort: e,
    files: files
  }



//  escort.push(e);
//  escort.push({files: files})

      if (!escort) {
escort = [];
    }



  return res.status(200).send(escort);
};





