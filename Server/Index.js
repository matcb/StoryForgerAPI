import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
   res.json({
    message:"Server running",
    status:200
   })
})  

app.listen(3000, () => {
    console.log("Server is runnin on port 3000")
})

