const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4090;

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

    let today = new Date();
 
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
 
    let yyyy = today.getFullYear();
 
    if (dd < 10) {
    dd = '0' + dd;
    }
    if (mm < 10) {
    mm = '0' + mm;
}
today = dd + '/' + mm + '/' + yyyy;
 




    res.status(200).json({
        success: true,
        user_id: "Rishi_Singh_" + today,
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
    console.log("Start");
});