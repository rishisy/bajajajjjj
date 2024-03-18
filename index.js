const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post("/bfhl", (req, res) => {
    try{
    const { data } = req.body;
    const numbers = data.filter(number => 
        {
            number = parseInt(number)
            return typeof number === 'number' && number % 2 === 0
        }
    )
    const odd = data.filter(number => {
        number = parseInt(number)
        return typeof number === 'number' && number % 2 !== 0 && !isNaN(number)
    })
    const alphabhets = data.filter(alphabet => {
        const number = parseInt(alphabet)
        if (typeof alphabet === 'string' && isNaN(number)) {
            return true;
        } else {
            return false; 
        }
    }).map(alphabet => alphabet.toUpperCase());

    res.status(200).json({
        success: true,
        user_id: "Rishi_Singh",
        email: "Rishi1809.be21@chitkara.edu.in",
        roll: "2110991809",
        odd_numbers: odd,
        even_numbers: numbers,
        alphabhets: alphabhets
    })
}catch(err){
    res.status(500).json({
        status: false,
        message: err.message
    })
}
}
)



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});