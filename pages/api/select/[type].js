import * as Models from "../../../models";

export default async (req, res) => {

    const {
        query: { type }
      } = req;


   const s = await Models[type].findAll();

 //var s = []
  return res.status(200).send(s);
};
