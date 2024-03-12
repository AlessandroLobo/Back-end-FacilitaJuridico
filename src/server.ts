import express from 'express'
import { routes } from './routes'
import cors from 'cors'

const PORT = 3333
const HOST = '0.0.0.0'

const app = express()

// CORS Configuration
app.use(cors({
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}))

app.use(express.json())

app.use(routes)

app.listen(PORT, HOST, () => { console.log('Server running on port 3333') })
