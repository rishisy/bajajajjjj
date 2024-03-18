const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
  try {
    console.log(req.body)
    const inputArray = req.body.data;
    console.log(typeof inputArray)

    if (!Array.isArray(inputArray)) {
      return res.status(400).json({
        is_success: false,
        error: "Input must be an array",
      });
    }

    const userId = "john_doe_17091999"; 

    const evenNumbers = inputArray.filter((num) => num % 2 === 0);
    const oddNumbers = inputArray.filter((num) => num % 2 !== 0);
    const alphabets = inputArray
      .filter((item) => typeof item === "string" && item.match(/^[a-zA-Z]$/))
      .map((item) => item.toUpperCase());

    res.status(201).json({
      is_success: true,
      user_id: userId,
      email_id: "Rishi1809.be21@chitkara.edu.in",
            college_roll_number: "123456", 
      even_numbers: evenNumbers,
      odd_numbers: oddNumbers,
      alphabets_uppercase: alphabets,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ is_success: false, error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});