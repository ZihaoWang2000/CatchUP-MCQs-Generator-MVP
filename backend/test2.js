const axios = require("axios");

const config = {
  headers: {
    "x-api-key": "sec_T71odLXpV5XntTC4DNLKXfai7pK0uBoj",
    "Content-Type": "application/json",
  },
};

const data = {
  sources: ["src_w10wvDnaLOeaBrqn9X3Kl"],
};

axios
  .post("https://api.chatpdf.com/v1/sources/delete", data, config)
  .then((response) => {
    console.log("Success");
  })
  .catch((error) => {
    console.error("Error:", error.message);
    console.log("Response:", error.response.data);
  });