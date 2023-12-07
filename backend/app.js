const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");
const multer = require("multer");
const FormData = require("form-data");
const path = require('path')

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let uploadedFileName;

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Internal error" });
// });

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const formData = new FormData();
    const fileStream = req.file.buffer;
    const filePath = "file.pdf";

    fs.writeFileSync(filePath, fileStream);

    formData.append("file", fs.createReadStream("file.pdf"));
    uploadedFileName = req.file.originalname;

    const options = {
      headers: {
        "x-api-key": "xxx",
        ...formData.getHeaders(),
      },
    };

    const config = {
        headers: {
          "x-api-key": "xxx",
          "Content-Type": "application/json",
        },
      };

    const response = await axios.post(
      "https://api.chatpdf.com/v1/sources/add-file",
      formData,
      options
    );

    const sourceid = response.data.sourceId;
    console.log("File is added.");

    const message = {
      sourceId: sourceid,
      messages: [
        {
          role: "user",
          content:
            "Generate 10 multiple-choice questions and their answers about the content without mention about the position, segment or page",
        },
      ],
    };

    const data = {
      sources: [sourceid],
    };

    const generate = await axios.post(
      "https://api.chatpdf.com/v1/chats/message",
      message,
      config
    );

    console.log("Q&A is done");

    const remove = await axios.post(
      "https://api.chatpdf.com/v1/sources/delete",
      data,
      config
    );

    console.log("File is removed");

    mcqdata = generate.data.content

    res.status(200).json({
      success: true,
    });

  } catch (error) {
    console.error("File upload failed:", error.message);

    if (error.response) {
      console.log("Response:", error.response.data);
    }

    res.status(500).json({ error: "File upload failed" });
  }
});

app.get("/getData", (req, res) => {
  function convertToJSON(questionsText) {
    const questions = questionsText.split('\n\n');
  
    const jsonData = questions.map((question, index) => {
      const lines = question.split('\n');
      const id = index + 1;
      const questionText = lines[0].slice(3); // Remove the question number
      const choices = lines.slice(1, lines.length - 1).map(choice => choice.slice(0));
      const answerIndex = lines[lines.length - 1].indexOf("Answer:");
      const answerText = answerIndex !== -1 ? lines[lines.length - 1].slice(answerIndex + 8, answerIndex + 10) : '';
  
      return {
        id,
        question: questionText,
        choices,
        answer: answerText,
      };
    });
  
    return jsonData;
  }

  // Transform the data
  if (mcqdata) {
    const content = convertToJSON(mcqdata);
    res.json({ data: content, filename: uploadedFileName });
  } else {
    res.status(404).json({ error: "No data available" });
  }
});

app.get("/checkResults", (req, res) => {
  if (mcqdata) {
    const resultsReady = true;
    res.json({ resultsReady });
  } else {
    res.status(404).json({ error: "No data available" });
  }
})

app.post("/clearData", (req, res) => {
  // Clear the mcqdata
  mcqdata = null; 

  res.status(200).json({
    success: true,
  });
});

app.listen(port, () => {
  console.log(`Express server is running at http://localhost:${port}`);
});
