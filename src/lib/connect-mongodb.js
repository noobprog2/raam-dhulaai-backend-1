const mongooes = require("mongoose");

//options ==> db cendentials

(async () => {
  try {
    await mongooes.connect(url, options);
    console.log("db connnecvted");
  } catch (error) {
    throw new Error("not connected:(");
  }
})();
