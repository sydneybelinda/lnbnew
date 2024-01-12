import db from "../../../models";

export default async (req, res) => {
  if (req.method === "POST") {


    const name = req.body.name;
    const username = req.body.username;

    try {
      const file = await db.files.findOne({
        where: { file: name, user: username }
      });

      file.destroy();

      return res.status(200).json({ file, msg: "post deleted successfully" });
    } catch (err) {
      return res.status(500).send(err);
    }
  } else {
    res.status(400).json({ message: "Not Authorised" });
  }
};
