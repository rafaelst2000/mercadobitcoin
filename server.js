import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { v4 as uuidv4 } from 'uuid'

const app = express()
app.use(express.json())
const port = 3000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'dist')))

app.get('/registration', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.post('/registration', (req, res) => {
  const { name, email, personType, documentNumber, birthDate, cellphone, password } = req.body
  if (!name || !email || !personType || !documentNumber || !birthDate || !cellphone || !password)
    return res.status(400).json({ message: 'All fields are required' })

  const newUserId = uuidv4()
  // create the new user

  return res.status(201).json({ message: 'User has been created', userId: newUserId })
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
