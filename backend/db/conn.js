const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://roberto:ytKX35CnWXWqJNtZ@cluster0.d76tt6z.mongodb.net/?retryWrites=true&w=majority"
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`erro ${error}`);
  }
}

module.exports = main;
