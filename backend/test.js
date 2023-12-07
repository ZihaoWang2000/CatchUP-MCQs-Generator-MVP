const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

(async () => {
  try {
    const formData = new FormData();
    formData.append("file", fs.createReadStream("file.pdf"));

    const options = {
      headers: {
        "x-api-key": "sec_T71odLXpV5XntTC4DNLKXfai7pK0uBoj",
        ...formData.getHeaders(),
      },
    };

    const response = await axios.post(
      "https://api.chatpdf.com/v1/sources/add-file",
      formData,
      options
    );

    const sourceid = response.data.sourceId;

    const config = {
      headers: {
        "x-api-key": "sec_T71odLXpV5XntTC4DNLKXfai7pK0uBoj",
        "Content-Type": "application/json",
      },
    };

    console.log(sourceid)

    const data = {
      sourceId: sourceid,
      messages: [
        {
          role: "user",
          content:
            "Generate 10 multiple-choice questions and their answers about the content without mention about the position, segment or page",
        },
      ],
    };

    const chatResponse = await axios.post(
      "https://api.chatpdf.com/v1/chats/message",
      data,
      config
    );

    console.log("Result:", chatResponse.data.content);

    const data2 = {
      sources: [sourceid],
    };

    const remove = await axios.post(
      "https://api.chatpdf.com/v1/sources/delete",
      data2,
      config
    );

    mcqdata = chatResponse.data.content

    function convertToJSON(questionsText) {
      const questions = questionsText.split('\n\n');
    
      const jsonData = questions.map((question, index) => {
        const lines = question.split('\n');
        const id = index + 1;
        const questionText = lines[0].slice(3); // Remove the question number
        const choices = lines.slice(1,-1).map(choice => choice.slice(3));
        const answers = lines.slice(-1).map(answer => answer.slice(11,13));
    
        return {
          id,
          question: questionText,
          choices,
          answers,
        };
      });
    
      return jsonData;
    }

    const content = convertToJSON(mcqdata);
    console.log(content)






  } catch (error) {
    console.error("Error:", error.message);
    console.log("Response:", error.response.data);
  }
})();
