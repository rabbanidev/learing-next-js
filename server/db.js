import { connect } from 'mongoose';



const url = `mongodb+srv://news-portal:XUoNLlIT7unZA8po@cluster0.oqb8vtg.mongodb.net/news-portal?retryWrites=true&w=majority`

const dbConnect = async ()=> {
  try {
    await connect(url);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connected failed: ", error);
  }

}

export default dbConnect;