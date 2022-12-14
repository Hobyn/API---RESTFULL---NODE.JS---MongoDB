const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      ""
    );

    console.log("Conectado ao banco!");
  } catch (error) {
    console.log(`erro ${error}`);
  }
}

module.exports = main;
