import db from "../../../models";

export default async (req, res) => {
  if (req.method === "POST") {

    const data = req.body.data;


    if (data.username) {


    try {
      const escort = await db.escorts.findOne({
        
        where: {
          username: data.username,
        }
      });

      const uescort =  await escort.destroy();

      return res.status(200).send(uescort);
    } catch (err) {
      return res.status(500).send(err);
    }

  } else {
      const error = "no username"
       return res.status(500).send(error)
   }


  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};
