import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://arinjoynandy:arinjoynandy@cluster0.z4j6ohm.mongodb.net/test?retryWrites=true&w=majority');
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;