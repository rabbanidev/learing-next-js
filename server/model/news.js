import { Schema, model, models } from "mongoose";

const newsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required "]
    },
    description: {
      type: String,
      required: [true,"Description is required "],
    },
    author: {
      type: String,
      required: [true, "Author is required"],
    },
    release_date: {
      type: String,
      required: [true, "Relase date is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    comment_count: {
      type: Number,
      required: [true, "Comment count is required"],
    },
    image_url: {
      type: String,
      required: [true, "Image url is required"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON:{
      virtuals:true
    }
  }
);


// const News = model("News", newsSchema);
// export default News;
export default models.News || model("News", newsSchema);