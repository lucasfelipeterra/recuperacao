import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/recuperaçao");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
    }
};

connectDB();

export default mongoose;
