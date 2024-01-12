
import db from "../../../models"

// console.log(db.sequelize)

export default async (req, res) => {

  try {

    var escorts = [];

     escorts = await db.escorts.findAndCountAll({
      where: {
        enabled: "True",
      },
      order: [['position', 'ASC']],
  
    })

    if(!escorts){
      escorts = [];
    }



    return res.status(200).send(escorts);
  } catch (err) {
    return res.status(500).send(err);
  }

};
