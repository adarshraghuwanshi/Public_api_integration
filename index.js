import express from "express"
import bodyParser from "body-parser";
import axios from "axios";

const baseURL = "https://v2.jokeapi.dev";

const app = express()
const port = 3000

app.get('/', async (req, res) => {
        try {
          const response = await axios.get(baseURL+"/joke/any");
          res.render("index.ejs", {content : response.data});
        } catch (error) {
          res.send(error.message);
        }
      
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})