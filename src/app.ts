import "dotenv/config"
import express, { response }  from "express";
import { router } from "./Routes"

const app = express();
app.use(express.json())
app.use(router);

app.get('/github', (req, res) => {
  res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) => {
  const {code} = req.query;
  return res.json(code)
})

app.listen(4000, ()=> console.log(`👨‍🎤 Server running on port 4000`)) 