import db from "../../../models";

export default async (req, res) => {
  if (req.method === "POST") {


    const id = req.body.id;

    try {
      const link = await db.links.findOne({
        where: { id: id }
      });

      link.destroy();

      return res.status(200).json({ link, msg: "link deleted successfully" });
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};