import movieModel from "../models/movieModel.js";

  export const test = async (req, res) => {
    try {
      const decodeJSON = (str)=>{
        let regex = /([{,]\s*)([A-Za-z_][A-Za-z0-9_]*)\s*:/g;
        let replaceStr = '$1"$2":';
        return JSON.parse(str.replaceAll(regex, replaceStr));
    }
      const {query} = req.body
      console.log(query)
      let queryData = decodeJSON(query)
      console.log(queryData);
     
      const data = await movieModel.find( queryData);
      res.status(200).send(
        data
      );
    } catch (error) {
      console.log(error.message);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };