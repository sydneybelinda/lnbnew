import db from "../../../models"

export default async (req, res) => {
     if (req.method === "POST") {

        const data = {
            link: req.body.text,
        }

        console.log(data)



  try {
    const newlink = await db.links.create(data)

    return res.status(200).send(newlink);
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }

}
    

};