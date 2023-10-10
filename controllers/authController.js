import movieModel from "../models/movieModel.js";

  export const test = async (req, res) => {
    try {

      const query = { $or: [ { rating: 94 }, { name: "Iron Man" } ] }
      const stringifiedQuery = JSON.stringify({ query });
      // the above is the data in your API then stringify it and then push to req.body.query


      // get query from req.body as {query} = req.body
      const finalQuery = JSON.parse(stringifiedQuery)
      const data = await movieModel.find(finalQuery.query);
      res.status(200).send({
        data
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };