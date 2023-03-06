import cors from 'cors'
import express, { Router } from 'express'
import morgan from 'morgan'
import corsConfig from './config/cors.config'
import routes from './routes/routes'

class Server {
  private app: express.Application = express()
  private port = Number(process.env.PORT || 4000)

  initMIddleware(router: Router) {
    this.app.use(cors(corsConfig))
    this.app.use(morgan('dev'))
    this.app.use(router)
    return this
  }

  async startServer() {
    try {
      this.app.listen(this.port, () => {
        console.log('Server start')
      })
    } catch (e) {
      this.app.use((req, res) => {
        return res.send(500).json('Server Error')
      })
    }
  }
}

new Server().initMIddleware(routes).startServer()
