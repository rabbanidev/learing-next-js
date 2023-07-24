import dbConnect from "../../../server/db";
import News from "../../../server/model/news";

dbConnect();

const newsHandler = async (req, res) => {
  const { method, body } = req;
  switch (method) {
    case "GET":
      try {
        const news = await News.find({});
        if (!news)
          return res
            .status(404)
            .json({ status: "failed", message: "News does not exists" });

        return res.status(200).json({
          status: "success",
          message: "News retrive successfully",
          data: news,
        });
      } catch (error) {
        return res
          .status(400)
          .json({ status: "failed", message: error.message });
      }

    

    default:
      return res.status(400).json({ message: "This method is not supported" });
  }
};

export default newsHandler;
