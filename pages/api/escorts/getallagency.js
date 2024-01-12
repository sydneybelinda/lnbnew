
import db from "../../../models"

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await db.escorts.findAndCountAll({

      order: [
      //  ['id', 'DESC'],
        ['enabled', 'DESC'],
        ['firstName', 'ASC'],
      ],
  
    })

    if(!escorts){
      escorts = [];
    }



    return res.status(200).send(escorts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
