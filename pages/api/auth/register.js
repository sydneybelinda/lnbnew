import bcrypt from "bcryptjs";
// import { PRIVATEKEY } from "../../../../config";
import db from "../../../models";

export default async (req, res) => {


  if (req.method === "POST") {
    const data = req.body.data;

   

 

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(data.password, salt);
    
    

    try {
      const user = await db.users.create({
        email: data.email.toLowerCase(),
        username: data.username.toLowerCase(),
        salt: salt,
        password: hash
      });



      res.json.status(200).json({user: user.users.dataValues});


    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};
