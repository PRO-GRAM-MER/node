import * as dotenv from 'dotenv'
import config from "./config"
dotenv.config()

import app from './server'

app.listen(config.port, () => {
  console.log(`hello on http://localhost:${config.port}`)
})