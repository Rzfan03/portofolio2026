import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
  const ApiUrl = await fetch("https://api.wakatime.com/api/v1/users/rzfan/stats")
  const result = await ApiUrl.json()
  
  res.send(result)
})


export default app;

